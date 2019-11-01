import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import Hero from './Components/Hero/hero';
import RegistrationPage from './Routes/RegistrationRoute';
import About from './Components/About/about';
import NavBar from './Components/Nav/nav';
import LoginPage from './Routes/LoginRoute';
import './App.css';
import AddLogForm from './Components/AddLog/addLog';

// burnt sienna: peru
// dark blue: #0B1C48
// orange: E66912
// teal: #016367
// yellow: 
// gray: 

class App extends Component {
  state = { hasError: false }
  
  render() {
  return (
    <div className='App'>
      <main className='App__main'>
      <NavBar />
      <AddLogForm />

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
              path='/about'
              component={About}
            />
          <Route
            path='/login'
            component={LoginPage}
          />
        </Switch>
         
      </main>
      </div>
  )
  }
  }


export default App;