import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div className="game-container">
      <div className="game-image">
        <img src={gameData.thumbnail} alt={gameData.title} />
      </div>
      <div className="game-details">
        <h1>{gameData.title}</h1>
        <h2>{gameData.genre}</h2>
        <p>{gameData.short_description}</p>
        <p>Release Date: {gameData.release_date}</p>
        <p>Publisher: {gameData.publisher}</p>
        <p>Developer: {gameData.developer}</p>
        <p>Platform: {gameData.platform}</p>
        <p>{gameData.short_description}</p>
        <a className="free-trial-button" href={gameData.freetogame_profile_url}>Free Trial</a>
        <button className="buy-button">Buy Now</button>
        <button className="back-button"><a href="/">Back to Home</a></button>
      </div>
    </div>
  );
};

export default Game;