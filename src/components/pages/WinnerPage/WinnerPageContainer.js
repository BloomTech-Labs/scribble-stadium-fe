import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import RenderWinnerPage from './RenderWinnerPage';

const WinnerPageContainer = ({ LoadingComponent, ...props }) => {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo] = useState(user);

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && (
        <RenderWinnerPage {...props} userInfo={userInfo} />
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
)(WinnerPageContainer);
