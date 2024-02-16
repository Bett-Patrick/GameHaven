import React from 'react';
import { Link } from 'react-router-dom';

const PopularGames = ({ games, clickedGenre }) => {
  // Check if no genre is clicked
  if (!clickedGenre) {
    return (
      <div className='popular-games'>
        {games.map(game => (
          <div key={game.id}>
            <img src={game.thumbnail} alt={game.title} />
            <h3>{game.title}</h3>

            <Link to={`/game/${game.id}`}>
              <button onClick={()=>{handleViewClick}}>View</button>
            </Link>
          </div>
        ))}
      </div>
    );
  }

  // Render nothing if a genre is clicked
  return null;
}

export default PopularGames;
