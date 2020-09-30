import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import { connect } from 'react-redux';

import RenderChildDashboard from './RenderChildDashboard';
import { tasks, child } from '../../../state/actions';

const ChildDashboardContainer = ({ LoadingComponent, ...props }) => {
  console.log(props, 'from container');
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
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

  return (
    <>
      {authState.isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {authState.isAuthenticated && userInfo && (
        <RenderChildDashboard
          {...props}
          userInfo={userInfo}
          authService={authService}
        />
      )}
    </>
  );
};

export default connect(
  state => ({
    child: state.child,
    // tasks: state.tasks,
  }),
  {
    setTasks: tasks.setTasks,
  }
)(ChildDashboardContainer);

// export default connect(null, {
//   setTasks: tasks.setTasks,
// })(ChildDashboardContainer);

// export default ChildDashboardContainer;
