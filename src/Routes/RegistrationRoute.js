import React, { Component } from 'react'
import { Section } from '../Utils'
import RegistrationForm from '../Components/Registration/registration'

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/dashboard')
  }

  render() {
    return (
      <Section className='RegistrationPage'>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    )
  }
}
