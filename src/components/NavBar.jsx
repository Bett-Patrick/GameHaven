import '../../src/index.css';

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <Link to="/"  className='home'>Home</Link>
      <Link to="/about"  className='about'>About</Link>
      <Link to="/mygames" className='my-games'>My games</Link>
    </nav>
  )
}

export default NavBar