import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import RenderDrawingSub from './RenderDrawingSub';
import { connect } from 'react-redux';

function DrawingSubContainer({ LoadingComponent, ...props }) {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo, setUserInfo] = useState(user);

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && (
        <RenderDrawingSub {...props} userInfo={userInfo} />
      )}
    </>
  );
}

export default connect(
  state => ({
    parent: state.parent,
  }),
  {}
)(DrawingSubContainer);
