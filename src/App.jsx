import React from 'react'
import './index.css';
import SideBar from './SideBar';
import NavBar from './NavBar';
import Footer from './Footer';
import PopularGames from './PopularGames/PopularGames';


const App = () => {
  const games = () => {
    fetch(" https://www.freetogame.com/api/games")
    .then(res => res.json())
    .then((games) => {
      console.log(games)
    })
  }

  return (
    <div className='App'>
      <div className='aside-plus-nav'>
        <SideBar/>
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