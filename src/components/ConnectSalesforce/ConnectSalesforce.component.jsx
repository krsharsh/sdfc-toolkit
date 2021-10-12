import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../../components/CustomButton/CustomButton.component';
import {
  selectCurrentUser,
  selectDevelopmentCode,
  selectProductionCode,
} from '../../redux/user/user.selectors';
import { setEnvironment } from '../../redux/environment/environment.actions';
import { selectEnvironment } from '../../redux/environment/environment.selectors';
const ConnectSalesforce = ({
  environment,
  production,
  development,
  setEnvironment,
  selectEnvironment,
  ...otherProps
}) => {
  const clientId =
    '3MVG9n_HvETGhr3Ao6N8bdy6kmqtuRF4MQjDADKx7Ova9pMiPN3e6Wrt5N.5a8y409CqpLkY_B7YyaZEQPVNO';

  const handleProductionClick = () => {
    const url = `https://${environment}.salesforce.com/services/oauth2/authorize?client_id=${clientId}&redirect_uri=http://localhost:3000/callback&response_type=code`;
    console.log(url);

    if (environment === 'login') {
      console.log('env = login');
      console.log(selectEnvironment);
      setEnvironment('production');
    } else if (environment === 'test') {
      console.log('env = test');
      console.log(selectEnvironment);

      setEnvironment('development');
    }
    console.log(environment);
    console.log(otherProps);
    window.location.href = url;
  };
  return (
    <div className='connect connect-production '>
      <div className='connect-title'>
        Connect Your Salesforce{' '}
        {environment === 'login' ? 'Production' : 'Devlopment'} Account
      </div>
      <CustomButton onClick={handleProductionClick}>Connect</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  production: selectProductionCode,
  development: selectDevelopmentCode,
  selectEnvironment: selectEnvironment,
});

const mapDispatchToProps = (dispatch) => ({
  setEnvironment: (env) => dispatch(setEnvironment(env)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectSalesforce);
