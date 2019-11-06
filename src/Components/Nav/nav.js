import React, { Component } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    render() {
        return (
            <div className='navbar'>
              <ul>
                <Link className='navlinks' to='/'>Home</Link>
                <Link className='navlinks' to='/register'>Register</Link>
                <Link className='navlinks' to='/login'>Login</Link>              
              </ul>
            </div>
        );
    }
}

export default NavBar;

