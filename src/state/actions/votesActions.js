export const SET_VOTES = 'SET_VOTES';
export const setVotes = faceoffs => dispatch => {
  dispatch({ type: SET_VOTES, payload: faceoffs });
};
