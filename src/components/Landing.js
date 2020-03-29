import React from 'react';
import main from '../images/main.jpg';

function Landing(props) {
    return (
        <div className='landing'>
            <p id='main-head'>Get where you're going</p>
            <img id='main-img' src={main} alt='family looking at map'></img>
            <p id='sub-head'>And know where to transfer</p>
            <button id='go-btn'>Go</button>
        </div>
    );
} 

export default Landing;