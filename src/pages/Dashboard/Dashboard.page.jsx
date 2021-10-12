import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCurrentUser,
  selectDevelopmentCode,
  selectProductionCode,
} from '../../redux/user/user.selectors';
import { selectEnvironment } from '../../redux/environment/environment.selectors';
import ConnectSalesforce from '../../components/ConnectSalesforce/ConnectSalesforce.component';

import './Dashboard.styles.scss';

const Dashboard = ({
  currentUser,
  production,
  development,
  selectEnvironment,
}) => {
  console.log(production);
  console.log(development);
  console.log(selectEnvironment);
  return (
    <div className='dashboard'>
      <div className='jumbotron'>
        {!production ? <ConnectSalesforce environment='login' /> : null}
        {!development ? <ConnectSalesforce environment='test' /> : null}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  production: selectProductionCode,
  development: selectDevelopmentCode,
  selectEnvironment: selectEnvironment,
});

export default connect(mapStateToProps)(Dashboard);
