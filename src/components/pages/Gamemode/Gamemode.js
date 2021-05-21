import React, { useState, useEffect } from 'react';
// import history from './history';
import { connect } from 'react-redux';
import { tasks } from '../../../state/actions';
import { useHistory } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import GamemodeButton from './GamemodeButton';

import { render } from 'react-dom';

const Gamemode = ({ ...props }) => {
  const { push, location } = useHistory();
  const [sP, setsP] = useState(false);
  //   history.push('/gamemode/single');
  const propInit = () => {
    props.child.gamemode = {
      mode: 'select',
      read: null,
      write: null,
      draw: null,
    };
  };

  useEffect(() => {
    propInit();
  }, []);

  const singled = () => {
    if (location.pathname === '/gamemode/single' && sP === true) {
      push('/gamemode');
      props.child.gamemode = {
        mode: 'select',
        read: null,
        write: null,
        draw: null,
      };
      setsP(false);
      console.log('nal', props.child);
    } else if (location.pathname === '/gamemode' && sP === false) {
      push('/gamemode/single');
      props.child.gamemode = {
        mode: 'single',
        read: null,
        write: null,
        draw: null,
      };
      console.log('nal elif', props.child);
      setsP(true);
    }
  };

  //   console.log(history);
  return (
    (sP && (
      <Link to="/gamemode">
        <button onClick={singled}>Goback to Menu</button>
        <Route path="/gamemode" component={GamemodeButton} />
      </Link>
    )) || (
      <div>
        <button>Multiplayer</button>
        <Link to="/gamemode/single">
          <button onClick={singled}>Single Player</button>
          <Route path="/gamemode/single" component={GamemodeButton} />
        </Link>
      </div>
    )
  );
};
export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(Gamemode);
// export default connect()(Gamemode);
