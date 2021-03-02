//This file does not seem to be used anywhere. A matching file named faceoffsActions contains the same info and appears to be used.

export const SET_SQUAD_FACEOFFS = 'SET_SQUAD_FACEOFFS';
export const setSquadFaceoffs = squadInformation => dispatch => {
  dispatch({ type: SET_SQUAD_FACEOFFS, payload: squadInformation });
};
