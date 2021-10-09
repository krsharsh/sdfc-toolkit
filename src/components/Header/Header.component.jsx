import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link to='/' className='header-title'>
      SF-DEV-TOOLS
    </Link>
    <div className='options'>
      <Link className='option' to='/'>
        Home
      </Link>
      <Link className='option' to='/dashboard'>
        Dashboard
      </Link>
      <Link className='option' to='/signin'>
        Log In
      </Link>
    </div>
  </div>
);

export default Header;
