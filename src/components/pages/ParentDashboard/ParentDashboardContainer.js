import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import RenderParentDashboard from './RenderParentDashboard';
import { connect } from 'react-redux';

function ParentDashboardContainer({ LoadingComponent, ...props }) {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && !user && <LoadingComponent message="Loading..." />}
      {isAuthenticated && user && (
        <RenderParentDashboard {...props} user={user} />
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
