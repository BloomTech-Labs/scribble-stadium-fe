import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';

import RenderMissionControl from './RenderMissionControl';
import { tasks } from '../../../state/actions';

const MissionControlContainer = ({ LoadingComponent, ...props }) => {
  const { user, isAuthenticated } = useAuth0();
  const [userInfo, setUserInfo] = useState(user);

  const [checked, setChecked] = useState(false);

  const checkedToggle = e => {
    setChecked(!checked);
  };

  return (
    <>
      {isAuthenticated && !userInfo && (
        <LoadingComponent message="Loading..." />
      )}
      {isAuthenticated && userInfo && (
        <RenderMissionControl
          {...props}
          userInfo={userInfo}
          checkedToggle={checkedToggle}
        />
      )}
    </>
  );
};

export default connect(
  state => ({
    tasks: state.tasks,
  }),
  {
    setTasks: tasks.setTasks,
    setSubmissionInformation: tasks.setSubmissionInformation,
  }
)(MissionControlContainer);
