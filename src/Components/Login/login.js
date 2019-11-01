import React, { Component } from 'react'
import { Button, Input } from '../../Utils'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    user_name.value = ''
    password.value = ''
    this.props.onLoginSuccess()
  }

  render() {
    const { error } = this.state
    return (
        <div className='login'>
          
        <h3>LOGIN TO YOUR ACCOUNT</h3>

      <form
        className='LoginForm'
        onSubmit={this.handleSubmitBasicAuth}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>

        <div className='user_email'>
          <label htmlFor='LoginForm__user_email'>
            Email Address
          </label>
          <Input
            name='user_email'
            id='LoginForm__user_email'>
          </Input>
        </div>
        
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <Input
            name='password'
            type='password'
            id='LoginForm__password'>
          </Input>
        </div>
        <Button className = 'button' type='submit'>
          Login
        </Button>
      </form>
    </div>
    )
  }
}
