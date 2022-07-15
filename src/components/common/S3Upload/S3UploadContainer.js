import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';

import RenderS3Upload from './RenderS3Upload';

function S3UploadContainer({ LoadingComponent, ...props }) {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo] = useState(user);

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && (
        <RenderS3Upload {...props} userInfo={userInfo} />
      )}
    </>
  );
}

// export default AddChildContainer;
export default connect()(S3UploadContainer);
