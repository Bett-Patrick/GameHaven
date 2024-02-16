import React from 'react';

const PopularGames = ({ games, clickedGenre }) => {
  // Check if no genre is clicked
  if (!clickedGenre) {
    return (
      <div className='popular-games'>
        {games.map(game => (
          <div key={game.id}>
            <img src={game.thumbnail} alt={game.title} />
          </div>
        ))}
      </div>
    );
  }

  // Render nothing if a genre is clicked
  return null;
}

export default PopularGames;
