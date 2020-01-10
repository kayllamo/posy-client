import React from 'react'

import './LogList.css';
import LogApiService from '../../Services/log-api-service';
import PosyContext from '../../PosyContext'
import Log from './Log';

export default class LogList extends React.Component {
  state = {
    forErrors: this.props.match,
    toggle: true,
    logs: []
  }

  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = PosyContext;

  // sends user back to homepage after delete
  handleDeleteLog = logId => {
    this.props.history.push('/');
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