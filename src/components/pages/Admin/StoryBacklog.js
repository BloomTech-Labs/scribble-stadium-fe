// import { Card } from 'antd';
import React from 'react';
// import { useState } from 'react';
import { connect } from 'react-redux';
// import BacklogStoryCard from './BacklogStoryCard';

const StoryBacklog = () => {
  return (
    <div className="backlog-stories" style={{ overflowY: 'scroll' }}>
      {
        // stories.map(story => {
        // return (
        //   <div className="backlog-story">
        //     <BacklogStoryCard story={story} />
        //   </div>
        // );
        // }
        // )
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stories: state.admin,
  };
};

export default connect(mapStateToProps, {})(StoryBacklog);
