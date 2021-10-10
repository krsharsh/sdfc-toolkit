import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './Header.styles.scss';

const Header = ({ currentUser }) => {
  // console.log(currentUser);
  return (
    <div className='header'>
      <Link to='/' className='header-title'>
        SFDC-TOOLKIT
      </Link>
      <div className='options'>
        {currentUser ? (
          <div className='option'>Hi, {currentUser.displayName}</div>
        ) : null}
        <Link className='option' to='/'>
          Home
        </Link>
        {currentUser ? (
          <Link className='option' to='/dashboard'>
            Dashboard
          </Link>
        ) : null}
        {currentUser ? (
          <Link className='option' onClick={() => auth.signOut()} to='/'>
            Sign Out
          </Link>
        ) : (
          <Link className='option' to='/signin'>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};
export default Header;
