//** Import Modules */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//** Import Components */
import GameMissionProgress from './GameMissionProgress';
import GameReadStep from './GameReadStep';

export default function GameificationMission(props) {
  const baseURL = `${props.baseURL}/mission`;

  return (
    <div>
      <GameMissionProgress />

      <Switch>
        <Route path={`${baseURL}/read`} component={GameReadStep} />
      </Switch>
    </div>
  );
}
