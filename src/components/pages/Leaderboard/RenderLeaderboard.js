import React, { useState } from 'react';
import { Header } from '../../common';
import Leaderboard from './Leaderboard';

import { connect } from 'react-redux';

import { Divider, Button, Modal } from 'antd';
import { useHistory } from 'react-router-dom';
import { child } from '../../../state/actions';

const RenderLeaderboard = props => {
  const { push } = useHistory();

  const dashboard = () => {
    push('/child/dashboard');
  };

  return (
    <>
      <Header displayMenu={true} title="Story Squad" />
      <Button style={{ margin: '1rem' }} onClick={dashboard}>
        Back to Child Dashboard
      </Button>
      <div className="trophy-container">
        <Leaderboard child={props.child} />
        <div className="custom-divider"></div>
      </div>
    </>
  );
};

export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(RenderLeaderboard);
