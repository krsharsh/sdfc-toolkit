import React from 'react';

import CustomButton from '../../components/CustomButton/CustomButton.component';

import './Dashboard.styles.scss';

const Dashboard = (props) => {
  const handleProductionClick = () => {
    const clientId =
      '3MVG9n_HvETGhr3Ao6N8bdy6kmqtuRF4MQjDADKx7Ova9pMiPN3e6Wrt5N.5a8y409CqpLkY_B7YyaZEQPVNO';
    const url = `https://login.salesforce.com/services/oauth2/authorize?client_id=${clientId}&redirect_uri=http://localhost:3000/callback&response_type=code`;
    console.log(url);
    window.location.href = url;
  };
  return (
    <div className='dashboard'>
      <div className='jumbotron'>
        <div className='connect connect-production '>
          <div className='connect-title'>
            Connect Your Salesforce Production Account
          </div>
          <CustomButton onClick={handleProductionClick}>Connect</CustomButton>
        </div>
        <div className='connect connect-development '>
          <div className='connect-title'>
            Connect Your Salesforce Devlopment Account
          </div>
          <CustomButton>Connect</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
