import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectEnvironment } from '../../redux/environment/environment.selectors';
import { setCurrentUser } from '../../redux/user/user.actions';

import queryString from 'query-string';
import Spinner from '../../components/Spinner/Spinner.component';

import { updateUserProfileDocument } from '../../firebase/firebase.utils';

const Callback = ({
  currentUser,
  selectEnvironment,
  location,
  setProductionCode,
}) => {
  const [loading, setloading] = useState(true);
  let history = useHistory();
  useEffect(() => {
    setloading(true);

    console.log(selectEnvironment);
    console.log('Working');
    let queries = queryString.parse(location.search);
    console.log(queries.code);
    console.log(currentUser);
    if (selectEnvironment === 'production') {
      const productionAttribute = {
        production: {
          code: queries.code,
        },
      };

      updateUserProfileDocument(currentUser, productionAttribute);
    } else if (selectEnvironment === 'development') {
      const developmentAttribute = {
        development: {
          code: queries.code,
        },
      };
      updateUserProfileDocument(currentUser, developmentAttribute);
    }
    setloading(false);
    history.push('/dashboard');
  }, [location.search, currentUser, selectEnvironment, history, loading]);
  return <div>{loading ? <Spinner /> : null}</div>;
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  selectEnvironment: selectEnvironment,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Callback);
