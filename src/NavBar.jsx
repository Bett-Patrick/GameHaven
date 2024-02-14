import React from 'react'
import './index.css';
import Search from './Search';

const NavBar = () => {
  return (
    <div>
        <nav className='nav-bar'>
          <a href="" className='home'>Home</a>
          <a href="" className='about'>About</a>
          <Search/>
          <button className='my-games'>My games</button>
        </nav>
    </div>
  )
}

export default NavBar