import React, { useState } from 'react'

function Genre({games, onGenreClick}) {
  const [filteredGames,setFilteredGames]=useState([])
  //avoiding the genres from repeating themselves
  //to only display unique genres
  const uniqueGenres=new Set()
  //now iterate through the games array and add genres to the above set
  games.forEach((game)=>{
    uniqueGenres.add(game.genre)
  })
  //after getting the genres convert them back to array
  const genreArray=Array.from(uniqueGenres)
 
  return (
    <div className='genre-sidebar'>
      {/* <h2>Games Genres</h2> */}
      <ul>
        {genreArray.map((genre)=>(
          <li 
            key={genre}
            onClick={()=>{
              onGenreClick(genre) 
              setFilteredGames(games.filter((game)=>game.genre===genre))
            }}
          >
            {genre}
          </li>     
        ))}
      </ul>
    </div>  
  )
}

export default Genre