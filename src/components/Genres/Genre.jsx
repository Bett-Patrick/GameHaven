import React, { useState } from 'react'
import PopulatedGames from '../PopulatedGames'

function Genre({games, onGenreClick}) {
  const [hoveredGenre, setHoveredGenre]=useState(null)
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
  // function handleClick(event){ 
  //   alert("Clicked")
  //   console.log(event.target.value)
  // }
  return (
    <div className='genre-sidebar'>
      <h2>Games Genres</h2>
      <ul>
        {genreArray.map((genre)=>(
          <li 
            key={genre}
            onClick={()=>{
              setHoveredGenre(genre);
              onGenreClick(genre) 
              const filteredGames= games.filter((game)=>game.genre===genre)
              setFilteredGames(filteredGames)}}
            // onMouseLeave={()=>setHoveredGenre(null)}
          >{genre}
          </li>     
        ))}
      </ul>

      {/* {hoveredGenre&&(
        <div className='game-list'>
          <h3>{hoveredGenre} Games</h3>
          <ul>
            {filteredGames.map((game, index)=>( 
                <div key={index}>
                  <h3>{game.title}</h3>
                  <img src={game.thumbnail} alt={game.title} />
                  <button onClick={()=>alert("Clicked")}>View</button>
                  <PopulatedGames games={filteredGames}/>
                </div>
              ))}
          </ul>
          
        </div>
      )}     */}
    </div>  
  )
}

export default Genre