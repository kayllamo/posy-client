import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
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

export default Nav;

