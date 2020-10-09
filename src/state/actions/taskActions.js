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

export const SET_WRITING_PROMPT = 'SET_WRITING_PROMPT';
export const setWritingPrompt = promptData => dispatch => {
  dispatch({ type: SET_WRITING_PROMPT, payload: promptData });
};

export const SET_DRAWING_PROMPT = 'SET_DRAWING_PROMPT';
export const setDrawingPrompt = promptData => dispatch => {
  dispatch({ type: SET_DRAWING_PROMPT, payload: promptData });
};
