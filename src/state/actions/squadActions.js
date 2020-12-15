export const SET_SQUAD_FACEOFFS = 'SET_SQUAD_FACEOFFS';
export const setSquadFaceoffs = squadInformation => dispatch => {
  dispatch({ type: SET_SQUAD_FACEOFFS, payload: squadInformation });
};
