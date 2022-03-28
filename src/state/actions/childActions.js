import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

const getTimeStamp = () => {
  return new Date().toISOString().replace('Z', '').replace('T', ' ');
};

const connectionString = 'https://localhost/api/child/1/submissions';

mock.onGet(connectionString).reply(200, {
  ChildID: 1,
  StoryID: 1,
  EpisodeID: 1,
  episodeStartDate: '2021-01-03',
  // moderationStatus replaced Status in previous seed
  moderationStatus: 'PENDING',
  startedReadingAt: `${getTimeStamp()}` + 60000,
  finishedReadingAt: `${getTimeStamp()}` + 15 * 60000,
  complexity: 30,
  lowConfidence: false,
  gameMode: 'SINGLE_PLAYER',
  // Timestamps for createdAt, and updatedAt to capture data of when activity was last seen
  createdAt: `${getTimeStamp()}`,
  updatedAt: `${getTimeStamp()}`,
});

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
    axios
      .get('https://swapi.dev/api/people/1')
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_DATA, payload: res.data });
      })
      .catch(() => {
        console.log('Error');
      });
  };
}
