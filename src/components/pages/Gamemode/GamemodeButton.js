import React, { useState, useEffect } from 'react';
// import history from './history';
import { connect } from 'react-redux';
import { tasks } from '../../../state/actions';
import { useHistory } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';

import { render } from 'react-dom';

const GamemodeButton = ({ ...props }) => {
  const { push, location } = useHistory();
  const [rwd, setsRwd] = useState({
    read: false,
    write: false,
    draw: false,
  });
  //   history.push('/gamemode/single');
  const propInit = () => {
    props.child.gamemode = {
      mode: props.child.gamemode.mode,
      read: false,
      write: false,
      draw: false,
    };
  };

  useEffect(() => {
    propInit();
  }, []);

  const sread = () => {
    setsRwd({ read: true, write: false, draw: false });
    singled();
  };
  const singled = () => {
    if (location.pathname === '/gamemode/single') {
      props.child.gamemode = {
        mode: 'single',
        read: rwd.read,
        write: rwd.write,
        draw: rwd.draw,
      };
      push('/gamemode/single');
      console.log('nal', props.child);
    } else if (
      (location.pathname === '/gamemode' && setsRwd.read == true) ||
      setsRwd.write ||
      setsRwd.draw
    ) {
      props.child.gamemode = {
        mode: 'single',
        read: rwd.read,
        write: rwd.write,
        draw: rwd.draw,
      };
      push('/gamemode/single');
      console.log('nal else ', props.child);
    } else {
      push('gamemode/single');
    }
  };

  //   console.log(history);

  //   console.log(history);
  return (
    <>
      <div>
        <Link to="/gamemode/single">
          <button onClick={sread}>Read</button>
          <Route path="/gamemode/single" component={GamemodeButton} />
        </Link>
      </div>
      <div>
        <button>Write</button>
      </div>
      <div>
        <button>Draw</button>
      </div>
    </>
  );
};
export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(GamemodeButton);
// export default connect()(Gamemode);
