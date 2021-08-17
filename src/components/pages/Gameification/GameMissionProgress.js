//** Import Modules */
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function GameMissionProgress(props) {
  // Get the history object
  const history = useHistory();

  // Get the current state
  const { currentStep } = props;

  // Get the base URL
  const { baseURL } = props;

  // Functions to handle what each button does
  const handleStepClick = step => {
    props.updateCurStep(step);
    history.push(`${baseURL}/${step}`);
  };

  return (
    <div id="mission-progress">
      <h3>Your Mission</h3>

      <div className="steps">
        <StepButton
          stepNum="1"
          stepName="read"
          currentStep={currentStep}
          handleStepClick={handleStepClick}
        />
        <StepButton
          stepNum="2"
          stepName="draw"
          currentStep={currentStep}
          handleStepClick={handleStepClick}
        />
        <StepButton
          stepNum="3"
          stepName="write"
          currentStep={currentStep}
          handleStepClick={handleStepClick}
        />
      </div>
    </div>
  );
}

//** Component for the step buttons */
const StepButton = props => {
  const { stepNum, stepName, handleStepClick, currentStep } = props;

  return (
    <button
      id={`step-${stepNum}`}
      className={currentStep === stepName ? 'step active' : 'step'}
      onClick={() => handleStepClick(stepName)}
    >
      <span>{stepNum}</span>
      {stepName}
    </button>
  );
};
