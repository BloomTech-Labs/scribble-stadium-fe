// istanbul ignore file
import axios from 'axios';

import { store } from '../state/index';

/**
 * This function dynamically returns an API URL depending on NODE_ENV and state
 * State was used (as opposed to localStorage) so that UI can listen and change on devMode state toggle
 * Nearly every API call utilizes this function through using apiAuthGet/apiAuthPost/apiAuthPut.
 */
function getApiUrl() {
  // on function call, grabs current redux state to check devMode status
  const state = store.getState();
  const devMode = state.devMode.isDevModeActive;
  let apiUrl = process.env.REACT_APP_API_URI;
  /**
   * apiUrl variable was initialized under the impression that REACT_APP_API_URI=localDB in 'development' and is productionDB in 'production'
   * If this is not the case in the future, this logic will need to change slightly.
   */
  if (devMode && process.env.NODE_ENV === 'production') {
    // if env = production and devMode active, use dev/staging DB, if env = production and devMode false, use production DB
    apiUrl = process.env.REACT_APP_DEV_MODE_DATABASE_ENDPOINT;
  }
  // note that if environment is development then apiUrl should be the local db (not production or dev/staging DB)
  return apiUrl;
}

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(response => response.data);
};

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
};

const getDSData = (url, authState) => {
  // here's another way you can compose together your API calls.
  // Note the use of GetAuthHeader here is a little different than in the getProfileData call.
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url, { headers })
    .then(res => JSON.parse(res.data))
    .catch(err => err);
};

const apiAuthGet = (endpoint, authHeader) => {
  return axios.get(`${getApiUrl()}${endpoint}`, { headers: authHeader });
};
const apiAuthPost = (endpoint, body, authHeader) => {
  return axios.post(`${getApiUrl()}${endpoint}`, body, { headers: authHeader });
};
const apiAuthPut = (endpoint, body, authHeader) => {
  return axios.put(`${getApiUrl()}${endpoint}`, body, { headers: authHeader });
};

const getProfileData = authState => {
  try {
    return apiAuthGet('/profiles', getAuthHeader(authState)).then(response => {
      console.log(response);
      return response.data;
    });
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};
// Getting data for leaderboard

const getLeaderboard = authState => {
  try {
    return apiAuthGet('/leaderboard', getAuthHeader(authState)).then(
      response => {
        return response.data;
      }
    );
  } catch (err) {
    return new Promise(() => {
      console.log(err);
      return [];
    });
  }
};

// Parent API Calls

/**
 * @param {Object} authState necessary for API functionality
 * @param {number} childId id of the child needed for information
 * @return {Object} child information containing Name, PIN, IsDyslexic, CohortID, ParentID, AvatarID, and GradeLevelID
 */
const getChild = (authState, childId) => {
  try {
    return apiAuthGet(`/child/${childId}`, getAuthHeader(authState)).then(
      response => {
        return response.data;
      }
    );
  } catch (error) {
    return new Promise(() => {
      console.log(error);
    });
  }
};

/**
 * @param {Object} authState necessary for API functionality
 * @param {Object} body child data
 * @param {number} childId id of the child needed for information
 * @return {Object} child information containing Name, PIN, IsDyslexic, CohortID, ParentID, AvatarID, and GradeLevelID
 */
const updateChildData = (authState, body, childId) => {
  console.log(body);
  try {
    return apiAuthPut(`/child/${childId}`, body, getAuthHeader(authState)).then(
      response => {
        return response;
      }
    );
  } catch (error) {
    return new Promise(() => {
      console.log(error);
    });
  }
};

/**
 *
 * @param {Object} authState necessary for API functionality
 * @param {Object} child object containing fields for Name, PIN, IsDyslexic, CohortID, ParentID, AvatarID, and GradeLevelID
 * @returns {number} child id for child that was just created
 */
const postNewChild = (authState, child) => {
  try {
    return apiAuthPost('/child', child, getAuthHeader(authState)).then(
      response => {
        return response.data;
      }
    );
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

// Child API Calls

/**
 *
 * @param {Object} authState necessary for API functionality
 * @param {number} cohortId the cohort id of the respective child
 * @returns {Promise} a promise that resolves to an object containing {DrawingPrompt, ID, Title, URL, and WritingPrompt}
 */
const getStory = (authState, cohortId) => {
  try {
    return apiAuthGet(
      `/story?cohortId=${cohortId}`,
      getAuthHeader(authState)
    ).then(response => {
      return response.data;
    });
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

/**
 * Reads in gradelevels and avatars from the database to enforce referential integrity
 * @param {Object} authState necessary for API functionality
 * @returns {Promise} a promise that resolves to an array of [[avatars], [gradeLevels]]
 */
const getChildFormValues = async authState => {
  try {
    return Promise.all([
      apiAuthGet('/avatars', getAuthHeader(authState)),
      apiAuthGet('/gradelevels', getAuthHeader(authState)),
    ]).then(res => {
      return res.map(x => x.data);
    });
  } catch (err) {
    return new Promise(() => {
      console.log(err);
      return [];
    });
  }
};

/**
 *
 * @param {Object} authState
 * @param {Object} body formData
 * @param {number} subId id of the full submission
 * @returns {array} an array of submission objects containing the image url, the checksum, and the page number
 */
const postNewWritingSub = async (authState, body, subId) => {
  try {
    return apiAuthPost(
      `/submit/write/${subId}`,
      body,
      getAuthHeader(authState)
    ).then(res => res.data);
  } catch (err) {
    console.log(err);
    return [];
  }
};

/**
 *
 * @param {Object} authState
 * @param {Object} body formData
 * @param {number} subId id of the full submission
 * @returns {Object} submission object containing the image url, and the checksum
 */
const postNewDrawingSub = async (authState, body, subId) => {
  try {
    return apiAuthPost(
      `/submit/draw/${subId}`,
      body,
      getAuthHeader(authState)
    ).then(res => res.data);
  } catch (err) {
    console.log(err);
    return [];
  }
};

/**
 * Returns an object identifying whether or not a child has completed their submission tasks
 * Looks in DB for submission containing childId and storyID
 *    if said submission exists, returns all submission data (id, childId, storyId, hasRead, hasDrawn, hasWritten, etc.)
 * @param {Object} authState
 * @param {number} childid id of whatever child is performing the tasks
 * @param {number} storyid id of the story of the week
 * @returns {Object} Object of tasks and relevant id's
 */
const getChildTasks = async (authState, childid, storyid) => {
  try {
    return apiAuthGet(
      `/submission?childId=${childid}&storyId=${storyid}`,
      getAuthHeader(authState)
    ).then(response => {
      return response.data;
    });
  } catch (err) {
    return new Promise(() => {
      console.log(err);
      return [];
    });
  }
};

/**
 *
 * @param {Object} authState
 * @param {number} submissionId id of the full submission
 * @returns {Object} enpty object on success
 */
const markAsRead = async (authState, submissionId) => {
  try {
    return apiAuthPut(
      `/submit/read/${submissionId}`,
      {},
      getAuthHeader(authState)
    ).then(response => response.data);
  } catch (err) {
    return new Promise(() => {
      console.log(err);
      return [];
    });
  }
};

/**
 *
 * @param {*} authState
 * @param {number} submissionId ID for back-end to identify which submission to modify. Each submission has only one corresponding child.
 * @param {boolean} hasReadStatus boolean value to set the targeted submission's hasRead value to
 * @param {boolean} hasDrawnStatus boolean value to set the targeted submission's hasDrawn value to
 * @param {boolean} hasWrittenStatus boolean value to set the targeted submission's hasWritten value to
 * @returns {object} empty object on success
 */
const setAllTasks = (
  authState,
  submissionId,
  hasReadStatus,
  hasDrawnStatus,
  hasWrittenStatus
) => {
  apiAuthPut(
    `/dev/update-all/${submissionId}`,
    {
      hasRead: hasReadStatus,
      hasDrawn: hasDrawnStatus,
      hasWritten: hasWrittenStatus,
    },
    getAuthHeader(authState)
  )
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
      return [];
    });
};

// Gamification API Calls

/**
 *
 * @param {Object} authState necessary for API functionality
 * @param {number} childId id of the child who is "teaming up"
 * @returns {Object} containing information on the child and their teammate
 */
const getChildTeam = async (authState, childId) => {
  try {
    return apiAuthGet(
      `/game/team?childId=${childId}`,
      getAuthHeader(authState)
    ).then(response => {
      return response.data;
    });
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [error];
    });
  }
};

/**
 *
 * @param {Object} authState necessary for API functionality
 * @param {Object} teamPoints these are the points assigned for each of the submissions
 * @returns {Array} with id reference to the vote
 */
const submitPoints = async (authState, teamPoints) => {
  try {
    return apiAuthPost(
      `/game/points`,
      teamPoints,
      getAuthHeader(authState)
    ).then(response => {
      return response.data;
    });
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

/**
 *
 * @param {Object} authState  necessary for API functionality
 * @param {number} childId id of the child who is "squadding up"
 * @returns {number} squadId is returned
 */
const getChildSquad = async (authState, childId) => {
  try {
    return apiAuthGet(
      `/game/squad?childId=${childId}`,
      getAuthHeader(authState)
    ).then(response => {
      return response.data;
    });
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

/**
 *
 * @param {Object} authState necessary for API functionality
 * @param {number} squadId this will be received from 'getChildSquad' api call
 * @returns {Array} array of 4 objects (one for each child) containing information about their submissions
 */
const getFaceoffsForMatchup = async (authState, squadId, childId) => {
  try {
    return apiAuthGet(
      `/game/faceoffs/squads?squadId=${squadId}&childId=${childId}`,
      getAuthHeader(authState)
    ).then(response => {
      return response.data;
    });
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

/**
 *
 * @param {Object} authState necessary for API functionality
 * @param {number} squadId this will be received from 'getChildSquad' api call
 * @returns {Array} array of 4 objects (one for each child) containing information about their submissions
 */
const getFaceoffsForVoting = async (authState, squadId) => {
  try {
    return apiAuthGet(
      `/game/faceoffs/squads/?squadId=${squadId}`,
      getAuthHeader(authState)
    ).then(response => {
      return response.data;
    });
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

/**
 *
 * @param {Object} authState necessary for API functionality
 * @param {Object} voteInfo includes the Vote, the MemberID, and the FaceoffID
 * @returns {Array} with id reference to the vote
 */
const postVotes = async (authState, voteInfo) => {
  try {
    return apiAuthPost(`/game/votes`, voteInfo, getAuthHeader(authState)).then(
      response => {
        console.log('POSTVOTES RESPONSE', response.data);
        return response.data;
      }
    );
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

/**
 *
 * @param {Object} authState necessary for API functionality
 * @param {number} squadId id of the squad that the child is in
 * @param {number} memberId id of the team the child is on
 * @returns {Array} containing objects of the results of the faceoff
 */
const getGameVotes = async (authState, squadId, memberId) => {
  try {
    return apiAuthGet(
      `/game/votes?squadId=${squadId}&memberId=${memberId}`,
      getAuthHeader(authState)
    ).then(response => {
      return response.data;
    });
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

// Moderator API Calls

/**
 *
 * @param {Object} authState necessary for API functionality
 * @param {File, Array} body can either be one file or an array of files to upload
 * @returns {Array} the newly created avatar(s)
 */

const postNewAvatar = async (authState, body) => {
  try {
    return apiAuthPost('/avatars', body, getAuthHeader(authState)).then(
      res => res.data
    );
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getChildGraph = async (authState, ChildID) => {
  return apiAuthGet(`/parent/viz?childId=${ChildID}`, getAuthHeader(authState));
};

const getGallerySubmissionsById = authState => {
  try {
    return apiAuthGet(`/gallery`, getAuthHeader(authState)).then(response => {
      return response.data;
    });
  } catch (err) {
    return new Promise(() => {
      console.log(err);
      return [];
    });
  }
};

const getGallery = async authState => {
  return apiAuthGet('/gallary', getAuthHeader(authState));
};

const reset = async authState => {
  console.log('It should work');
  return apiAuthPut(`/reset/reset/`, null);
};

export {
  getApiUrl,
  sleep,
  getExampleData,
  getProfileData,
  getDSData,
  apiAuthGet,
  getLeaderboard,
  getStory,
  getAuthHeader,
  apiAuthPost,
  apiAuthPut,
  postNewChild,
  getChildFormValues,
  getChildTasks,
  updateChildData,
  postNewWritingSub,
  markAsRead,
  setAllTasks,
  postNewDrawingSub,
  getChild,
  postNewAvatar,
  getChildTeam,
  submitPoints,
  getChildSquad,
  getFaceoffsForMatchup,
  getFaceoffsForVoting,
  postVotes,
  getGameVotes,
  getChildGraph,
  getGallerySubmissionsById,
  getGallery,
  reset,
};
