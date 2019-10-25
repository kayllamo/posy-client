import React, {Component} from 'react';
import Hero from './Components/Hero/hero';
import RegistrationForm from './Components/Registration/registration';
import './App.css';
import About from './Components/About/about';
import NavBar from './Components/Nav/nav'

// burnt sienna: peru
// dark blue: #0B1C48
// orange: E66912
// teal: #016367
// yellow: 
// gray: 

class App extends Component {
  
  render () {
  return (
    <main className='App'>
      <NavBar />
      <Hero />
      <RegistrationForm />
      <About />
    </main>
  );
  }
  }


export default App;