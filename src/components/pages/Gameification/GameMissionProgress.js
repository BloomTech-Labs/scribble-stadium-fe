//** Import Modules */
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function GameMissionProgress(props) {
  // Get the history object
  const history = useHistory();

  // Get the base URL
  const { baseURL } = props;

  // Functions to handle what each button does
  const handleStepClick = step => {
    history.push(`${baseURL}/${step}`);
  };

  return (
    <div id="mission-progress">
      <h3>Your Mission</h3>

      <div className="steps">
        <button
          id="step-1"
          className="step"
          onClick={() => handleStepClick('read')}
        >
          <span>1</span>
          Read
        </button>

        <button
          id="step-2"
          className="step"
          onClick={() => handleStepClick('draw')}
        >
          <span>2</span>
          Draw
        </button>

        <button
          id="step-3"
          className="step"
          onClick={() => handleStepClick('write')}
        >
          <span>3</span>
          Write
        </button>
      </div>
    </div>
  );
}
