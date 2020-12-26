import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function CardsAbout() {
  return (
    <div className='cards'>
      <h1>Here are some of the projects that I have done!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/CanoECoach.jpg"
              text="NUS CS2103 Team Project CanoECoach"
              label='Software engineering team project'
              path='/about'        
            />
            <CardItem 
              src="images/ChopChop.jpg"
              text="NUS CP2106 Orbital Project ChopChop"
              label='Group Project'
              path='/about'          
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardsAbout;