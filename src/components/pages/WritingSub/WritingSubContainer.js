import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import RenderWritingSub from './RenderWritingSub';

function WritingSubContainer({ LoadingComponent, ...props }) {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo, setUserInfo] = useState(user);

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && (
        <RenderWritingSub {...props} userInfo={userInfo} />
      )}
    </>
  );
}

export default WritingSubContainer;
