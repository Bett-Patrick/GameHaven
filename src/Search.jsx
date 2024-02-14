import React from 'react'
import './index.css';

const Search = () => {
  return (
    <div className="search">
        <form className='search-form' action="">
            <input type="text" placeholder="Search"/>
            <input type="submit" value="Search"/>
        </form>
    </div>

  )
}

export default Search