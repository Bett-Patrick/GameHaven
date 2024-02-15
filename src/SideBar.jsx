import React from 'react'
import './index.css';
import Genre from './components/Genres/Genre';

const SideBar = () => {

  return (
    <aside className='side-nav'>
      <ul className='genres'>
        <h3 className='genre-heading'>{Genre}</h3>
      </ul>
    </aside>
  )
}

export default SideBar