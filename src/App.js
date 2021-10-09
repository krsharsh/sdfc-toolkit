import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header.component';
import Homepage from './pages/Homepage/Hompage.page';
import Dashboard from './pages/Dashboard/Dashboard.page';
import SignIn from './pages/SignIn/SignIn.page';
import SignUp from './pages/SignUp/SignUp.page';

import { auth } from './firebase/firebase.utils';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => setCurrentUser(user));
    // console.log(currentUser);
  });

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/signin' component={SignIn} />
        {/* <Route
          path='/signin'
          render={() => (currentUser ? <Redirect to='/' /> : <SignIn />)}
        /> */}
        <Route path='/signup' component={SignUp} />
        <Route path='/dashboard' component={Dashboard} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
