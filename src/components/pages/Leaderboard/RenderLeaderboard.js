import React from 'react';
import { Header } from '../../common';
import ChildFooter from '../../common/ChildFooter';
import Leaderboard from './Leaderboard';

import { connect } from 'react-redux';

import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
//import { child } from '../../../state/actions'; <-- not in use yet in this component, uncomment while need it

const RenderLeaderboard = props => {
  const { push } = useHistory();

  const dashboard = () => {
    push('/dashboard');
  };

  return (
    <>
      <Header displayMenu={true} title="Scribble Stadium" />
      <div className="trophy-container" style={{ marginTop: '1rem' }}>
        <br />
        <Button className="back-to-dashboard-btn" onClick={dashboard}>
          Back to Dashboard
        </Button>
        <br />
        <Leaderboard child={props.child} />
        <div className="custom-divider"></div>
        <br />
      </div>
      <div>
        {' '}
        <ChildFooter />
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
