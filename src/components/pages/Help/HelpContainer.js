import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Help from './Help';

function HelpContainer({ LoadingComponent }) {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo, setUserInfo] = useState(user);

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && <Help userInfo={userInfo} />}
    </>
  );
}

export default HelpContainer;
