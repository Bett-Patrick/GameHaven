import React, { useEffect, useState } from 'react';
import './index.css';
import SideBar from './SideBar';
import NavBar from './NavBar';
import Footer from './Footer';
import PopularGames from './components/PopularGames/PopularGames';
import PopulatedGames from './components/PopulatedGames';

const Homepage = () => {
  const [games, setGames] = useState([]);
  const [clickedGenre, setClickedGenre] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then(res => res.json())
      .then(games => {
        setGames(games);
      })
      .catch(error => {
        console.error('Error fetching games:', error);
      });
  }, []);

  const handleGenreClick = genre => {
    setClickedGenre(genre);
  };

  return (
    <div className='App'>
      <div className='aside-plus-nav'>
        <SideBar games={games} onGenreClick={handleGenreClick} />
        <div className='nav-container'>
          <NavBar />
          {/* Render PopularGames component when no genre is clicked */}
          {!clickedGenre && (
            <>
              <h2>PopularGames</h2>
              <PopularGames
                games={games.slice(0, 10)} 
              />
            </>
          )}
          {/* Render PopulatedGames component when a genre is clicked */}
          {clickedGenre && (
            <PopulatedGames
              games={games}
              clickedGenre={clickedGenre}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
