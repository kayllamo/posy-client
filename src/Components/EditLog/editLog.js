import React, { Component } from 'react';
import { Button, Input } from '../../Utils';
import './editLog.css';

export default class EditLogForm extends Component {
/* come back to this section
add this to line 19 

        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>

*/


  render() {
    // const { error } = this.state
    return (
        <div className='editLog'>
          
        <h3>Edit Log</h3>

      <form
        className='editLogForm'
        onSubmit={this.handleSubmitBasicAuth}
      >


        <div className='log_title'>
          <label htmlFor='editLogForm__log_title'>
            Title
          </label>
          <Input
            name='log_title'
            placeholder='Previous log title'
            id='editLogForm__log_title'>
          </Input>
        </div>
        
        <div className='log_tag'>
          <label htmlFor='editLogForm__log_tag'>
            Tag
          </label>
          <Input
            name='log_tag'
            placeholder='Previous log tag'
            id='editLogForm__log_tag'>
          </Input>
        </div>

        <div className='log_entry'>
          <label htmlFor='editLogForm__log_entry'>
            Entry
          </label>
          <textarea
            name='log_entry'
            type='text'
            placeholder='This is previous log entry information available for edit. All fields should be editable with option to Save or Delete entire note.'
            id='editLogForm__log_entry'/>
        </div>

        <Button className = 'button' type='submit'>
          Save
        </Button>

        <Button className = 'button' type='submit'>
          Delete
        </Button>
      </form>
    </div>
    )
  }
}
