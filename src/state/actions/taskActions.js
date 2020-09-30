export const SET_TASKS = 'SET_TAASKS';
export const setTasks = taskData => dispatch => {
  dispatch({ type: SET_TASKS, payload: taskData });
};
