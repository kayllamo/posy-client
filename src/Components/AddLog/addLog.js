import React, { Component } from 'react';
import { Button, Input } from '../../Utils';
import './addLog.css';
import PosyContext from '../../PosyContext';
import config from '../../config'; 

export default class AddLogForm extends Component {
  state = {
    log_name: "",
    log_tag: "",
    log_entry: ""
};

static contextType = PosyContext;

goBack = () => {
    this.props.history.goBack();
}

updateFormEntry(e) {       
    const name = e.target.name;
    const value = e.target.value;
    let id;
    if (e.target.selectedOptions) {
        id = e.target.selectedOptions[0].id;
        this.setState({
            'folderId': id 
        })
    }
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
    const { title, content } = this.state;
    const log = {
        log_title: title,
        log_content: content,
        log_date: new Date()
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
    const { error } = this.state

    return (
        <div className='addLog'>
        <h3>New Log</h3>

      <form
        className='addLogForm'
        onSubmit={this.handleSubmitBasicAuth}
      >


        <div className='log_title'>
          <label htmlFor='addLogForm__log_title'>
            Title
          </label>
          <Input
            name='log_title'
            id='addLogForm__log_title'>
          </Input>
        </div>
        
        <div className='log_tag'>
          <label htmlFor='addLogForm__log_tag'>
            Tag
          </label>
          <Input
            name='log_tag'
            placeholder='optional'
            id='addLogForm__log_tag'>
          </Input>
        </div>

        <div className='log_entry'>
          <label htmlFor='addLogForm__log_entry'>
            Entry
          </label>
          <textarea
            name='log_entry'
            type='text'
            id='addLogForm__log_entry'/>
        </div>

        <Button className = 'button' type='submit'>
          Save
        </Button>

        <Button className = 'button' type='submit'>
          Cancel
        </Button>
      </form>
    </div>
    )
  }
}
