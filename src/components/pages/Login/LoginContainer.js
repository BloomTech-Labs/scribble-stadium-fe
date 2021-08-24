import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginContainer = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={() => loginWithRedirect()} style={{ marginRight: '.5em' }}>
      Log In
    </button>
  );
};

export default LoginContainer;
