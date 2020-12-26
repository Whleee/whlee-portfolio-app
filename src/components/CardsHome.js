import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function CardsHome() {
  return (
    <div className='cards'>
      <h1>Some links for more information about myself</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src="images/GitHub.jpg"
              text="Click to view my GitHub profile and repositories!"
              label='GitHub'
              path='https://github.com/Whleee'          
            />
            <CardItem 
              src="images/resume.jpg"
              text="Click to be redirected to my resume!"
              label='Resume'
              path='/services'          
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardsHome