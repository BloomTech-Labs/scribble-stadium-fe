// istanbul ignore file
import axios from 'axios';

/**
 * This function dynamically returns an API URL depending on NODE_ENV and state
 * State was used (as opposed to localStorage) so that UI can listen and change on devMode state toggle
 * Nearly every API call utilizes this function through using apiAuthGet/apiAuthPost/apiAuthPut.
 */
function getApiUrl() {
  let apiUrl = process.env.REACT_APP_API_URI;
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

const getAuthHeader = () => {
  const idToken = localStorage.getItem('idToken');
  const authenticated = localStorage.getItem('isAuthenticated');

  if (!idToken || !authenticated) {
    throw new Error('Not authenticated');
  }
  return { headers: { Authorization: `Bearer ${idToken}` } };
};

//apiUrl here instead
const getDSData = url => {
  // here's another way you can compose together your API calls.
  // Note the use of GetAuthHeader here is a little different than in the getProfileData call.
  const headers = getAuthHeader();
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url, { headers })
    .then(res => JSON.parse(res.data))
    .catch(err => err);
};

const apiAuthGet = endpoint => {
  return axios.get(`${getApiUrl()}${endpoint}`, getAuthHeader());
};
const apiAuthPost = (endpoint, body) => {
  return axios.post(`${getApiUrl()}${endpoint}`, body, getAuthHeader());
};
const apiAuthPut = (endpoint, body) => {
  return axios.put(`${getApiUrl()}${endpoint}`, body, getAuthHeader());
};
const apiAuthDelete = endpoint => {
  return axios.delete(`${getApiUrl()}${endpoint}`, getAuthHeader());
};

const getProfileData = () => {
  try {
    return apiAuthGet('/profiles').then(response => {
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

const getLeaderboard = () => {
  try {
    return apiAuthGet('/leaderboard', getAuthHeader()).then(response => {
      return response.data;
    });
  } catch (err) {
    return new Promise(() => {
      console.log(err);
      return [];
    });
  }
};

const getChildCard = () => {
  try {
    return apiAuthGet('/child/:id', getAuthHeader()).then(response => {
      return response.data;
    });
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
const getChild = childId => {
  try {
    return apiAuthGet(`/child/${childId}`, getAuthHeader()).then(response => {
      return response.data;
    });
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
const updateChildData = (body, childId) => {
  console.log(body);
  try {
    return apiAuthPut(`/child/${childId}`, body, getAuthHeader()).then(
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

const deleteChild = childId => {
  try {
    return apiAuthDelete(`/child/${childId}`, getAuthHeader()).then(
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
const postNewChild = child => {
  try {
    return apiAuthPost('/child', child, getAuthHeader()).then(response => {
      return response.data;
    });
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
 
 * @param {number} childId the id of the respective child
 * @returns {number} child id for child that is being called
 */

const getChildByID = ID => {
  try {
    return apiAuthGet(`/gallery/child/${ID}`, getAuthHeader()).then(
      response => {
        return response;
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
 * @param {number} storyId the story id of the respective episode
 * @returns {Promise} a promise that resolves to an object containing {DrawingPrompt, ID, Title, URL, and WritingPrompt}
 */
const getStory = storyId => {
  try {
    return apiAuthGet(`/storyNew/${storyId}`, getAuthHeader()).then(
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

/**
 * Reads in gradelevels and avatars from the database to enforce referential integrity
 * @param {Object} authState necessary for API functionality
 * @returns {Promise} a promise that resolves to an array of [[avatars], [gradeLevels]]
 */
const getChildFormValues = async () => {
  try {
    return Promise.all([
      apiAuthGet('/avatars', getAuthHeader()),
      apiAuthGet('/gradelevels', getAuthHeader()),
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
const postNewWritingSub = async (body, subId) => {
  try {
    return apiAuthPost(`/submit/write/${subId}`, body, getAuthHeader()).then(
      res => res.data
    );
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
const postNewDrawingSub = async (body, subId) => {
  try {
    return apiAuthPost(`/submit/draw/${subId}`, body, getAuthHeader()).then(
      res => res.data
    );
  } catch (err) {
    console.log(err);
    return [];
  }
};

/* 
***** Uploading to S3 *****
This function gets an authorized temp url from the BE.
Then gets the returning data along with the signed request and url 
Then it preps the upload with the headers and uploads the signed request with the file and returns the url
After this the postSubmissionPage component will submit the submission's page 
*/
const postNewUpload = async file => {
  try {
    return apiAuthPost(
      '/submission/s3',
      {
        fileName: file.name.split('.')[0],
        fileType: file.name.split('.')[1],
      },
      getAuthHeader()
    )
      .then(res => {
        let returnData = res.data;
        let signedRequest = returnData.signedRequest;
        let url = returnData.url;
        let options = {
          headers: {
            'Content-Type': file.name.split('.')[1],
          },
        };
        return axios
          .put(signedRequest, file, options)
          .then(result => {
            return url;
          })
          .catch(error => {
            alert('ERROR ' + JSON.stringify(error));
          });
      })
      .catch(err => {
        console.log('original post to signS3', err);
      });
  } catch (err) {
    console.log(err);
    return [];
  }
};

/*
This function will submit the submission's page 
*/
const postSubmissionPage = async url => {
  try {
    return apiAuthPost(`/submission/page`, url, getAuthHeader())
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log(err);
        return [];
      });
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
const getChildTasks = async (childid, storyid) => {
  try {
    return apiAuthGet(
      `/submission?childId=${childid}&storyId=${storyid}`,
      getAuthHeader()
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
const markAsRead = async submissionId => {
  try {
    return apiAuthPut(`/submit/read/${submissionId}`, {}, getAuthHeader()).then(
      response => response.data
    );
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
    getAuthHeader()
  )
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
      return [];
    });
};

// GamePlay API Calls

/**
 *
 * @param {Object} authState necessary for API functionality
 * @param {number} childId id of the child who is "teaming up"
 * @returns {Object} containing information on the child and their teammate
 */
const getChildTeam = async childId => {
  try {
    return apiAuthGet(`/game/team?childId=${childId}`, getAuthHeader()).then(
      response => {
        return response.data;
      }
    );
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
const submitPoints = async teamPoints => {
  try {
    return apiAuthPost(`/game/points`, teamPoints, getAuthHeader()).then(
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

/**
 *
 * @param {Object} authState  necessary for API functionality
 * @param {number} childId id of the child who is "squadding up"
 * @returns {number} squadId is returned
 */
const getChildSquad = async childId => {
  try {
    return apiAuthGet(`/game/squad?childId=${childId}`, getAuthHeader()).then(
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

/**
 *
 * @param {Object} authState necessary for API functionality
 * @param {number} squadId this will be received from 'getChildSquad' api call
 * @returns {Array} array of 4 objects (one for each child) containing information about their submissions
 */
const getFaceoffsForMatchup = async (squadId, childId) => {
  try {
    return apiAuthGet(
      `/game/faceoffs/squads?squadId=${squadId}&childId=${childId}`,
      getAuthHeader()
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
const getFaceoffsForVoting = async squadId => {
  try {
    return apiAuthGet(
      `/game/faceoffs/squads/?squadId=${squadId}`,
      getAuthHeader()
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
const postVotes = async voteInfo => {
  try {
    return apiAuthPost(`/game/votes`, voteInfo, getAuthHeader()).then(
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
const getGameVotes = async (squadId, memberId) => {
  try {
    return apiAuthGet(
      `/game/votes?squadId=${squadId}&memberId=${memberId}`,
      getAuthHeader()
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

const postNewAvatar = async body => {
  try {
    return apiAuthPost('/avatars', body, getAuthHeader()).then(res => res.data);
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getChildGraph = async ChildID => {
  return apiAuthGet(`/parent/viz?childId=${ChildID}`, getAuthHeader());
};

const getGallerySubmissionsById = id => {
  try {
    return apiAuthGet(`/submissions/child/${id}`, getAuthHeader()).then(
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

const getGallery = async () => {
  return apiAuthGet('/gallery', getAuthHeader());
};

const reset = async () => {
  console.log('It should work');
  return apiAuthPut(`/reset/reset/`, null);
};

/**
 *
 * @param {Object} authState necessary for API functionality
 * @param {number} childId id of the child who is "teaming up"
 * @returns {Array} containing information on each submission for the child
 */
const getSubmissions = childId => {
  // Mocked response to test conditional rendering of mission button on RenderChildDashboard
  // Once the endpoint is up, submissions will be available from the API

  return Promise.resolve({ childId, data: ['foo', 'bar'] });
};

const getWinnerbySquadId = id => {
  try {
    return apiAuthGet(`/results?squadId=${id}`, getAuthHeader()).then(
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

export {
  postSubmissionPage,
  postNewUpload,
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
  getChildByID,
  getChildCard,
  updateChildData,
  deleteChild,
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
  getSubmissions,
  getWinnerbySquadId,
};
