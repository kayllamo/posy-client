import React, {Component} from 'react';
import './hero.css';

class Hero extends Component {

    render() {
        return (
            <div className='hero'>
                <div className='heroInner'>
                    <h1 className='heroTitle'>POSY</h1>
                    <h2 className='heroTag'>positivity in your pocket</h2>
                </div>
            </div>
        )
    }
} 

export default Hero;

