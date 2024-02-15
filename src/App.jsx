import React, { useEffect, useState } from 'react'
import './index.css';
import SideBar from './SideBar';
import NavBar from './NavBar';
import Footer from './Footer';
import PopularGames from './components/PopularGames/PopularGames';
import PopulatedGames from './components/PopulatedGames';



const App = () => {
  const [games, setGames] = useState([])
  const [clickedGenre, setClickedGenre]=useState(null)

  const handleGenreClick=(genre)=>{
    setClickedGenre(genre)
  }
  useEffect(()=>{
    fetch('http://localhost:3000/games')
      .then(res=>res.json())
      .then((games)=>{
        console.log(games)
        setGames(games)
      } )
  }, [])

  return (
    <div className='App'>
      <div className='aside-plus-nav'>
        <SideBar games={games} onGenreClick={handleGenreClick}/>
    
       <div className='nav-container'>
        <NavBar/>
        {PopulatedGames? 
        <PopulatedGames games={games} clickedGenre={clickedGenre} />
        :<PopularGames games={games}/>}
       </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App