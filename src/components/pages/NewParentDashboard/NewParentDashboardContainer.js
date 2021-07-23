import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import RenderNewParentDashboard from './RenderNewParentDashboard';
import { connect } from 'react-redux';

function NewParentDashboardContainer({ LoadingComponent, ...props }) {
  const [userInfo, setUserInfo] = useState(null);
  // augment "oktaAuth" to behave like "authService"
  const { authState, oktaAuth } = useOktaAuth();
  oktaAuth.getUser = oktaAuth.token.getUserInfo;
  oktaAuth.logout = oktaAuth.signOut;
  oktaAuth.isAuthenticated = authState.isAuthenticated;
  const authService = oktaAuth;
  // end augmentation
  console.log(authState);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []); // memoize the augmented class

  useEffect(() => {
    let isSubscribed = memoAuthService.isAuthenticated;

    // ONBOARDING PHASE
    memoAuthService
      .getUser()
      .then(info => {
        console.log('THIS IS INFO', info);
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
        <RenderNewParentDashboard
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
    parent: state.parent,
  }),
  {}
)(NewParentDashboardContainer);
