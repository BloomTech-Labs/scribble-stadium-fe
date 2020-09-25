import { LoginCallback } from '@okta/okta-react';
import React from 'react';
import { ChildLoadingComponent } from './';

const LoginCallbackLoader = () => {
  return (
    <>
      <ChildLoadingComponent message="Logging in..." />
      <LoginCallback />
    </>
  );
};

export default LoginCallbackLoader;
