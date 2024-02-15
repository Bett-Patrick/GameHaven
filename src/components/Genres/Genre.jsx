import React, { useState } from 'react'

function Genre() {
  const [hoveredGenre, setHoveredGenre]=useState(null)
  const genres= games.genre
  return (
    <li 
      className='genre-sidebar'
    >Genre</li>
  )
}

export default Genre