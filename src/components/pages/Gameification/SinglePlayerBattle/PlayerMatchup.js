//** Import Modules */
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import StoryVoting from './StoryVoting';

//** Import Components */
import VsScreen from './VsScreen';

export default function PlayerMatchup(props) {
  // Get the history object
  const history = useHistory();

  // Get new base url
  const baseURL = `${props.baseURL}/single-matchup`;

  return (
    <div id="matchup-screen">
      <Switch>
        <Route path={`${baseURL}`} exact>
          <VsScreen baseURL={baseURL} history={history} />
        </Route>

        <Route path={`${baseURL}/story-voting`}>
          <StoryVoting baseURL={baseURL} history={history} />
        </Route>
      </Switch>
    </div>
  );
}
