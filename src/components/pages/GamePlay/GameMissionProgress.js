//** Import Modules */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Dropdown } from 'antd';
//** Import Assets */
import completeIcon from '../../../assets/images/gamemodeimg/completed.png';

export default function GameMissionProgress(props) {
  // Get the history object
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
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
        title: 'You must read before advancing!',
        description: 'In order to complete the mission, reading is a MUST!',
        buttonTxt: 'Close',
      };

      props.enableModalWindow(modalData);
    }
  };

  // const showModal = () => {
  //   setIsModalVisible(true);
  //   const modalData = {
  //     title: 'Quick Navigation Tips!',
  //     description:
  //       'Click on the "Read," "Draw" or "Write" buttons to navigate through the mission. You have to complete your current step before you can move on to the next step, so if you haven\'t completed the "Read" step, you won\'t be able to click on "Draw" or "Write" to advance. Once you have completed all the steps, you can click back and forth between all of them.',
  //     buttonTxt: 'Got it!',
  //   };

  //   props.enableModalWindow(modalData);
  // };

  const showGameTips = () => {
    return (
      <div className="game-tips-container">
        <div className="game-tips-text">
          <p className="game-tips-text-p">
            <img
              style={{ width: '48px', height: '48px' }}
              src="https://img.icons8.com/flat-round/64/000000/wide-right-arrow.png"
            />{' '}
            Click on the "Read," "Draw" or "Write" buttons to navigate through
            the mission.
          </p>
          <p className="game-tips-text-p">
            <img
              style={{ width: '48px', height: '48px' }}
              src="https://img.icons8.com/flat-round/64/000000/wide-right-arrow.png"
            />{' '}
            You have to complete your current step before you can move on to the
            next step
          </p>
          <p className="game-tips-text-p">
            <img
              style={{ width: '48px', height: '48px' }}
              src="https://img.icons8.com/flat-round/64/000000/wide-right-arrow.png"
            />{' '}
            Once you have completed all the steps, you can click back and forth
            between all of them.
          </p>
        </div>
        <button className="game-tips-gotit-btn">Got it!</button>
      </div>
    );
  };

  return (
    <div>
      <div>
        <Dropdown overlay={showGameTips} trigger={['click']}>
          {/*Lightbulb Icon*/}
          <div className="game-tips-icon-container">
            <img
              style={{ width: '40px', height: '38px', cursor: 'pointer' }}
              src="https://img.icons8.com/external-flat-juicy-fish/60/000000/external-crisis-crisis-management-flat-flat-juicy-fish-6.png"
              alt="lightbulb"
            />
            <p className="tips">Tips</p>
          </div>
        </Dropdown>
      </div>

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
    </div>
  );
}

//** Component for the step buttons */
const StepButton = props => {
  const { stepNum, stepName, handleStepClick, currentStep } = props;

  const completedClass = props.isComplete ? 'completed' : '';
  const activeClass = currentStep === stepName ? 'active' : '';
  const stepBGColor =
    props.stepBGColor !== undefined ? props.stepBGColor : '#ffffff';
  const requirementMet =
    props.requiredStep !== undefined ? props.requiredStep : true;

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
