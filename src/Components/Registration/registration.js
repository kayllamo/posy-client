import React, {Component} from 'react';
import { Button, Input, Required } from '../../Utils';
import { Link } from 'react-router-dom';


class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { user_name, user_email, password } = ev.target

    console.log('registration form submitted')
    console.log({ user_name, user_email, password })

    user_name.value = ''
    user_email.value = ''
    password.value = ''
    this.props.onRegistrationSuccess()
  }

  
    render() {
      const { error } = this.state

      return (
        <div className='registration'>
          
          <h3>CREATE AN ACCOUNT</h3>

        <form
          className='RegistrationForm'
          onSubmit={this.handleSubmit}>

          <div className='user_name'>
            <label htmlFor='RegistrationForm__user_name'>
              Your Name<Required />
            </label>
                <Input
                name='user_name'
                type='text'
                required
                id='RegistrationForm__user_name'
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

          <Link to='/login'>Login?</Link>
       
        </form>
        </div>
      )
    }
  }

  export default RegistrationForm;

    