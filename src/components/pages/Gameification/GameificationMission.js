//** Import Modules */
import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

//** Import Components */
import GameMissionProgress from './GameMissionProgress';
import GameReadStep from './GameReadStep';
import GameDrawStep from './GameDrawStep';
import GameWriteStep from './GameWriteStep';

export default function GameificationMission(props) {
  // GEt the history obj
  const history = useHistory();

  // Get the base url to use for route paths/links
  const baseURL = `${props.baseURL}/mission`;

  // Save the current step we are currently in
  const [currentStep, setCurrentStep] = useState(props.currentStep);

  // Data to submit
  const initialSubmissionData = {
    ChildID: 123,
    StoryID: 1,
    HasRead: false,
    HasWritten: false,
    HasDrawn: false,
    id: 123,
    Complexity: 30,
    LowConfidence: false,
    Status: 'PENDING',
  };

  const [submissionData, setSubmissionData] = useState(initialSubmissionData);

  // Data to submit
  const initialFileData = {
    drawings: [],
    writings: [],
  };

  const [fileSubmissionData, setFileSubmissionData] = useState(initialFileData);

  // When all steps are complete, unlock the battle button
  const [battleReady, setBattleReady] = useState(false);

  // Has the modal already appeared once? Let's help avoid showing it again
  const initialModalData = {
    read: false,
    write: false,
  };

  const [modalClosed, setModalClosed] = useState(initialModalData);

  // Update the current step
  const updateCurStep = step => {
    setCurrentStep(step);
    gsap.to(window, { duration: 1, scrollTo: '.hero' });
  };

  // Update the current data to submit
  const updateSubmissionData = (dataType, data) => {
    setSubmissionData({ ...submissionData, [dataType]: data });
  };

  // Update the current file data to submit
  const updateFileSubmissionData = (dataType, data) => {
    setFileSubmissionData({ ...fileSubmissionData, [dataType]: data });
  };

  // Update modal status
  const updateModalStatus = (modal, status) => {
    setModalClosed({ ...modalClosed, [modal]: status });
  };

  // Update battle ready status
  const updateBattleReady = status => {
    setBattleReady(status);
  };

  useEffect(() => {
    if (submissionData.HasRead === false) {
      setCurrentStep('read');
      history.push(`${baseURL}/read`);
    }

    gsap.from('#game-mission', { opacity: 0, y: 100, duration: 1 });

    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  console.log(submissionData);

  return (
    <div id="game-mission">
      <GameMissionProgress
        baseURL={baseURL}
        updateCurStep={updateCurStep}
        currentStep={currentStep}
        submissionData={submissionData}
        enableModalWindow={props.enableModalWindow}
      />

      <Switch>
        <Route path={`${baseURL}/read`}>
          <GameReadStep
            updateCurStep={updateCurStep}
            baseURL={baseURL}
            enableModalWindow={props.enableModalWindow}
            updateSubmissionData={updateSubmissionData}
            updateModalStatus={updateModalStatus}
            modalClosed={modalClosed}
          />
        </Route>

        <Route path={`${baseURL}/draw`}>
          <GameDrawStep
            updateCurStep={updateCurStep}
            baseURL={baseURL}
            updateSubmissionData={updateSubmissionData}
            updateFileSubmissionData={updateFileSubmissionData}
            enableModalWindow={props.enableModalWindow}
            fileSubmissionData={fileSubmissionData}
            updateModalStatus={updateModalStatus}
            modalClosed={modalClosed}
            updateBattleReady={updateBattleReady}
          />
        </Route>

        <Route path={`${baseURL}/write`}>
          <GameWriteStep
            updateCurStep={updateCurStep}
            baseURL={baseURL}
            updateSubmissionData={updateSubmissionData}
            updateFileSubmissionData={updateFileSubmissionData}
            enableModalWindow={props.enableModalWindow}
            fileSubmissionData={fileSubmissionData}
            submissionData={submissionData}
            battleReady={battleReady}
            updateBattleReady={updateBattleReady}
          />
        </Route>
      </Switch>
    </div>
  );
}
