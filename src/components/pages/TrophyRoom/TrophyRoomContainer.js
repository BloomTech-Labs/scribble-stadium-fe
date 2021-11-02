import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';

import RenderTrophyRoom from './RenderTrophyRoom';

const TrophyRoomContainer = ({ LoadingComponent, ...props }) => {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo, setUserInfo] = useState(user);

  return (
    <>
      {isAuthenticated && !userInfo && (
        <div style={{ textAlign: 'center' }}>
          <h2>Awaiting Auth Data Holder. Page Rendering</h2>
        </div>

        // <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && (
        <RenderTrophyRoom
          {...props}
          userInfo={userInfo}
          // Currently not used. Will be used in the future
          //authService={authService}
        />
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
)(TrophyRoomContainer);
