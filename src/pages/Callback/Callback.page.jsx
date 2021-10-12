import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import queryString from 'query-string';
import Spinner from '../../components/Spinner/Spinner.component';

const Callback = (props) => {
  const [loading, setloading] = useState(true);
  let history = useHistory();

  useEffect(() => {
    console.log('Working');
    let queries = queryString.parse(props.location.search);
    console.log(queries);
    history.push('/dashboard');
  });
  return <div>{loading ? <Spinner /> : null}</div>;
};

export default Callback;
