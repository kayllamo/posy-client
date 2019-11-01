import React, { Component } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <Link to='/'>Home</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
                <li><a href="#">Download</a></li>
              </ul>
            </div>
        );
    }
}

export default NavBar;

