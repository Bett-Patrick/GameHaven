import React from 'react'
import './index.css';
import Genre from './components/Genres/Genre';

const SideBar = ({games, onGenreClick}) => {

  return (
    <aside className='side-nav'>
      <ul className='genres'>
        <h3 className='genre-heading'>Genres</h3>
        <Genre games={games} onGenreClick={onGenreClick}/>
      </ul>
    </aside>
  )
}

export default SideBar