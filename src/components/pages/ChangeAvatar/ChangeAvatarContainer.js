import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { connect } from 'react-redux';

import RenderChangeAvatar from './RenderChangeAvatar';

const ChangeAvatarContainer = ({ LoadingComponent, ...props }) => {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo] = useState(user);

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && (
        <RenderChangeAvatar {...props} userInfo={userInfo} />
      )}
    </>
  );
};

export default connect(
  state => ({
    child: state.child,
    tasks: state.tasks,
  }),
  {}
)(ChangeAvatarContainer);
