import React, { useState, useEffect } from 'react';
// import history from './history';
import { connect } from 'react-redux';
import { tasks } from '../../../state/actions';
import { useHistory } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';

import { render } from 'react-dom';

const GamemodeButton = ({ ...props }) => {
  const { push, location } = useHistory();
  const [rwd, setsRwd] = useState({ read: false, write: false, draw: false });
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

  const singled = () => {
    if (location.pathname === '/gamemode/single') {
      props.child.gamemode = {
        mode: 'select',
        read: null,
        write: null,
        draw: null,
      };

      console.log('nal', props.child);
    } else {
      props.child.gamemode = {
        mode: 'single',
        read: false,
        write: false,
        draw: false,
      };
      console.log('nal else ', props.child);
    }
  };

  //   console.log(history);

  //   console.log(history);
  return (
    <>
      <div>
        <button>Read</button>
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
