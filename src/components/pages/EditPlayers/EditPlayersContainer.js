import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

import RenderEditPlayers from './RenderEditPlayers';
import { parent } from '../../../state/actions';

function EditPlayersContainer({ LoadingComponent, ...props }) {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo, setUserInfo] = useState(user);

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && (
        <RenderEditPlayers {...props} userInfo={userInfo} />
      )}
    </>
  );
}

export default connect(
  state => ({
    parent: state.parent,
  }),
  {
    updateChild: parent.updateChild,
    removeChild: parent.removeChild,
  }
)(EditPlayersContainer);
