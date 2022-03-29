import React, { useEffect } from 'react';

import { Header } from '../../common';
import ChildFooter from '../../common/ChildFooter';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { gameSession } from '../../../state/actions/childActions';
import { useHistory } from 'react-router-dom';

const Gamemode = ({ ...props }) => {
  const { push, location } = useHistory();
  console.log(props);

  useEffect(() => {
    gameSession();
  }, []);

  const reini = () => {
    // For basic prop initiation
    const ggm = {
      mode: 'select',
      read: false,
      write: false,
      draw: false,
      sp: false,
    };
    props.child.gamemode = ggm;
  };

  const startSinglePlayerMode = e => {
    e.preventDefault();
    push('/gameplay/mission/read');
  };

  return (
    <div>
      {props.child.gamemode === null ? (
        reini()
      ) : (
        <div className="dash-container">
          <Header displayMenu={true} />
          <div className="single-button-container">
            <Button className="single-btn" onClick={startSinglePlayerMode}>
              Single Player
            </Button>
            <Button
              className="multi-btn"
              onClick={
                startSinglePlayerMode
              } /* multiplayer mode is not created yet, will need to change onClick event*/
            >
              Multiplayer
            </Button>
          </div>
        </div>
      )}
      <ChildFooter layoutContainerCheck={'no-scroll'} />
    </div>
  );
};
export default connect(
  state => ({
    child: state.child,
  }),
  { gameSession }
)(Gamemode);
