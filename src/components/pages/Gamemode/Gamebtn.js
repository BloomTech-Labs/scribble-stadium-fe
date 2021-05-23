import React from 'react';
import PropTypes from 'prop-types';

const Gamebtn = props => {
  // Here is a button for use when simply in need of a button that doesn't require to be wrapped in a form.
  // contains a click property for your use onClick
  return (
    <button
      read={props.read}
      onClick={props.handleClick}
      disabled={props.isDisabled}
      className={props.classType || 'primary'}
    >
      {props.buttonText}
    </button>
  );
};

export default Gamebtn;

Gamebtn.propTypes = {
  read: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
  classType: PropTypes.string,
  disabled: PropTypes.string,
  handleClick: PropTypes.func,
};
