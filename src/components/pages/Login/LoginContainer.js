import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginContainer = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button id="sign-in-btn" onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginContainer;
