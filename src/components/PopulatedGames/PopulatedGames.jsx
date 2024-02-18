import React from 'react';
import { Link } from 'react-router-dom';
import './PopulatedGames.css'

const PopulatedGames = ({ games, clickedGenre }) => {

  const filteredGames = games.filter((game) => game.genre === clickedGenre);

  return (
    <div className='populated-games'>
      <>
        {filteredGames.map((game) => (
          <div className='listed-game' key={game.id}>
            <img src={game.thumbnail} alt={game.title} />
            <h3>{game.title}</h3>
            <Link to={`/game/${game.id}`}>
              <button className='view-button' onClick={()=>{handleViewClick}}>View</button>
            </Link>
          </div>    
        ))}
        
      </>
    </div>
  );
};

export default PopulatedGames;
