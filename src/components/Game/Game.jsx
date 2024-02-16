import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from "../../NavBar"

const Game = () => {
  const { id } = useParams();
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`http://localhost:3000/games/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setGameData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!gameData) return null; // Render nothing if gameData is null
  
  return (
    <div>
      <NavBar/>
    <div className='game-details'>
      <div className='split-div'>
        
        <div className='game-header'>
          <h1>{gameData.title}</h1>
          <h2>Genre: {gameData.genre}</h2>
          <img src={gameData.thumbnail} alt="" />
        </div>
        
        <div className='game-desc'>
          <p>{gameData.short_description}</p>
          <p>Released on : {gameData.release_date}</p>
          <p>Publisher : {gameData.publisher}</p>
          <p>Developer: {gameData.developer}</p>
          <p>Play on {gameData.platform}</p>
          <button className='free-btn'><a href={gameData.freetogame_profile_url}> FREE TRIAL</a> <a/></button><br />
          <button className='buy-btn'>BUY</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Game;
