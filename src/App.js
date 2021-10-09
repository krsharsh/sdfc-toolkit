import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header.component';
import Homepage from './pages/Homepage/Hompage.page';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp.page';
import Dashboard from './pages/Dashboard/Dashboard.page';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/signin' component={SignInSignUp} />
        <Route path='/dashboard' component={Dashboard} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
