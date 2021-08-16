//** Import Modules */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

//** Import Components */
import { Header } from '../../common';
import GameReadStep from './GameReadStep';

export default function GameificationMain(props) {
  const [currentStep, setCurrentStep] = useState('');
  const baseURL = '/gameification';

  const updateStep = step => {
    setCurrentStep(step);
  };

  return (
    <div id="gamemode">
      <Header />

      <Switch>
        <Route path={baseURL} exact>
          <GamemodeBtns updateStep={updateStep} baseURL={baseURL} />
        </Route>
        <Route path={`${baseURL}/read`} component={GameReadStep} />
      </Switch>
    </div>
  );
}

//** Component for the buttons */
const GamemodeBtns = props => {
  const history = useHistory();

  const acceptMission = e => {
    e.preventDefault();

    history.push(`${props.baseURL}/read`);
  };

  return (
    <div className="gamemode-btns">
      <div className="inner-container">
        <button className="mission-btn" onClick={acceptMission}>
          Accept The Mission
        </button>

        <button>Trophy Room</button>
      </div>
    </div>
  );
};
