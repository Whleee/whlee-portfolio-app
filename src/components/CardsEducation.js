import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function CardsAbout() {
  return (
    <div className='cards'>
      <h1>Here's where I studied!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src="images/DHS.jpg"
              text="Dunman High School IP Programme (2010 - 2016)"
              label='Secondary School / JC' 
            />
            <CardItem 
              src="images/NUS.jpg"
              text="National University of Singapore (2019 - 2023) Major in Computer Science"
              label='Tertiary Education'          
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardsAbout;