export const FETCH_STORIES = 'FETCH_STORIES';
export const UPDATE_STORY_STATUS = 'UPDATE_STORY_STATUS';

export const fetchStories = () => dispatch => {
  dispatch({ type: FETCH_STORIES });
};

/*
 - Called in StoryDetails component when "Approve" or "Reject" button is clicked
 - When called it gets an updated array of stories as an argument, that reflects 
   the "currentStatus" change on a specific object 
*/
export const updateStories = updatedStories => dispatch => {
  dispatch({ type: UPDATE_STORY_STATUS, payload: updatedStories });
};
