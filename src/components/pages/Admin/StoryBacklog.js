import { Card } from 'antd';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AdminFilters from './AdminFilters';
import BacklogStoryCard from './BacklogStoryCard';

const StoryBacklog = ({ stories, filters }) => {
  const [storiesState, setStoriesState] = useState(stories);

  const multiFilter = () => {
    const statusFilteredData = stories
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

    return statusFilteredData;
  };

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

const mapStateToProps = state => ({ stories: state.admin.stories });

export default connect(mapStateToProps, {})(StoryBacklog);
