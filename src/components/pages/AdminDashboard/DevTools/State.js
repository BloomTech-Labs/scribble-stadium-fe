import React from 'react';
import { connect } from 'react-redux';

import { tasks } from '../../../../state/actions/index';

const State = ({ tasks, setTasks }) => {
  return <div></div>;
};

export default connect(
  state => ({
    tasks: state.setTasks,
    hasRead: state.hasRead,
    hasWritten: state.hasWritten,
    hasDrawn: state.hasDrawn,
  }),
  {
    setTasks: tasks.setTasks,
    setHasRead: tasks.setHasRead,
    setHasWritten: tasks.setHasWritten,
    setHasDrawn: tasks.setHasDrawn,
  }
)(State);
