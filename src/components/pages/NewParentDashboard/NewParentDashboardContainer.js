import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import RenderNewParentDashboard from './RenderNewParentDashboard';
import { connect } from 'react-redux';

function NewParentDashboardContainer({ LoadingComponent, ...props }) {
  const { user, isAuthenticated, getIdTokenClaims } = useAuth0();
  const [userInfo, setUserInfo] = useState();

  if (isAuthenticated && !userInfo) {
    getIdTokenClaims().then(res => {
      localStorage.setItem('idToken', res.__raw);
      localStorage.setItem('isAuthenticated', isAuthenticated);
      setUserInfo(user);
    });
  }

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Fetching Parent Profile..." />
      )}
      {isAuthenticated && userInfo && (
        <RenderNewParentDashboard {...props} userInfo={userInfo} />
      )}
    </>
  );
}

export default connect(
  state => ({
    parent: state.parent,
  }),
  {}
)(NewParentDashboardContainer);
