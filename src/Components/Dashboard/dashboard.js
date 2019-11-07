import React, {Component} from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';


class Dashboard extends Component {

    render() {
        return (
            <div className='dashboard'>
                <div className='dash_hero'>
                        <h3>"Be mindful; be thinkful"</h3>
                </div>

                <div className='dash_main'>
                        <h4>Welcome back, Kayla.</h4>
                        <p>Take a few minutes to jot down something on your mind. Tag your entry to track any patterns.</p>
                    
                    <div className='dash_logs'>
                    
    
                        <Link className='addLogButton' to='/addlog'>New Entry</Link>
                
        

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
                    </div>
                </div>
            </div>
        )
    }
} 

export default Dashboard;

