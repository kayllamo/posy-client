import React, { Component } from 'react'

export const nullThing = {
  author: {},
  tags: [],
}

const PosyContext = React.createContext({
  thing: nullThing,
  reviews: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  clearLog: () => {},
  addLog: () => {},
})

export default PosyContext

export class PosyProvider extends Component {
  state = {
    log: nullLog,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  clearLog = () => {
    this.setLog(nullThing)
  }

  addLog = log => {
    this.setLog([
      ...this.state.Log,
      log
    ])
  }

  render() {
    const value = {
      log: this.state.log,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      clearLog: this.clearLog,
      addLog: this.addLog,
    }
    return (
      <PosyContext.Provider value={value}>
        {this.props.children}
      </PosyContext.Provider>
    )
  }
}