import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';

import RenderJoinTheSquad from './RenderJoinTheSquad';
import { team } from '../../../state/actions';

const JoinTheSquadContainer = ({ LoadingComponent, ...props }) => {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo, setUserInfo] = useState(user);

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && (
        <RenderJoinTheSquad {...props} userInfo={userInfo} />
      )}
    </>
  );
};

export default connect(
  state => ({
    child: state.child,
    team: state.team,
  }),
  {
    setTeamSubmissions: team.setTeamSubmissions,
  }
)(JoinTheSquadContainer);
