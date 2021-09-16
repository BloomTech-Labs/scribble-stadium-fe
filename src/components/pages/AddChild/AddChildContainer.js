import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';

import RenderAddChild from './RenderAddChild';
import { parent } from '../../../state/actions';

function AddChildContainer({ LoadingComponent, ...props }) {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo, setUserInfo] = useState(user);

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && (
        <RenderAddChild {...props} userInfo={userInfo} />
      )}
    </>
  );
}

// export default AddChildContainer;
export default connect(
  state => ({
    parent: state.parent,
  }),
  {
    setChildren: parent.setChildren,
  }
)(AddChildContainer);
