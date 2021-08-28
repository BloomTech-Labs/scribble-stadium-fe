import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { connect } from 'react-redux';
import { child, parent } from '../../../state/actions';

import ProfileRenderModal from './ProfileRenderModal';

function ProfileModalContainer({ LoadingComponent, ...props }) {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo, setUserInfo] = useState(user);

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && (
        <ProfileRenderModal
          {...props}
          userInfo={userInfo}
          authService={authService}
        />
      )}
    </>
  );
}

export default connect(null, {
  setChild: child.setChild,
  setParent: parent.setParent,
})(ProfileModalContainer);
