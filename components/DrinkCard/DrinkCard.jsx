// Dependancies
import React from 'react'
import './DrinkCard.scss'

function DrinkCard( {name, ingredients, imgSrc} ) {
  return (
    <article className='drinkCard'>
        <h5 className='drinkCard__title'>{name}</h5>
        <img className='drinkCard__img' src={imgSrc} alt={name} />
        <ul className='drinkCard__ingredients-list'>
            {ingredients.map((ingredient) => {
                return(
                    <li className='drinkCard__ingredient'>
                        {ingredient}
                    </li>
                )
            })}
        </ul>
    </article>
  )
}

export default DrinkCard