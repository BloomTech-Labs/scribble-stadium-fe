import { FETCH_STORIES, UPDATE_STORY_STATUS } from '../actions/adminActions';

const initialState = {
  stories: [
    {
      storyId: '1',
      storyTitle: 'Title 1',
      storyAuthor: 'Bob Smith',
      storyDescription:
        'Story 1 - Lorem Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit Story 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elitipsum dolor sit amet, consectetur adipiscing elit',
      timeSubmitted: '1633397263735',
      lastTimeUpdated: '1634398493750',
      currentStatus: 'Approved',
      assignedTo: 'Jane Admin',
      storyImages: [
        'https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png',
        'https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png',
      ],
    },
    {
      storyId: '2',
      storyTitle: 'Title 2',
      storyAuthor: 'Johnny Doerr',
      storyDescription:
        'Story 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      timeSubmitted: '1645101469533',
      lastTimeUpdated: '1647131469533',
      currentStatus: 'Pending',
      assignedTo: 'Unassigned',
      storyImages: [
        'https://icons-for-free.com/download-icon-gallery+image+landscape+mobile+museum+open+line+icon-1320183049020185924_512.png',
        'https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png',
        'https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png',
      ],
    },
    {
      storyId: '3',
      storyTitle: 'Title 3',
      storyAuthor: 'Alan Shearer',
      storyDescription:
        'Story 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      timeSubmitted: '1647131979533',
      lastTimeUpdated: '1648131979533',
      currentStatus: 'Rejected',
      assignedTo: 'John Moderator',
      storyImages: [
        'https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png',
      ],
    },
    {
      storyId: '4',
      storyTitle: 'Title 4',
      storyAuthor: 'Abe London',
      storyDescription:
        'Story 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      timeSubmitted: '1650131979533',
      lastTimeUpdated: '1650131979533',
      currentStatus: 'Rejected',
      assignedTo: 'Joe Doe',
      storyImages: [
        'https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png',
      ],
    },
    {
      storyId: '5',
      storyTitle: 'Title 5',
      storyAuthor: 'Alex Morgan',
      storyDescription:
        'Story 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      timeSubmitted: '1631931979533',
      lastTimeUpdated: '1632131979533',
      currentStatus: 'Pending',
      assignedTo: 'Sarah Smith',
      storyImages: [
        'https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png',
      ],
    },
  ],
  moderators: [
    { user_id: 1, name: 'Unassigned' },
    { user_id: 2, name: 'Jane Admin' },
    { user_id: 3, name: 'John Moderator' },
    { user_id: 4, name: 'Abe London' },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORIES:
      return {
        ...state,
      };
    case UPDATE_STORY_STATUS:
      return {
        ...state,
        stories: action.payload,
      };
    default:
      return state;
  }
};
