import React, {Component} from 'react';
import { Button, Input, Required } from '../../Utils';
import AuthApiService from '../../Services/auth-api-service';
import { Link } from 'react-router-dom';
import './registration.css';
import Nav from '../Nav/nav';
import TokenService from '../../Services/token-service'


export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { user_name, user_email, user_password } = ev.target
    this.setState({ error: null })
    
    AuthApiService.postUser({
      user_email: user_email.value,
      user_password: user_password.value,
      user_name: user_name.value,
    })
    .then(res => {
    if(typeof res.id !== 'undefined') {
      AuthApiService.postLogin({
        user_email: res.user_email,
        user_password: user_password.value,
      })
      .then(res => {
          localStorage.setItem('user_id', res.id)
          TokenService.saveAuthToken(res.authToken)
      })
      user_name.value=''
      user_email.value = ''
      user_password.value = ''
      this.props.onRegistrationSuccess()
    }
    else {
      this.setState({error: res.error})
    }
  })
  .catch(res => {
    throw new Error(res.error);
  })
}
  
render() {
  const { error } = this.state

return (
  <div className='mother'>
  <Nav />
  <form
    className='RegistrationForm'
    onSubmit={this.handleSubmit}
  >
    <div className='registration'>
          
    <h3 className='registrationTitle'>REGISTER TO POSY</h3>

    <div role='alert'>
          {error && <p className='red'>{error}</p>}
      </div>

    <div className='user_name'>
      <label htmlFor='RegistrationForm__user_name'>
        Full name <Required />
      </label>
      <Input
        name='user_name'
        type='text'
        required
        id='RegistrationForm__user_name'>
      </Input>
    </div>
    <div className='user_email'>
      <label htmlFor='RegistrationForm__user_email'>
        Email Address <Required />
      </label>
      <Input
        name='user_email'
        type='text'
        required
        id='RegistrationForm__user_email'>
      </Input>
    </div>
    <div className='user_password'>
      <label htmlFor='RegistrationForm__user_password'>
        Password <Required />
      </label>
      <Input
        name='user_password'
        type='password'
        required
        id='RegistrationForm__user_password'>
      </Input>
    </div>
    <Button className = 'button' type='submit'>
      Register
    </Button>

    <Link className='registration_login' to='/login'>Login?</Link>

  </div>
  </form>
  </div>
)
}
}