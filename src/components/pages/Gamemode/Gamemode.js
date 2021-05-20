import React, { Component } from 'react';
import history from './history';
import { Link, Router, Route, Switch } from 'react-router-dom';
import GamemodeButton from './GamemodeButton';
import { render } from 'react-dom';

const singlePlay = () => {
  history.push('/gamemode/single');

  console.log(history);
};

export default class Gamemode extends Component {
  render() {
    return (
      <Switch>
        <Router history={history}>
          <Link to="/gamemode/single">
            <button onClick={singlePlay}> Single Player</button>
            <Route path="/gamemode/single" component={GamemodeButton} />
          </Link>
        </Router>
      </Switch>
    );
  }
}

// export default connect()(Gamemode);
