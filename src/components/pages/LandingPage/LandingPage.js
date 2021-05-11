import React from 'react';
import { LoginContainer } from '../Login';
import { Header } from '../../common';

const LandingPage = () => {
  return (
    <>
      <Header displayMenu={false} />
      <div>
        <LoginContainer />
      </div>
    </>
  );
};

export default LandingPage;
