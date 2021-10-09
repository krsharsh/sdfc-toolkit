import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header.component';
import Homepage from './pages/Homepage/Hompage.page';
import Dashboard from './pages/Dashboard/Dashboard.page';
import SignIn from './pages/SignIn/SignIn.page';
import SignUp from './pages/SignUp/SignUp.page';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          // console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          {/* <Route path='/signin' component={SignIn} /> */}
          <Route
            path='/signin'
            render={() =>
              this.state.currentUser ? <Redirect to='/' /> : <SignIn />
            }
          />
          <Route path='/signup' component={SignUp} />
          <Route path='/dashboard' component={Dashboard} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}
export default App;
