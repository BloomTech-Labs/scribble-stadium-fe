export const SET_TASKS = 'SET_TASKS';
export const setTasks = taskData => dispatch => {
  dispatch({ type: SET_TASKS, payload: taskData });
};

export const SET_HAS_READ = 'SET_HAS_READ';
export const setHasRead = readData => dispatch => {
  dispatch({ type: SET_HAS_READ, payload: readData });
};
