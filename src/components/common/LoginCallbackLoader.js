// istanbul ignore file
import { LoginCallback } from '@okta/okta-react';
import React from 'react';
// import { oktaAuth } from '../../utils/oktaConfig';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import { ChildLoadingComponent } from './';

// https://github.com/okta/okta-oidc-js/issues/922

const LoginCallbackLoader = props => {
  console.log('[CALLBACK FROM OKTA]\n', props);
  // const oktaJWT = props.location.search.split('code=').pop();
  // console.log(oktaJWT);

  return (
    <>
      <ChildLoadingComponent message="Logging in..." />
      <LoginCallback {...props} />
    </>
  );
};

export default LoginCallbackLoader;
