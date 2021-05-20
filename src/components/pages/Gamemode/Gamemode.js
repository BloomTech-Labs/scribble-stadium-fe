import React from 'react';
import history from './history';
import { Link, Router, Switch } from 'react-router-dom';
import GamemodeButton from './GamemodeButton';

const Gamemode = props => {
  const singlePlay = () => {
    console.log(history);
  };

  return (
    <Switch>
      <Router history={history}>
        <Link path="/gamemode/single">
          <button onClick={() => history.push('/gamemode/single')}>
            {' '}
            Single Player
          </button>
        </Link>
      </Router>
    </Switch>
  );
};

// export default connect()(Gamemode);
export default Gamemode;
