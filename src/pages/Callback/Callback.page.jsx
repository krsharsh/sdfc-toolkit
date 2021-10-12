import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCurrentUser,
  selectDevelopmentCode,
  selectProductionCode,
} from '../../redux/user/user.selectors';
import { selectEnvironment } from '../../redux/environment/environment.selectors';
import {
  setCurrentUser,
  setProductionCode,
} from '../../redux/user/user.actions';

import queryString from 'query-string';
import Spinner from '../../components/Spinner/Spinner.component';

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
      setCurrentUser({
        ...currentUser,
        production: {
          code: queries.code,
        },
      });
      setProductionCode(queries.code);
    } else if (selectEnvironment === 'development') {
      setCurrentUser({
        ...selectCurrentUser,
        development: {
          code: queries.code,
        },
      });
    }
    setloading(false);

    history.push('/dashboard');
  }, [
    location.search,
    currentUser,
    selectEnvironment,
    setProductionCode,
    history,
  ]);
  return <div>{loading ? <Spinner /> : null}</div>;
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  production: selectProductionCode,
  development: selectDevelopmentCode,
  selectEnvironment: selectEnvironment,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setProductionCode: (code) => dispatch(setProductionCode(code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Callback);
