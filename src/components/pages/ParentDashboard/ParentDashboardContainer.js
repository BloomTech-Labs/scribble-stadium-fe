import React, { useState, useEffect, useMemo } from 'react';
import { useAuth0 } from '@auth0/auth0-react'; //replaces useOtkaAuth
import RenderParentDashboard from './RenderParentDashboard';
import { connect } from 'react-redux';

function ParentDashboardContainer({ LoadingComponent, ...props }) {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo, setUserInfo] = useState(null);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [user], []);

  /* do we need code below since auth0 has built-in isAuthenticated and user info hook? */

  /* useEffect(() => {
    let isAuthenticated = true;

    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        if (isAuthenticated) {
          setUserInfo(info);
        }
      })
      .catch(err => {
        // isSubscribed = false;
        setUserInfo(null);
      });
    return () => (isAuthenticated = false);
  }, [memoAuthService]); */

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && (
        <RenderParentDashboard {...props} userInfo={userInfo} user={user} />
      )}
    </>
  );
}

export default connect(
  state => ({
    parent: state.parent,
  }),
  {}
)(ParentDashboardContainer);
