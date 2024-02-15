import React from 'react'
import './index.css';
import Genre from './components/Genres/Genre';

const SideBar = ({games}) => {

  return (
    <aside className='side-nav'>
      <ul className='genres'>
        <h3 className='genre-heading'>{Genre}</h3>
        <Genre games={games}/>
      </ul>
    </aside>
  )
}

export default SideBar