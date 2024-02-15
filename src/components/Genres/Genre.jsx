import React, { useState } from 'react'

function Genre({games}) {
  const [hoveredGenre, setHoveredGenre]=useState(null)
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
      <h2>Games Genres</h2>
      <ul>
        {genreArray.map((genre)=>(
          <li 
            key={genre}
            onMouseEnter={()=>setHoveredGenre(genre)}
            onMouseLeave={()=>setHoveredGenre(null)}
          >{genre}
          </li>     
        ))}
      </ul>

      {hoveredGenre&&(
        <div className='game-list'>
          <h3>{hoveredGenre} Games</h3>
          <ul>
            {games
              .filter((game)=>game.genre===hoveredGenre)
              .map((game, index)=>( 
                <div key={index}>
                  <h3>{game.title}</h3>
                  <img src={game.thumbnail} alt={game.title} />
                  <button>View</button>
                </div>
              ))}
          </ul>
        </div>
      )}    
    </div>  
  )
}

export default Genre