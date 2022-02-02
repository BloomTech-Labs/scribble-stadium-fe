import React from 'react';

// import PropTypes from 'prop-types'

const GetWinnerButton = props => {
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .get('http://localhost:5000/api/game/results?squadId=1')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  return <button onClick={handleSubmit}>Get Winner!</button>;
};

export default GetWinnerButton;

// getWinner.PropTypes = {
//     handleClick: PropTypes.func,
// };
