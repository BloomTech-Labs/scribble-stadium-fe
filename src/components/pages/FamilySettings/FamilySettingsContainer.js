import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import RenderFamilySettings from './RenderFamilySettings';

function FamilySettingsContainer({ LoadingComponent }) {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo, setUserInfo] = useState(user);

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && (
        <RenderFamilySettings userInfo={userInfo} />
      )}
    </>
  );
}

export default FamilySettingsContainer;
