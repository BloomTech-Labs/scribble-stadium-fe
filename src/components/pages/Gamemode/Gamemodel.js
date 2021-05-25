import React, { useState, useEffect } from 'react';
// import history from './history';
import { Header } from '../../common';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { tasks } from '../../../state/actions';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import GamemodeBtnl from './GamemodeBtnl';
import GamemodeCon from './GamemodeCon';
import render from 'react-dom';

const Gamemodel = ({ ...props }) => {
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
          sp: null,
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
  const trig = () => {
    return (
      <div>
        <button onClick={singled}>Success Player</button>
        <Route path="/gamemode/single" {...props} component={GamemodeBtnl} />
      </div>
    );
  };
  const reini = () => {
    props.child.gamemode.mode = 'select';
    props.child.gamemode.sp = false;
    props.child.gamemode.read = false;
    props.child.gamemode.write = false;
    props.child.gamemode.draw = false;
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
    // (props.child.gamemode !== null &&
    //   props.child.gamemode.mode === 'select' && (
    //     <Route path="/gamemode" component={Gamemode} />
    //   ))||

    // (props.child.gamemode.mode.sp === false && props.child.gamemode.mode === 'select' && (
    //   <Link to="/gamemode">
    //     <div>
    //       <button onClick={singled}>Goback to Menu</button>
    //       <Route path="/gamemode" component={<Gamemode {...props}/>} />
    //     </div>
    //   </Link>
    // )) ||
    <Switch>
      <Router>
        <>
          <Header />
          {trig()}
        </>
      </Router>
    </Switch>
  );
};
export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(Gamemodel);
// export default connect()(Gamemode);
