import { FETCH_STORIES } from '../actions/adminActions';

const stories = {
  data: [
    {
      storyId: 1,
      storyTitle: 'Title 1',
      storyAuthor: 'Bob Smith',
      storyDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      timeSubmitted: 1649397263735,
      lastTimeUpdated: 1649398493750,
      currentStatus: 'Approved',
      assignedTo: 'Jane Admin',
      storyImages: ['shorturl.at/gkGY9', 'shorturl.at/gkGY9'],
    },
    {
      storyId: 2,
      storyTitle: 'Title 2',
      storyAuthor: 'Johnny Doerr',
      storyDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      timeSubmitted: 1650101469533,
      lastTimeUpdated: 1650131469533,
      currentStatus: 'Pending',
      assignedTo: 'Unassigned',
      storyImages: ['shorturl.at/gkGY9', 'shorturl.at/gkGY9'],
    },
    {
      storyId: 3,
      storyTitle: 'Title 3',
      storyAuthor: 'Alan Shearer',
      storyDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      timeSubmitted: 1650131979533,
      lastTimeUpdated: 1650131979533,
      currentStatus: 'Rejected',
      assignedTo: 'John Moderator',
      storyImages: ['shorturl.at/gkGY9', 'shorturl.at/gkGY9'],
    },
    // {
    //   title: 'Scarface',
    //   author: 'Oliver Stone',
    //   story:
    //     'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
    //   status: 'review',
    // },
    // {
    //   title: 'The Matrix',
    //   author: 'The Wachowskis sisters',
    //   story:
    //     'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?',
    //   status: 'review',
    // },
  ],
};

export const reducer = (state = stories.data, action) => {
  switch (action.type) {
    case FETCH_STORIES:
      return {
        ...state,
      };
    default:
      return state;
  }
};
