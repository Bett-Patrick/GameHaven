import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Homepage from './Homepage'
import AboutPage from './AboutPage'
import Game from './components/Game/Game'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/"  element={<Homepage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/game' element={<Game/>}/>

   </Routes>
   </BrowserRouter>
  )
}

export default App