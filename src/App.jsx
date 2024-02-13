import React from 'react'
import './index.css';
import { FaFacebook, FaGoogle, FaInstagram, FaYoutube } from "react-icons/fa";


const App = () => {
  return (
    <div className='App'>
      <div className='aside-plus-nav'>
      
        <aside className='side-nav'>
          <ul className='genres'>
            <li className='genre-heading'>GENRES</li>
            <li>Battle</li>
            <li>Shooter</li>
          </ul>
        </aside>

        <nav className='nav-bar'>
          <a href="" className='home'>Home</a>
          <a href="" className='about'>About</a>
          <button className='my-games'>My games</button>
        </nav>
      </div>
      
      <footer className='footer'>
        <div className='contacts'>
          <h4>GameHaven&co</h4>
          <h4>0712345678</h4>
          <h4>p.o box 100,</h4>
          <h4>Nairobi</h4>
        </div>
        <div className="social-icons">
              <a href="https://www.facebook.com"><FaFacebook size={30} style={{color:"white"}}/></a>
              <a href="https://www.google.com"> <FaGoogle/></a>
              <a href="https://www.youtube.com"><FaYoutube/></a>
              <a href="https://www.instagram.com"><FaInstagram/></a>
        </div>
      </footer>
    </div>
  )
}

export default App