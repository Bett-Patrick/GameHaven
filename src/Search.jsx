import React from 'react'
import './index.css';

const Search = () => {
  return (
    <div>
        <div className="search">
            <form className='search-form' action="">
                <input type="text" placeholder="Search"/>
                <input type="submit" value="Search"/>
            </form>
        </div>

    </div>
  )
}

export default Search