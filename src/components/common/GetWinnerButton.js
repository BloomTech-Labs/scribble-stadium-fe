import React from 'react';
import PropTypes from 'prop-types';
import { getWinnerbySquadId } from '.../api/index';

const GetWinner = props => {
  const handleSubmit = e => {
    e.preventDefault();
    getWinnerbySquadId(props.squadID);
  };

  return <button onClick={handleSubmit}>Get Winner!</button>;
};

export default GetWinner;

GetWinner.PropTypes = {
  squadID: PropTypes.number,
};
