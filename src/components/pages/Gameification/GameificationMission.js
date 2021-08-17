//** Import Modules */
import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

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

  // Save the current progress on a state
  const initialProgress = {
    read: '',
    draw: '',
    write: '',
  };

  const [currentProgress, setCurrentProgress] = useState(initialProgress);

  // Data to submit
  const initialData = {
    id: 123,
    drawings: [],
    writings: [],
  };

  const [submissionData, setSubmissionData] = useState(initialData);

  // Update the current step
  const updateCurStep = step => {
    setCurrentStep(step);
  };

  // Update current progress
  const updateCurProgress = (step, status) => {
    setCurrentProgress({ ...currentProgress, [step]: status });
  };

  // Update the current data to submit
  const updateSubmissionData = (step, data) => {
    setSubmissionData({ ...submissionData, [step]: data });
  };

  useEffect(() => {
    if (currentProgress.read === '') {
      setCurrentStep('read');
      history.push(`${baseURL}/read`);
    }
  }, []);

  console.log(currentProgress);

  return (
    <div>
      <GameMissionProgress
        baseURL={baseURL}
        updateCurStep={updateCurStep}
        currentStep={currentStep}
        currentProgress={currentProgress}
      />

      <Switch>
        <Route path={`${baseURL}/read`}>
          <GameReadStep
            updateCurStep={updateCurStep}
            baseURL={baseURL}
            updateCurProgress={updateCurProgress}
          />
        </Route>

        <Route path={`${baseURL}/draw`}>
          <GameDrawStep
            updateCurStep={updateCurStep}
            baseURL={baseURL}
            updateCurProgress={updateCurProgress}
            updateSubmissionData={updateSubmissionData}
          />
        </Route>

        <Route path={`${baseURL}/write`}>
          <GameWriteStep updateCurStep={updateCurStep} baseURL={baseURL} />
        </Route>
      </Switch>
    </div>
  );
}
