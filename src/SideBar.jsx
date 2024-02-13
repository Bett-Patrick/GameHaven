import React from 'react'
import './index.css';

const SideBar = () => {
  return (
    <div>
        <aside className='side-nav'>
          <ul className='genres'>
            <h3 className='genre-heading'>GENRES</h3>
            <li>Battle</li>
            <li>Shooter</li>
          </ul>
        </aside>
    </div>
  )
}

export default SideBar