import React, { useState } from 'react';
import './index.css';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:3000/games`);
      setSearchResults(response.data); 
      // Assuming the API response contains the search results.
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <div className="search">
        <form className='search-form' onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input type="submit"/>
        </form>
        </div>
    </div>)}

export default Search;