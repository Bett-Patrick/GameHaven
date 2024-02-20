import React from 'react';
import NavBar from '../NavBar';
import './Mygames.css'

const Mygames = ({ games }) => {
  return (
    <div>
      <NavBar/>
      <h1 className='my-games-header'>My Games</h1>
      <ul className='bought-games'>
        {games.map((game, index) => (
          <li className='my-game' key={index}>
            <img src={game.thumbnail} alt="MyGame" />
            {game.title}<br/>
            Genre: {game.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mygames;
