//** Import Modules */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'antd';
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

  const showModal = () => {
    setIsModalVisible(true);
    const modalData = {
      title: 'Quick Navigation Tips!',
      description:
        'Click on the "Read," "Draw" or "Write" buttons to navigate through the mission. You have to complete your current step before you can move on to the next step, so if you haven\'t completed the "Read" step, you won\'t be able to click on "Draw" or "Write" to advance. Once you have completed all the steps, you can click back and forth between all of them.',
      buttonTxt: "Let's Go!",
    };

    props.enableModalWindow(modalData);
  };
  // Code for stand-alone Modal Window -- might not be needed
  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  return (
    <div>
      <div>
        <Button
          style={{ margin: '1rem' }}
          className="back-btn"
          onClick={showModal}
        >
          Game Tips
        </Button>
        {/* <Modal
          title="Basic Modal"
          bodyStyle={{ padding: '1rem' }}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>
            Here are a few tips to help you navigate your way through the game!
          </p>
          <p>
            * Click on the "Read," "Draw" or "Write" buttons to navigate through
            the mission.
          </p>
          <p>
            * Remember, you have to complete each step in the mission in order
            to advance to the next step, so if you haven't completed the "Read"
            step, you won't be able to click on "Draw" or "Write" to advance.
          </p>
          <p>
            * Once you have completed all the steps, you can click back and
            forth between all of them to look over your work.
          </p>
          <p>* Click on the "Game Tips" button to see these tips again!</p>
        </Modal> */}
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
