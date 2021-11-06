import React, { useState } from 'react'
import classes from './SearchBox.module.css'

const SearchBox = ({ placeholder, handleChange }) => {
  
  return (
    <input
      className={classes.search}
      type='search'
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
}

export default SearchBox
