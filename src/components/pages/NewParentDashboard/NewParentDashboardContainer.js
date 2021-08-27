import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import RenderNewParentDashboard from './RenderNewParentDashboard';
import { connect } from 'react-redux';

function NewParentDashboardContainer({ LoadingComponent, ...props }) {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && !user && <LoadingComponent message="Loading..." />}
      {isAuthenticated && user && (
        <RenderNewParentDashboard {...props} user={user} />
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
