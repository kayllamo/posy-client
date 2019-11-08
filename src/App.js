import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import Hero from './Components/Hero/hero';
import PrivateRoute from './Routes/PrivateRoute';
import PublicOnlyRoute from './Routes/PublicOnlyRoute';
import RegistrationPage from './Routes/RegistrationRoute';
import LoginPage from './Routes/LoginRoute';
import './App.css';
import AddLogForm from './Components/AddLog/addLog';
import EditLogForm from './Components/EditLog/editLog';
import Dashboard from './Components/Dashboard/dashboard';

// burnt sienna: peru
// dark blue: #0B1C48
// orange: E66912
// teal: #016367
// yellow: 
// gray: 

class App extends Component {
  state = { hasError: false }
  
  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
  return (
    <div className='App'>
        {this.state.hasError && <p className='client_red'>Oh no! Something went wrong.</p>}
      <main className='App__main'>
        <Switch>
          <Route
              exact 
              path={'/'}
              component={Hero}
            />
          <Route
              path='/register'
              component={RegistrationPage}
            />
          <Route
            path='/login'
            component={LoginPage}
          />
          <Route
            path='/addlog'
            component={AddLogForm}
          />
          <Route
            path='/editlog'
            component={EditLogForm}
          />
           <Route
            path='/dashboard'
            component={Dashboard}
          />
        </Switch>
      </main>
      </div>
  )
  }
  }


export default App;