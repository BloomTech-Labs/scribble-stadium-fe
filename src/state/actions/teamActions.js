export const SET_TEAM_SUBMISSIONS = 'SET_TEAM_SUBMISSIONS';
export const setTeamSubmissions = teamInformation => dispatch => {
  dispatch({ type: SET_TEAM_SUBMISSIONS, payload: teamInformation });
};
