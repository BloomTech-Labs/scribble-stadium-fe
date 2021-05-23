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
    if (props.child.gamemode.read !== null) {
      props.child.gamemode = {
        mode: 'single',
        read: rwd.read,
        write: null,
        draw: null,
        sp: true,
      };
    } else {
      props.child.gamemode = {
        mode: props.child.gamemode.mode,
        read: rwd.read,
        write: false,
        draw: false,
        sp: false,
      };
    }
  };

  useEffect(() => {
    propInit();
  }, [rwd]);

  const sread = () => {
    setsRwd({ read: true, write: false, draw: false });
    singled();
  };
  const singled = () => {
    props.child.gamemode = {
      mode: 'single',
      read: rwd.read,
      write: rwd.write,
      draw: rwd.draw,
      sp: true,
    };
    // push('/gamemode/single');
    // push('/gamemode/single');
    console.log('nal else ', props.child);
  };
  // const forceUpdateHandler = () => {
  //   this.forceUpdate();
  // };

  //   console.log(history);

  //   console.log(history);
  return (
    <>
      <div>
        <button onClick={sread}>Read</button>
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
