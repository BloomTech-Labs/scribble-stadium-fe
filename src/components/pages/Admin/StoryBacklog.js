import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import BacklogStoryCard from './BacklogStoryCard';

const StoryBacklog = ({ stories, filters }) => {
  /* - Local state (storiesState) that changes based on change in the filters and stories from the props
     - "filters" is in props from this story's parent StoryManager, 
        however "stories" comes to props from redux connect (global state)
  */
  const [storiesState, setStoriesState] = useState(stories);

  /* - declare a function to handle the multiple filter scenarios and to return a final array based on filter inputs 
   - each filter filters the array by a given filter param, except if the selected param 
     is "All" it returns all stories for that specific filter
  */
  const multiFilter = () => {
    const filteredData = stories
      .filter(story => {
        if (filters.status !== 'All') {
          return story.currentStatus === filters.status;
        } else {
          return story;
        }
      })
      .filter(story => {
        if (filters.assignedTo !== 'All') {
          return story.assignedTo === filters.assignedTo;
        } else {
          return story;
        }
      })
      .filter(story => {
        if (filters.submittedBy !== 'All') {
          return story.storyAuthor === filters.submittedBy;
        } else {
          return story;
        }
      });

    return filteredData;
  };

  /* - to handle the changes in "filters" and "stories" props
     - everytime there is a change on either "filters" or "stories"
     - "storiesState" changes according to "filters" params and renders
        the UI with updated "storiesState" data
  */
  useEffect(() => {
    if (
      filters.status === 'All' &&
      filters.assignedTo === 'All' &&
      filters.submittedBy === 'All'
    ) {
      setStoriesState(stories);
    } else {
      setStoriesState(multiFilter());
    }
  }, [filters, stories]);

  {
    /* - map "storiesState" and return a BacklogStoryCard component for each mapped item (story) 
     - pass a each "story" into rendered "BacklogStoryCard" child component as a prop
  */
  }
  return (
    <div className="backlog-stories">
      {storiesState.map(story => (
        <div className="backlog-story">
          <BacklogStoryCard story={story} key={story.storyId} />
        </div>
      ))}
    </div>
  );
};

/* declare a props object that connects to global state and gets stories from there */
const mapStateToProps = state => ({ stories: state.admin.stories });

/* connect StoryBacklog component to global state */
export default connect(mapStateToProps, {})(StoryBacklog);
