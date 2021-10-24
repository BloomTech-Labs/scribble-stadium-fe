import { getNewStories } from '../../api/index';

export const GET_NEW_STORIES = 'GET_NEW_STORIES';
export const getAllStories = () => dispatch => {
  getNewStories().then(res => {
    dispatch({ type: GET_NEW_STORIES, payload: res });
  });
};
