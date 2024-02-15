import React, { useEffect, useState } from 'react'
import './index.css';
import SideBar from './SideBar';
import NavBar from './NavBar';
import Footer from './Footer';
import PopularGames from './PopularGames/PopularGames';


const App = () => {
  const [games, setGames] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/games')
      .then(res=>res.json())
      .then((games)=>{
        console.log(games)
        return games
      } )
  }, [])

  return (
    <div className='App'>
      <div className='aside-plus-nav'>
        <SideBar games={games}/>
       <div className='nav-container'>
        <NavBar/>
        <PopularGames/>
       </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App