import React from 'react'
import classes from './Card.module.css'

const Card = ({ monster }) => {
  return (
    <div className={classes.cardContainer}>
      <img
        src={`https://robohash.org/${monster.id}?set=set6&size=180x180
        `}
        alt='Monster'
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  )
}

export default Card
