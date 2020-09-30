import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { connect } from 'react-redux';

import RenderMissionControl from './RenderMissionControl';
import { tasks } from '../../../state/actions';

const MissionControlContainer = ({ LoadingComponent, ...props }) => {
  console.log(props);
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        if (isSubscribed) {
          setUserInfo(info);
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  const checkedToggle = e => {
    setChecked(!checked);
  };

  return (
    <>
      {authState.isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {authState.isAuthenticated && userInfo && (
        <RenderMissionControl
          {...props}
          userInfo={userInfo}
          authService={authService}
          checkedToggle={checkedToggle}
        />
      )}
    </>
  );
};

// export default connect(
//   state => ({
//     child: state.child,
//     tasks: state.tasks,
//   }),
//   {}
// )(MissionControlContainer);

export default connect(null, {
  setTasks: tasks.setTasks,
})(MissionControlContainer);

// export default MissionControlContainer;
