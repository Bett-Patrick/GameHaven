import '../../src/index.css';
import Genre from './Genres/Genre';

const SideBar = ({games, onGenreClick}) => {

  return (
    <aside className='side-nav'>
      <ul className='genres'>
        <h2 className='genre-heading'>Genres</h2>
        <Genre games={games} onGenreClick={onGenreClick}/>
      </ul>
    </aside>
  )
}

export default SideBar