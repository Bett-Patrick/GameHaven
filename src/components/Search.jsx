import { useState } from 'react';
import axios from 'axios';
import '../../src/index.css'
import { FaSearch } from 'react-icons/fa';

const Search = ({ onSearchResults, searchTerm, setSearchTerm }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      console.log('Searching for:', searchTerm);

      const response = await axios.get(`http://localhost:3000/games?search=${searchTerm}`);

      console.log('Search results:', response.data);
      setSearchResults(response.data);
      onSearchResults(response.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='search-container'>
      <form className="search-form" onSubmit={handleSearch} action="#" >
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button className='search-btn' type="submit" onClick={handleSearch}>
            <FaSearch />
          </button>
      </form>

      {searchResults.length > 0 && (
        <div >
          <h2>Search Results:</h2>
          <ul className='results-container'>
            {searchResults.map((result) => (
              <li key={result.id}>
                <h3>{result.title}</h3>
                <img src={result.thumbnail} alt={result.title} />
                <p>{result.short_description}</p>
                <p>Genre: {result.genre}</p>
                <p>Platform: {result.platform}</p>
                <p>Publisher: {result.publisher}</p>
                <p>Developer: {result.developer}</p>
                <p>Release Date: {result.release_date}</p>
                <a href={result.freetogame_profile_url} target="_blank" rel="noopener noreferrer">
                  View Game
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
