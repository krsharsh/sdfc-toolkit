import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setEnvironment } from '../../redux/environment/environment.actions';
import './Header.styles.scss';

const Header = ({ currentUser, setEnvironment }) => {
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
          <Link
            className='option'
            onClick={() => {
              setEnvironment(null);
              auth.signOut();
            }}
            to='/'
          >
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setEnvironment: (env) => dispatch(setEnvironment(env)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
