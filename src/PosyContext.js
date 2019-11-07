import React, { Component } from 'react'

const LogContext = React.createContext({
  LogList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setLogList: () => {},
})
export default LogContext

export class LogProvider extends Component {
  state = {
    LogList: [],
    error: null,
  };

  setLogList = logList => {
    this.setState({ logList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      logList: this.state.logList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setLogList: this.setLogList,
    }
    return (
      <LogContext.Provider value={value}>
        {this.props.children}
      </LogContext.Provider>
    )
  }
}