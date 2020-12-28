import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import ReactTypingEffect from 'react-typing-effect';

function HeroSection() {
  return (
    <>
    <div className='hero-container'>
      <h1>Whleee's website</h1>
      <p>Hey there!</p>
      <p>I'm a student at NUS actively pursuing a degree in Computer Science!</p>
      <ReactTypingEffect text={['Scroll down to see some of my pages!']} className='typing-effect' speed={70} eraseDelay={300}
        typingDelay={500} eraseSpeed={70}/>
      {/* 
      Buttons commented out for now
      <div className='hero-btns'>
        <Button 
          className='btns' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
            GET STARTED
        </Button>
        <Button 
          className='btns' 
          buttonStyle='btn--primary'
          buttonSize='btn--large'>
            WATCH TRAILER <i className='far fa-play-cirlce' />
        </Button>
      </div>
      */}
    </div>
    </>
  )
}

export default HeroSection
