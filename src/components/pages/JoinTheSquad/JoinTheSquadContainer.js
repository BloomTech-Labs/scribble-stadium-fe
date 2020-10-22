import React, { useState, useEffect, useMemo } from 'react'; 
import { useOktaAuth } from '@okta/okta-react';
import { connect } from 'react-redux';

import RenderJoinTheSquad from './RenderJoinTheSquad';
import {team} from '../../../state/actions';

const JoinTheSquadContainer = ({ LoadingComponent, ...props }) => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        if (isSubscribed) {
          setUserInfo(info);
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  return (
    <>
      {authState.isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {authState.isAuthenticated && userInfo && (
        <RenderJoinTheSquad
          {...props}
          userInfo={userInfo}
          authService={authService}
        />
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
