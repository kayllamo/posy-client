import React, {Component} from 'react';
import './hero.css';
import { Link } from 'react-router-dom';


class Hero extends Component {

    render() {
        return (
            <div className='motherHero'>
            <div className='hero'>
                <div className='heroInner'>
                    <h1 className='heroTitle'>POSY</h1>
                    <h2 className='heroTag'>positivity in your pocket</h2>
                </div>
                <Link to='/about'>About</Link>
                <Link to='/register'>Register</Link>
            </div>
            </div>
        )
    }
} 

export default Hero;

