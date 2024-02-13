import React from 'react'
import './index.css';
import SideBar from './SideBar';
import NavBar from './NavBar';
import Footer from './Footer';


const App = () => {
  return (
    <div className='App'>
      <div className='aside-plus-nav'>
       <SideBar/>
       <NavBar/>
      </div>
      <Footer/>
    </div>
  )
}

export default App