import React from 'react'

const Search = () => {
  return (
    <div>
      
    </div>
  )
}

export default Search

















// import React from 'react'

// const Search = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.get(`http://localhost:3000/games`);
//       setSearchResults(response.data); 
//       // Assuming the API response contains the search results.
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
//   return (
//     <div>Search</div>
//   )
// }

// export default Search
