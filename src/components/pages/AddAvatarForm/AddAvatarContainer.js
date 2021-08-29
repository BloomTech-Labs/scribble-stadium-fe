import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import RenderAddAvatar from './RenderAddAvatar';

const AddAvatarContainer = ({ LoadingComponent }) => {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo, setUserInfo] = useState(user);

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && <RenderAddAvatar userInfo={userInfo} />}
    </>
  );
};

export default AddAvatarContainer;
