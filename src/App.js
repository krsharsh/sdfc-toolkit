import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header.component';
import Homepage from './pages/Homepage/Hompage.page';
import Dashboard from './pages/Dashboard/Dashboard.page';
import SignIn from './pages/SignIn/SignIn.page';
import SignUp from './pages/SignUp/SignUp.page';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/dashboard' component={Dashboard} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
