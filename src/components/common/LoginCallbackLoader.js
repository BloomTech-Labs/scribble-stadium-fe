// istanbul ignore file
import { LoginCallback } from '@okta/okta-react';
import React from 'react';
import { ChildLoadingComponent } from './';

const LoginCallbackLoader = props => {
  return (
    <>
      <ChildLoadingComponent message="Logging in..." />
      <LoginCallback {...props} />
    </>
  );
};

export default LoginCallbackLoader;
