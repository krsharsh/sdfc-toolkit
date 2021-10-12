import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCurrentUser,
  selectCurrentUserProduction,
} from '../../redux/user/user.selectors';
import { selectEnvironment } from '../../redux/environment/environment.selectors';
import ConnectSalesforce from '../../components/ConnectSalesforce/ConnectSalesforce.component';

import './Dashboard.styles.scss';

const Dashboard = ({ currentUser, selectEnvironment, userProduction }) => {
  useState(async () => {
    console.log('inside dashboard useState');
    console.log(selectEnvironment);
    console.log(currentUser);
    console.log(userProduction);
  }, [currentUser, selectEnvironment, userProduction]);
  return (
    <div className='dashboard'>
      <div className='jumbotron'>
        {/* {!userProduction.code ? (
          <ConnectSalesforce environment='login' />
        ) : null} */}
        <ConnectSalesforce environment='login' />
        <ConnectSalesforce environment='test' />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  selectEnvironment: selectEnvironment,
  userProduction: selectCurrentUserProduction,
});

export default connect(mapStateToProps)(Dashboard);
