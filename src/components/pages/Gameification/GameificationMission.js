//** Import Modules */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//** Import Components */
import GameMissionProgress from './GameMissionProgress';
import GameReadStep from './GameReadStep';
import GameDrawStep from './GameDrawStep';
import GameWriteStep from './GameWriteStep';

export default function GameificationMission(props) {
  const baseURL = `${props.baseURL}/mission`;

  return (
    <div>
      <GameMissionProgress baseURL={baseURL} />

      <Switch>
        <Route path={`${baseURL}/read`} component={GameReadStep} />
        <Route path={`${baseURL}/draw`} component={GameDrawStep} />
        <Route path={`${baseURL}/write`} component={GameWriteStep} />
      </Switch>
    </div>
  );
}
