import React from 'react';

const PopulatedGames = ({ games, clickedGenre }) => {
  const filteredGames = games.filter((game) => game.genre === clickedGenre);

  return (
    <div className='populated-games'>
      <h2>{clickedGenre} Games</h2>
      <>
        {filteredGames.map((game) => (
          <div className='listed-game' key={game.id}>
            <img src={game.thumbnail} alt={game.title} />
            <h3>{game.title}</h3>
            <button onClick={()=>alert("Clicked")}>View</button>
          </div>    
        ))}
        
      </>
    </div>
  );
};

export default PopulatedGames;
