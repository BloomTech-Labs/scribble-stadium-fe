import { getStory } from '../../api/index';

export const GET_NEW_STORIES = 'GET_NEW_STORIES';
export const getNewStories = storyId => dispatch => {
  getStory(storyId).then(res =>
    dispatch({ type: GET_NEW_STORIES, payload: res.data }).catch(err =>
      console.log(err)
    )
  );
};
