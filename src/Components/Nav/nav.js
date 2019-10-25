import React, { Component } from 'react';
import './nav.css';

class NavBar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Sign In</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Download</a></li>
              </ul>
            </div>
        );
    }
}

export default NavBar;

