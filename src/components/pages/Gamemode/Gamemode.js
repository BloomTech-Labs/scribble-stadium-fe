import React, { useEffect } from 'react';
// import history from './history';
import { connect } from 'react-redux';
import { tasks } from '../../../state/actions';
import { useHistory } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import GamemodeButton from './GamemodeButton';

import { render } from 'react-dom';

const Gamemode = ({ ...props }) => {
  const { push, location } = useHistory();
  // const [sP, setsP] = useState(false);
  //   history.push('/gamemode/single');

  //   useEffect(() => {

  //     ff();
  //   }, []);

  // const singled = () => {
  //   if (location.pathname === '/gamemode/single' && sP === true) {
  //     push('/gamemode');
  //     setsP(false);
  //     console.log('nal', this.state.hasRead);
  //   } else if (location.pathname === '/gamemode' && sP === false) {
  //     push('/gamemode/single');
  //     setsP(true);
  //   }
  // };

  //   console.log(history);
  const clicker = () => {
    props.child.gamemode = {
      mode: 'single',
      read: null,
      write: null,
      draw: null,
    };
    console.log(props.child);
  };
  return (
    <div>
      <button onClick={clicker}>hi</button>
    </div>
  );
};
export default connect(
  state => ({
    child: state.child,
    faceoffs: state.faceoffs,
    votes: state.votes,
  }),
  {}
)(Gamemode);
// export default connect()(Gamemode);
