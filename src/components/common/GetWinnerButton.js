import React from 'react';

// import PropTypes from 'prop-types'

const getWinner = props => {
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .get()
      .then(res => {})
      .catch(err => console.log(err));
  };
  console.log(handleSubmit);

  return <button onClick={handleSubmit}>Get Winner!</button>;
};

export default getWinner;

// getWinner.PropTypes = {
//     handleClick: PropTypes.func,
// };
