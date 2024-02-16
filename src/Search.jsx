import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <div>
      <form style={{display:"flex", gap:"2px", backgroundColor:"white", padding:'2px'}} action="">
        <input type="text" />
        <button style={{fontSize:"14px", display:"flex"}} type="submit">Search <FaSearch/></button>
      </form>
      
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
