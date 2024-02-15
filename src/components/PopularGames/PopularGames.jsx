import React from 'react'
import '../../../src/index.css'



const PopularGames = ({games}) => {
    
  return (
    <div className='popular-games'>
        <div>
            <img src={games.thumbnail} alt={games.title} />
        </div>
    </div>
  )
}

export default PopularGames