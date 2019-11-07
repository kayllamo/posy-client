import React, {Component} from 'react';
import './hero.css';
import { Link } from 'react-router-dom';
import Nav from '../Nav/nav';


class Hero extends Component {

    render() {
        return (
            <div className='motherHero'>
            
            <div className='navbar'>
              <Nav />
            </div>
            
            <div className='hero'>
                <div className='herotext'>
                    <h1 className='heroTitle'>POSY</h1>
                    <h2 className='heroTag'>positivity in your pocket</h2>
                </div>
                <Link className='herolinks' to='/register'>Register</Link>
            </div>

            <div className='about'>
                <div className='aboutInner1'>
                    <h4 className='aboutTag'>Let your thoughts flow</h4>
                </div>

                <div className='aboutInner2'>
                    <h4 className='aboutTag'>Clear your mind</h4>
                </div>

                <div className='aboutInner3'>
                    <h4 className='aboutTag'>Create healthy habits</h4>
                </div>
            </div>

        </div>
        )
    }
} 

export default Hero;

