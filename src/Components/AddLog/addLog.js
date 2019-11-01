import React, { Component } from 'react';
import { Button, Input } from '../../Utils';
import './addLog.css';

export default class AddLogForm extends Component {
/* come back to this section
add this to line 19 

        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>

*/


  render() {
    // const { error } = this.state
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
          <Input
            name='log_entry'
            id='addLogForm__log_entry'>
          </Input>
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
