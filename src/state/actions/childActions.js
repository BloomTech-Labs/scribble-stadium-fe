import axios from 'axios';

const getTimeStamp = () => {
  return new Date().toISOString().replace('Z', '').replace('T', ' ');
};

const connectionString = 'https://localhost/api/child/1/submissions';

export const SET_CHILD = 'SET_CHILD';
export const setChild = childData => dispatch => {
  /*  */
  dispatch({ type: SET_CHILD, payload: childData });
};

export const SET_MEMBER_ID = 'SET_MEMBER_ID';
export const setMemberId = memberId => dispatch => {
  dispatch({ type: SET_MEMBER_ID, payload: memberId });
};

export const FETCH_DATA = 'FETCH_DATA';
export function gameSession() {
  return dispatch => {
    axios.get(connectionString).then(res => {
      dispatch({ type: FETCH_DATA, payload: res.data });
    });
  };
}
