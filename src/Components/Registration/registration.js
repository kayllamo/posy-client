import React, {Component} from 'react';
import { Button, Input, Required } from '../../Utils';
import './registration.css';



class RegistrationForm extends Component {
// come back to
  
    render() {
      return (
        <div className='registration'>
          
          <h3>CREATE AN ACCOUNT</h3>

        <form
          className='RegistrationForm'
          onSubmit={this.handleSubmit}>

          <div className='full_name'>
            <label htmlFor='RegistrationForm__full_name'>
              Your Name<Required />
            </label>
                <Input
                name='full_name'
                type='text'
                required
                id='RegistrationForm__full_name'
                size='30'>
                </Input>
          </div>
          
          <div className='user_email'>
            <label htmlFor='RegistrationForm__user_email'>
              Email Address<Required />
            </label>
            <Input
              name='user_email'
              type='text'
              required
              id='RegistrationForm__user_email'
              size='30'>
            </Input>
          </div>

          <div className='password'>
            <label htmlFor='RegistrationForm__password'>
              Password<Required />
            </label>
            <Input
              name='password'
              type='password'
              required
              id='RegistrationForm__password'
              size='30'>
            </Input>
          </div>

          <Button className = 'button' type='submit'>
            Register
          </Button>

          <Button className = 'button' type='submit'>
            Login
          </Button>
        </form>
        </div>
      )
    }
  }

  export default RegistrationForm;