// Dependancies
import React from 'react'
import drinksArray from '../../data/drinks.json'
import './Home.scss'

// Components
import DrinkCard from '../../components/DrinkCard/DrinkCard'

function Home() {
  return (
    <main className='menu'>
        {drinksArray.map((drink, index) => {
            return(
                <DrinkCard className='menu__card' key={index} name={drink.name} ingredients={drink.ingredients} imgSrc={drink.img} />
            )
        })}
    </main>
  )
}

export default Home