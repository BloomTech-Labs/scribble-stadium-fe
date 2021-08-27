import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import RenderParentDashboard from './RenderParentDashboard';
import { connect } from 'react-redux';

function ParentDashboardContainer({ LoadingComponent, ...props }) {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo, setUserInfo] = useState(user);

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && (
        <RenderParentDashboard {...props} userInfo={userInfo} />
      )}
    </>
  );
}

export default connect(
  state => ({
    parent: state.parent,
  }),
  {}
)(ParentDashboardContainer);
