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
    <div>
      <div>
      <h1>{gameData.title}</h1>
      <h2>{gameData.genre}</h2>
      <img src={gameData.thumbnail} alt="" />
      <p>{gameData.short_description}</p>
      <p>{gameData.release_date}</p>
      <p>{gameData.publisher}</p>
      <p>{gameData.developer}</p>
      <p>{gameData.platform}</p>
      <p>{gameData.short_description}</p>
      <button><a href={gameData.freetogame_profile_url}> FREE TRIAL</a> <a/></button><br />
      <button>BUY</button>

      </div>
    </div>
  );
};

export default Game;
