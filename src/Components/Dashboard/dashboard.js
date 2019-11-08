import React, {Component} from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import Nav from '../Nav/nav';
import PosyContext from '../../PosyContext';
import Log from '../Log/Log';
import {findLog} from '../../log-helpers';


export default class Dashboard extends React.Component {
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

    render() {
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
            <div className='dashboard'>
                <Nav />
                <div className='dash_hero'>
                        <h3>"Be mindful; be thinkful"</h3>
                </div>

                <div className='dash_main'>
                        <h4>Welcome back, Kayla.</h4>
                        <p>Take a few minutes to jot down something on your mind. Tag your entry to track any patterns.</p>
                    
                    <div className='dash_logs'>
                    
    
                        <Link className='addLogButton' to='/addlog'>New Entry</Link>
                
                        <section className='LogList'>
                            <Log
                            id={log.id}
                            log_name={log.log_name}
                            log_tag={log.log_tag}
                            log_entry={log.log_entry}
                            onDeleteLog={this.handleDeleteLog}
                            />
                        </section>

                    </div>
                </div>
            </div>
        )
    }
} 


/*
                        <div className='dash_log_box'>
                                <h5>I need a vacation</h5>
                                 <h6>Inspired</h6>
                        </div>

                        <div className='dash_log_box'>
                                <h5>I didn't get the job</h5>
                                 <h6>Positivity</h6>
                        </div>

                        <div className='dash_log_box'>
                                <h5>Anniversary</h5>
                                 <h6>Loved</h6>
                        </div>

                        <div className='dash_log_box'>
                                <h5>Cafe chat with a stranger</h5>
                                 <h6>Inspired</h6>
                        </div>

                        <div className='dash_log_box'>
                                <h5>Goals</h5>
                                 <h6>Motivated</h6>
                        </div>

                        */