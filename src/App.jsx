import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutPage from './components/AboutPage';
import Game from './components/Game/Game';
import Mygames from './components/Mygames/Mygames';

const App = () => {
  const [myGames, setMyGames] = useState([]);

  const handleBuy = (gameData) => {
    console.log("Bought")
    setMyGames([...myGames, gameData]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/game/:id"
          element={<Game onBuy={handleBuy} />} 
        />
        <Route
          path="/mygames"
          element={<Mygames games={myGames} />} 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
