import React, { Component } from 'react';
import './editLog.css';
import LogApiService from '../../Services/log-api-service';
import config from '../../config';

export default class EditLogForm extends Component {
  static defaultProps = {
    match: { params: {}, },
}

  constructor (props) {
    super(props);
    this.state = {
      log: {
        log_name: '',
        log_entry: ''
    }
  };
  }


goBack = () => {
    this.props.history.goBack();
}


componentDidMount(){
  const logId = this.props.match.params.log_id
  LogApiService.getLog(logId)
      .then(log =>{
          this.setState({log: log})
         
      })
}


handleChange(event) {
  this.setState({
    log: {
      log_name: document.getElementById("editLogForm__log_name").value, 
      log_entry: document.getElementById("editLogForm__log_entry").value
    }
    });
}



handleSubmit(e) {
  e.preventDefault();
  
  const logId = this.props.match.params.log_id
  const { log_name, log_entry } = this.state.log;

    this.setState({error: null})

    
  fetch(`${config.API_ENDPOINT}/logs/${logId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'      
      },
      body: JSON.stringify({
        log_name,
        log_entry
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(data => {
        this.goBack()
        this.context.addLog(data)
    })
    .catch(err => {
        this.setState({ err })
    })

    alert('Save was successful!');
}


  render() {

        
  return (
      <form
      className='editLogForm'
      onSubmit={e => this.handleSubmit(e)} >
        <div className='editLog'>
          
        <h3>Edit Log</h3>

        <div className='log_name'>
            <label htmlFor='editLogForm__log_name'>
              Title
            </label>
            <input 
              id='editLogForm__log_name'
              name='log_name'
              type='text'
              value={this.state.log.log_name}       
              onChange={e => this.handleChange(e)}/>

        </div>

        <div className='log_entry'>
            <label htmlFor='editLogForm__log_entry'>
              Entry
            </label>
            <textarea
              id='editLogForm__log_entry'
              name='log_entry'
              type='text'
              value={this.state.log.log_entry}
              onChange={e => this.handleChange(e)}
              />
        </div>

        <button type="submit" className="button">Save</button>

        <button 
          type="button" 
          className="button"
          onClick={()=> this.goBack()}>
          Go Back
          </button>
      </div>
    </form>
    )
  }
}