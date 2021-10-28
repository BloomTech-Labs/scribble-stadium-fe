import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import RenderNextSteps from './RenderNextSteps';

const NextStepsContainer = ({ LoadingComponent, ...props }) => {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo] = useState(user);

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && (
        <RenderNextSteps {...props} userInfo={userInfo} />
      )}
    </>
  );
};

export default connect(
  state => ({
    child: state.child,
    tasks: state.tasks,
  }),
  {}
)(NextStepsContainer);
