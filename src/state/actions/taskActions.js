export const SET_TASKS = 'SET_TASKS';
export const setTasks = taskData => dispatch => {
  dispatch({ type: SET_TASKS, payload: taskData });
};

export const SET_HAS_READ = 'SET_HAS_READ';
export const setHasRead = () => dispatch => {
  dispatch({ type: SET_HAS_READ });
};

export const SET_HAS_WRITTEN = 'SET_HAS_WRITTEN';
export const setHasWritten = () => dispatch => {
  dispatch({ type: SET_HAS_WRITTEN });
};

export const SET_HAS_DRAWN = 'SET_HAS_DRAWN';
export const setHasDrawn = () => dispatch => {
  dispatch({ type: SET_HAS_DRAWN });
};
