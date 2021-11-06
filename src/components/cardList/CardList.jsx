import React from 'react'
import Card from '../card/Card'
import classes from './CardList.module.css'

const CardList = ({ monsters }) => {
  const content = monsters.map((monster) => {
    return <Card key={monster.id} monster={monster} />
  })
  return <div className={classes.cardList}>{content}</div>
}

export default CardList
