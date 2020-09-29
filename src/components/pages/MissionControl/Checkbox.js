import React from 'react';

import unchecked_box from '../../../assets/icons/unchecked_box.svg';
import checked_box from '../../../assets/icons/checked_box.svg';

const Checkbox = props => {
  return (
    <img
      className={props.className}
      src={props.isCompleted ? checked_box : unchecked_box}
      alt={`task ${!props.isCompleted ? 'in' : ''}complete checkbox`}
      onClick={e => e.stopPropagation()}
    />
  );
};

export default Checkbox;
