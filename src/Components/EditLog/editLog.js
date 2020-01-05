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
  this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


goBack = () => {
    this.props.history.goBack();
}


componentDidMount(){
  const logId = this.props.match.params.log_id
  console.log('Log ID = ', logId)
  LogApiService.getLog(logId)
      .then(log =>{
          this.setState({log: log})
          console.log('this.state.log.log_name == >', this.state.log.log_name)
          console.log('this.state.log.log_entry == >', this.state.log.log_entry)
      })
}


handleChange(event) {
  this.setState({
    log: {
      log_name: event.target.log_name, 
      log_entry: event.target.log_entry
    }
    });
}



handleSubmit(e) {
  e.preventDefault();
  const logId = this.props.match.params.log_id

    const { log_name, log_entry } = this.state;
    const log = {
        log_name: log_name,
        log_entry: log_entry
    }

    this.setState({error: null})

    
    fetch(`${config.API_ENDPOINT}/logs/${logId}`, {
        method: 'PATCH',
        body: JSON.stringify(log),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => {
        if (!res.ok) {
            return res.json().then(err => {
                console.log(`Error is: ${err}`)
                throw err
            })
        }
        return res.json()
    })
  
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
              value={this.state.log.log_name }       
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
          Cancel
          </button>
      </div>
    </form>
    )
  }
}
