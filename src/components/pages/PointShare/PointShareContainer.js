
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import PointShare from './RenderPointShare';

const PointShareContainer = ({ LoadingComponent }) => {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo, setUserInfo] = useState(user);

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && <PointShare userInfo={userInfo} />}
    </>
  );
};

export default PointShareContainer;
