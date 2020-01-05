import React, { Component } from 'react';
import config from '../../config';
import './editLog.css';
import PosyContext from '../../PosyContext';
import LogApiService from '../../Services/log-api-service';

export default class EditLogForm extends Component {
  static defaultProps = {
    match: { params: {}, },
}

  constructor (props) {
    super(props);
    this.state = {
        log_name: props.log_name || '',
        log_entry: props.log_entry || ''
    };
  }


goBack = () => {
    this.props.history.goBack();
}


componentDidMount(){
  const logId = this.props.match.params.log_id
  console.log(logId)
  LogApiService.getLog(logId)
      .then(log =>{
          this.setState({log: log})
      })
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}


  render() {
    console.log(this.state.log);
        
  return (
      <form
      className='editLogForm'
      onSubmit={this.handleSubmit}>

        <div className='editLog'>
          
        <h3>Edit Log</h3>


        <div className='log_title'>
            <label htmlFor='editLogForm__log_title'>
              Title
            </label>
           
            <input 
              type='text'
              value={this.state.log_name}            
              onChange={e => this.handleChange(e)}/>

        </div>

        <div className='log_entry'>
            <label htmlFor='editLogForm__log_entry'>
              Entry
            </label>
            <input
              type='text'
              value={this.state.log_entry}
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
