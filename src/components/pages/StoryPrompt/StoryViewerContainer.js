import React, { useState } from 'react';
import RenderStoryViewer from './RenderStoryViewer';
import { useAuth0 } from '@auth0/auth0-react';

const StoryViewerContainer = ({ LoadingComponent }) => {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo, setUserInfo] = useState(user);

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && <RenderStoryViewer userInfo={userInfo} />}
    </>
  );
};

export default StoryViewerContainer;
