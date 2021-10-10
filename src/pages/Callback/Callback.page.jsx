import React from 'react';
import queryString from 'query-string';

const Callback = (props) => {
  let queries = queryString.parse(props.location.search);
  console.log(queries);
  return <div></div>;
};

export default Callback;
