import React, { Component } from 'react'
import TokenService from '../../Services/token-service'
import AuthApiService from '../../Services/auth-api-service'
import { Button, Input } from '../../Utils'
import Nav from '../Nav/nav'

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = { error: null }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault()
    const { user_email, password } = ev.target

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_email.value, password.value)
    )

    user_email.value = ''
    password.value = ''
    this.props.onLoginSuccess()
  }

  handleSubmitJwtAuth = ev =>{
    ev.preventDefault()

    this.setState({error: null})

    const {user_email, user_password} = ev.target

    AuthApiService.postLogin({
      user_email: user_email.value,
      user_password: user_password.value,
    })
      .then(res =>{
        user_email.value = ''
        user_password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res =>{
        this.setState({error: res.error})
      })
  }

render() {
  const { error } = this.state
  return (
  
    <div className='mother'>
      <Nav />
   
  <form
      className='LoginForm'
      onSubmit={this.handleSubmitJwtAuth}
    >
  
      <div className='login'>
          
      <h3 className='loginTitle'>LOGIN TO POSY</h3>
      
      <div role='alert'>
        {error && <p className='red'>{error}</p>}
      </div>

      <div className='user_email'>
        <label htmlFor='LoginForm__user_email'>
          Email Address
        </label>
        <Input
          name='user_email'
          type='text'
          required
          id='LoginForm__user_email'>
        </Input>
      </div>
      <div className='user_password'>
        <label htmlFor='LoginForm__user_password'>
          Password 
        </label>
        <Input
          name='user_password'
          type='password'
          required
          id='LoginForm__user_password'>
        </Input>
      </div>
      <p className='demo'>DEMO-EMAIL: testuser@gmail.com</p>
      <p className='demo'>DEMO-PASSWORD: testing1</p>
      <Button className='button' type='submit'>
        Login 
      </Button>
    </div>
    </form>
    </div>
  )
}
}