import React from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import Nav from '../Nav/nav';
import PosyContext from '../../PosyContext';
import LogList from '../Log/LogList';


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


        return (
            <div className='dashboard'>
                <Nav />
                <div className='dash_hero'>
                        <h3>"Be mindful; be thinkful"</h3>
                </div>

                <div className='dash_main'>
                        <h4>N A M A S T E</h4>
                        <p>Take a few minutes to jot down something on your mind. Rid yourself of negative energy to make space for positivity.</p>
                    
                    <div className='dash_logs'>
                    
    
                        <Link className='addLogButton' to='/addlog'>New Entry</Link>
                
                        <section className='LogList'>
                            <LogList />

                        </section>

                    </div>
                </div>
            </div>
        )
    }
} 
