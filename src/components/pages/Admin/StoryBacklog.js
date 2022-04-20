import { Card } from 'antd';
import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import BacklogStoryCard from './BacklogStoryCard';

const StoryBacklog = ({ stories }) => (
  <div className="backlog-stories" style={{ overflowY: 'scroll' }}>
    {stories.map(story => (
      <div className="backlog-story">
        <BacklogStoryCard story={story} key={story.storyId} />
      </div>
    ))}
  </div>
);

const mapStateToProps = state => ({ stories: state.admin });

export default connect(mapStateToProps, {})(StoryBacklog);
