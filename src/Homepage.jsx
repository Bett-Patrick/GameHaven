import React, { useEffect, useState } from 'react';
import './index.css';
import SideBar from './SideBar';
import NavBar from './NavBar';
import Footer from './Footer';
import PopularGames from './components/PopularGames/PopularGames';
import PopulatedGames from './components/PopulatedGames/PopulatedGames';
import Search from './components/Search';

const Homepage = () => {
  const [games, setGames] = useState([]);
  const [clickedGenre, setClickedGenre] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then((res) => res.json())
      .then((games) => {
        setGames(games);
      })
      .catch((error) => {
        console.error('Error fetching games:', error);
      });
  }, []);

  const handleGenreClick = (genre) => {
    setClickedGenre(genre);
    setSearchTerm('');
  };

  const handleSearchResults = (results) => {
    console.log('Search results:', results);
    setSearchResults(results);
    setClickedGenre(null);
  };

  return (
    <div className='home-page'>
      <div className='aside-plus-nav'>
        <SideBar games={games} onGenreClick={handleGenreClick} />
        <div className='nav-container'>
          <NavBar />
            <> 
            {!clickedGenre && (
                <>
                <Search
                onSearchResults={handleSearchResults}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
                </>
              )}
              {!clickedGenre && (
                <>    
                  <h2>PopularGames</h2>
                  <PopularGames games={games.slice(0, 20)} />
                </>
              )}
              {clickedGenre && (
                <>
                   <Search
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}/>
                  <h2>{clickedGenre} Games</h2>
                  <PopulatedGames games={games} clickedGenre={clickedGenre} />
                </>
              )}
            </>
          

          {searchResults.length > 0 && !clickedGenre && (
            <div>
              <h2>Search Results:</h2>
              <ul>
                {searchResults.map((result) => (
                  <li key={result.id}>
                    <h3>{result.title}</h3>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
