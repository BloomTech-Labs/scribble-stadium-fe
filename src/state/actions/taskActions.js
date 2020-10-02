export const SET_TASKS = 'SET_TASKS';
export const setTasks = taskData => dispatch => {
  dispatch({ type: SET_TASKS, payload: taskData });
};

export const SET_HAS_READ = 'SET_HAS_READ';
export const setHasRead = readData => dispatch => {
  dispatch({ type: SET_HAS_READ, payload: readData });
};

export const SET_HAS_WRITTEN = 'SET_HAS_WRITTEN';
export const setHasWritten = writeData => dispatch => {
  dispatch({ type: SET_HAS_WRITTEN, payload: writeData });
};

export const SET_HAS_DRAWN = 'SET_HAS_DRAWN';
export const setHasDrawn = drawData => dispatch => {
  dispatch({ type: SET_HAS_DRAWN, payload: drawData });
};
