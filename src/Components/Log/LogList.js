import React from 'react'
import './LogList.css';
import LogApiService from '../../Services/log-api-service';
import Log from './Log';

export default class LogList extends React.Component {
  state = {
    forErrors: this.props.match,
    toggle: true,
    logs: []
  }

  handleDeleteLog = logId => {
    const logs = this.state.logs.filter((log)=> log.id !== logId)
    this.setState({logs})
  }

UNSAFE_componentWillMount() { 
    LogApiService.getLogs()
      .then(res => {
        this.setState(
          {logs:res})
      })
  } 


  render () {
    const logs = this.state.logs.map((log) => {
      return (
        <Log
          id={log.id}
          key={log.id}
          log_name={log.log_name}
          log_entry={log.log_entry}
          onDeleteLog={this.handleDeleteLog}
        />
      )
    });
   


    return (
      <section className='LogList'>
        <div className='LogList__content'>
          {logs}
        </div>
      </section>
    )    
  }
}