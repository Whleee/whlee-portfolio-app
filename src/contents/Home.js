import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/whlee.jpeg';

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic"></img>
            <p>
            <ReactTypingEffect className="typingeffect" 
                text={['I am Lee Wei Heng','I am a web developer']} speed={100} eraseDelay={300} typingDelay={500}/>
            </p>
            </div>
        
        )
    }
}

export default Home
