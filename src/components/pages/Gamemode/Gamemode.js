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
    if (props.child.gamemode != null) {
      props.child.gamemode = {
        mode: 'single',
        read: props.child.gamemode.read,
        write: null,
        draw: null,
        sp: true,
      };
    } else {
      props.child.gamemode = {
        mode: 'select',
        read: null,
        write: null,
        draw: null,
        sp: false,
      };
    }
  };

  useEffect(() => {
    propInit();
  }, [props]);

  const singled = () => {
    if (location.pathname === '/gamemode/single' && sP === true) {
      push('/gamemode');
      props.child.gamemode = {
        mode: 'select',
        read: null,
        write: null,
        draw: null,
        sp: !props.child.gamemode.sp,
      };
      setsP(false);
      console.log('nal', props.child);
    } else if (location.pathname === '/gamemode' && sP === false) {
      push('/gamemode/single');
      props.child.gamemode = {
        mode: 'single',
        read: props.child.gamemode.read,
        write: props.child.gamemode.write,
        draw: props.child.gamemode.draw,
        sp: !props.child.gamemode.sp,
      };
      console.log('nal elif', props.child);
      setsP(true);
    }
  };

  //   console.log(history);
  return (
    (sP && props.child.gamemode.mode === 'select' && (
      <Link to="/gamemode">
        <button onClick={singled}>Goback to Menu</button>
        <Route path="/gamemode" component={GamemodeButton} />
      </Link>
    )) ||
    (!sP && props.child.gamemode.mode == 'single' && (
      <Link to="/gamemode/single">
        <div>
          <button>Multiplayer</button>
          <button onClick={singled}>Single Player</button>
          <Route path="/gamemode/single" component={GamemodeButton} />
        </div>
      </Link>
    )) ||
    (props.child.gamemode != null && props.child.gamemode.mode === 'single' && (
      <Route path="/gamemode/single" component={GamemodeButton} />
    ))
  );
};
export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(Gamemode);
// export default connect()(Gamemode);
