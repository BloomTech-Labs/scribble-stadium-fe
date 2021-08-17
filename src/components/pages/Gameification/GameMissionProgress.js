//** Import Modules */
import React from 'react';
import { useHistory } from 'react-router-dom';

//** Import Assets */
import completeIcon from '../../../assets/images/gamemodeimg/completed.png';

export default function GameMissionProgress(props) {
  // Get the history object
  const history = useHistory();

  // Get the current state
  const { currentStep } = props;

  // Get the base URL
  const { baseURL } = props;

  // Functions to handle what each button does
  const handleStepClick = (step, requirementMet) => {
    if (requirementMet) {
      props.updateCurStep(step);
      history.push(`${baseURL}/${step}`);
    } else {
      const modalData = {
        title: 'YOu must read before advancing!',
        description: 'In order to complete the mission, reading is a MUST!',
        buttonTxt: 'Close',
      };

      props.enableModalWindow(modalData);
    }
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
          isComplete={props.submissionData.HasRead}
          stepBGColor="#c6fd7e"
        />
        <StepButton
          stepNum="2"
          stepName="draw"
          currentStep={currentStep}
          handleStepClick={handleStepClick}
          isComplete={props.submissionData.HasDrawn}
          requiredStep={props.submissionData.HasRead}
          stepBGColor="#ff845d"
        />
        <StepButton
          stepNum="3"
          stepName="write"
          currentStep={currentStep}
          handleStepClick={handleStepClick}
          isComplete={props.submissionData.HasWritten}
          requiredStep={props.submissionData.HasRead}
          stepBGColor="#ffd854"
        />
      </div>
    </div>
  );
}

//** Component for the step buttons */
const StepButton = props => {
  const { stepNum, stepName, handleStepClick, currentStep } = props;

  const completedClass = props.isComplete ? 'completed' : '';
  const activeClass = currentStep === stepName ? 'active' : '';
  const stepBGColor =
    props.stepBGColor != undefined ? props.stepBGColor : '#ffffff';
  const requirementMet =
    props.requiredStep != undefined ? props.requiredStep : true;

  return (
    <button
      id={`step-${stepNum}`}
      className={`step ${activeClass} ${completedClass}`}
      onClick={() => handleStepClick(stepName, requirementMet)}
    >
      <span style={{ backgroundColor: stepBGColor }}>
        {props.isComplete ? (
          <img src={completeIcon} alt="Completed" />
        ) : (
          stepNum
        )}
      </span>
      {stepName}
    </button>
  );
};
