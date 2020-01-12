import React, { Component } from 'react';
import './addLog.css';
import PosyContext from '../../PosyContext';
import config from '../../config'; 

export default class AddLogForm extends Component {
  state = {
    log_name: "",
    log_entry: ""
};

static contextType = PosyContext;

goBack = () => {
    this.props.history.goBack();
}

updateFormEntry(e) { 
          
    const name = e.target.name;
    const value = e.target.value;
    
    this.setState({
        [e.target.name]: e.target.value,
        
    }, () => {this.validateEntry(name, value)});
}

validateEntry(name, value) {
    let hasErrors = false;

    value = value.trim();
    if((name === 'title') || (name === 'content')) {
        if (value.length < 1) {
            hasErrors = true
        } 

        else {
            hasErrors = false
        }
    }
    
    else {
        hasErrors = false
    }
    
    this.setState({
        [`${name}Valid`]: !hasErrors,
    }, this.formValid );
}

formValid() {
    const { titleValid, contentValid } = this.state;
    if (titleValid && contentValid === true){
        this.setState({
            formValid: true,
            validationMessage: null
        });
    }
    else {this.setState({
        formValid: !this.formValid,
        validationMessage: 'All fields are required.'
    })}
  }

handleSubmit(e) {
    e.preventDefault();
    const { log_name, log_entry } = this.state;
    const log = {
        log_name: log_name,
        log_entry: log_entry,
    }

    this.setState({error: null})

    
    fetch(`${config.API_ENDPOINT}/logs`, {
        method: 'POST',
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
    .then(data => {
        this.goBack()
        this.context.addLog(data)
    })
    .catch(err => {
        this.setState({ err })
    })
}

  render() {

    return (
      <form 
      className='AddLogForm'
      onSubmit={e => this.handleSubmit(e)}>
        <div className='addLog'>
        <h3 className='newLog'>New Log</h3>


        <div className='log_name'>
          <label htmlFor='addLogForm__log_name'>
            Title
          </label>
          <input
            name='log_name'
            id='addLogForm__log_name'
            onChange={e => this.updateFormEntry(e)}/>
        </div>
  

        <div className='log_entry'>
          <label htmlFor='addLogForm__log_entry'>
            Entry
          </label>
          <textarea
            name='log_entry'
            type='text'
            id='addLogForm__log_entry'
            onChange={e => this.updateFormEntry(e)}/>
        </div>

        <button 
          type="submit" 
          className="button"
        >
          Save
          </button>

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