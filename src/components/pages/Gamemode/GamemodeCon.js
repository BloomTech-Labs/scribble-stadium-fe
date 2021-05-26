import React, { useState, useEffect } from 'react';
// import history from './history';

import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { tasks } from '../../../state/actions';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import GamemodeButton from './GamemodeButton';
import Gamemode from './Gamemode';
import { render } from 'react-dom';

const GamemodeCon = ({ ...props }) => {
  const { push, location } = useHistory();
  const [sP, setsP] = useState(false);
  //   history.push('/gamemode/single');

  useEffect(() => {
    const propInit = () => {
      if (props.child.gamemode !== null && location.pathname === '/gamemode') {
        props.child.gamemode = {
          mode: 'select',
          read: props.child.gamemode.read,
          write: props.child.gamemode.write,
          draw: props.child.gamemode.draw,
          sp: false,
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
    propInit();
  }, [props, location]);

  const singled = () => {
    if (location.pathname === '/gamemode/single' && sP === true) {
      push('/gamemode');
      props.child.gamemode = {
        mode: 'select',
        read: null,
        write: null,
        draw: null,
        sp: false,
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
        sp: true,
      };
      console.log('nal elif', props.child);
      setsP(true);
    }
  };

  /*
(sP && props.child.gamemode.mode === 'select' && (
      <Link to="/gamemode">
        <div>
          <button onClick={singled}>Goback to Menu</button>
          <Route path="/gamemode" component={GamemodeButton} />
        </div>
      </Link>
    )) ||
  */

  //   console.log(history);
  return (
    <>
      <div>
        <h1>Boss</h1>
      </div>
    </>
  );
};
export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(GamemodeCon);
// export default connect()(Gamemode);
