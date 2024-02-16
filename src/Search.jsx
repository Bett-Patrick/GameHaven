import { useState } from 'react';
import axios from 'axios';
import './index.css'
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

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
      <form className="search-form" onSubmit={handleSearch} action="" style={{ display: 'flex' ,margin: "15px", justifyContent:"center"}}>
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <div className="search-button-container" >
          <button type="submit" style={{padding: "12px", fontSize:"18px"}} onClick={handleSearch}>
            <span>Search</span> <FaSearch style={{ marginLeft: "5px" }} />
          </button>
        </div>
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

// Add PropTypes validation for the props
Search.propTypes = {
  onSearchResults: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default Search;
