import React from 'react'

import './LogList.css';

import PosyContext from '../PosyContext'
import Log from '.Log';
import { findLog } from '../../log-helpers';

export default class LogList extends React.Component {
  state = {
    forErrors: this.props.match,
    toggle: true
  }

  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = PosyContext;

  // sends user back to homepage after delete
  handleDeleteLog = logId => {
    this.props.history.push('/')
  }
    

  render () {
    const { logs=[] } = this.context
    const { logId } = this.state.forErrors.params
    const log = findLog(logs, logId) || { content: ''}
      if(this.state.toggle === false) {
        this.setState({
          forErrors: 'err'
        })
        this.setState({
          forErrors: this.props.match
        })
      }

    return (
      <section className='LogList'>
        <Log
          id={log.id}
          log_name={log.log_name}
          log_tag={log.log_tag}
          log_entry={log.log_entry}
          onDeleteLog={this.handleDeleteLog}
        />
        <div className='LogList__content'>
          {log.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )    
  }

}
