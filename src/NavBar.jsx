import './index.css';
import Search from './Search';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <Link to="/"  className='home'>Home</Link>
      <Link to="/about"  className='about'>About</Link>
      <Search/>
      <button className='my-games'>My games</button>
    </nav>
  )
}

export default NavBar