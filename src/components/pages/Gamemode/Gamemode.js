import React, { Component } from 'react';
import history from './history';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link, Router, Route, Switch } from 'react-router-dom';
import GamemodeButton from './GamemodeButton';
import { render } from 'react-dom';

const Gamemode = () => {
  const { push } = useHistory();
  //   history.push('/gamemode/single');
  const singled = () => {
    push('/gamemode/single');
  };

  console.log(history);
  return (
    <Switch>
      <Router history={history}>
        <Link to="/gamemode/single">
          <button onClick={singled}> Single Player</button>
          <Route path="/gamemode/single" component={GamemodeButton} />
        </Link>
      </Router>
    </Switch>
  );
};
export default connect()(Gamemode);
// export default connect()(Gamemode);
