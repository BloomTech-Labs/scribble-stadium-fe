export const SET_SQUAD_ID = 'SET_SQUAD_ID';
export const seqSquadId = squadId => dispatch => {
    dispatch({ type: SET_SQUAD_ID, payload: squadId });
};

export const SET_TEAM_SUBMISSIONS = 'SET_TEAM_SUBMISSIONS';
export const setTeamSubmissions = teamInformation => dispatch => {
    dispatch({ type: SET_TEAM_SUBMISSIONS, payload: teamInformation });
};