import React from 'react'
import { Route } from 'react-router-dom';
import CardItem from './CardItem'
import './Cards.css';

function CardsContact() {
  return (
    <div className='cards'>
      <h1>Here's how to contact me!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Instagram.jpg"
              text="Drop me a DM on Instagram!"
              label='Instagram'
              path= '/contact'
            />
            <CardItem 
              src="images/LinkedIn.jpg"
              text="Send me a message on LinkedIn!"
              label='LinkedIn'
              path='/contact'          
            />
            <CardItem
              src="images/Gmail.jpg"
              text="Email me at leeweiheng98@gmail.com"
              label='Email'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardsContact;