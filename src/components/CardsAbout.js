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
              path='https://github.com/AY2021S1-CS2103-F10-1/tp'        
            />
            <CardItem 
              src="images/ChopChop.jpg"
              text="NUS CP2106 Orbital Project ChopChop"
              label='Group Project'
              path='https://github.com/Whleee/ChopChop'          
            />
            <CardItem 
              src="images/FoodCross.jpg"
              text="Hack&Roll2021 Project FoodCross"
              label='Group Project'
              path='https://github.com/Silvernitro/hacknroll2021'          
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/Duke.jpg"
              text="NUS CS2103 Individual Project Duke"
              label='Individual project'
              path='https://github.com/Whleee/ip'        
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardsAbout;