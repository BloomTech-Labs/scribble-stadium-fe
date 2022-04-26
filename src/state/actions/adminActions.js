export const FETCH_STORIES = 'FETCH_STORIES';
export const UPDATE_STORY_STATUS = 'UPDATE_STORY_STATUS';

export const fetchStories = () => dispatch => {
  dispatch({ type: FETCH_STORIES });
};

export const updateStories = updatedStories => dispatch => {
  dispatch({ type: UPDATE_STORY_STATUS, payload: updatedStories });
};
