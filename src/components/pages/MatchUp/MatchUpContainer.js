import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import RenderMatchUp from './RenderMatchUp';
import { connect } from 'react-redux';

import { squad, child } from '../../../state/actions';
import { getChildSquad, getChildFaceoffs } from '../../../api';

function MatchUpContainer({ LoadingComponent, ...props }) {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);
  // const [faceoffs, setFaceoffs] = useState(null);


  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
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

  useEffect(() => {
    getChildSquad(authState, props.child.id).then(squad => {
      getChildFaceoffs(authState, squad.ID).then(allFaceoffs => {
        props.setMemberId(squad);
        props.setSquadFaceoffs(allFaceoffs);
      });
    });
  // eslint-disable-next-line
  }, [authState]);

   return (
    <>
      {authState.isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {authState.isAuthenticated && userInfo && props.squad && (
        <RenderMatchUp
          {...props}
          userInfo={userInfo}
          authService={authService}
        />
      )}
    </>
  );
}

export default connect(
  state => ({
    child: state.child,
    squad: state.squad,
  }),
  {
    setSquadFaceoffs: squad.setSquadFaceoffs,
    setMemberId: child.setMemberId,
  }
)(MatchUpContainer);
