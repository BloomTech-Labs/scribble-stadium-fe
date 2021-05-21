import React, { useState, useEffect } from 'react';
// import history from './history';
import { connect } from 'react-redux';
import { tasks } from '../../../state/actions';
import { useHistory } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import GamemodeButton from './GamemodeButton';

import { render } from 'react-dom';

const Gamemode = () => {
  const { push, location } = useHistory();
  const [sP, setsP] = useState(false);
  //   history.push('/gamemode/single');
  const ff = () => {
    if (location.pathname === '/gamemode/single' && sP === true) {
      push('/gamemode');
      setsP(false);
    } else if (location.pathname === '/gamemode' && sP === false) {
      push('/gamemode/single');
      setsP(true);
    }
  };

  //   useEffect(() => {

  //     ff();
  //   }, []);

  const singled = () => {
    if (location.pathname === '/gamemode/single' && sP === true) {
      push('/gamemode');
      setsP(false);
      console.log('nal', this.state.hasRead);
    } else if (location.pathname === '/gamemode' && sP === false) {
      push('/gamemode/single');
      setsP(true);
    }
  };

  //   console.log(history);
  return (
    (sP && (
      <Link to="/gamemode">
        <button onClick={singled}> Single Player</button>
        <Route path="/gamemode" component={GamemodeButton} />
      </Link>
    )) || (
      <Link to="/gamemode/single">
        <button onClick={singled}> Single Player</button>
        <Route path="/gamemode/single" component={GamemodeButton} />
      </Link>
    )
  );
};
export default connect(
  state => ({
    hasRead: state.tasks.hasRead,
  }),
  {
    setTasks: tasks.setTasks.hasRead,
  }
)(Gamemode);
// export default connect()(Gamemode);
