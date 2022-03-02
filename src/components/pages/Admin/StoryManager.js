import React, { useState } from 'react';
import UploadStoryPopup from './UploadStoryPopup';
import { connect } from 'react-redux';
import StoryPopup from './StoryPopup';
import { Button } from 'antd';

const StoryManager = ({ stories }) => {
  const [addButtonState, setAddButtonState] = useState(false);

  const [storyState, setStoryState] = useState(false);

  const [story, setStory] = useState();

  const reviewStory = story => {
    setStory(story);
    setStoryState(true);
  };

  return (
    <div className="story-manager">
      <div className="library">
        <div className="library-top">
          <h2>Story Library</h2>
          <Button
            onClick={() => setAddButtonState(true)}
            type="primary"
            shape="round"
          >
            Add +
          </Button>
        </div>
        <div>
          <div className="review-checkboxes">
            {stories.map(story => {
              return story.status === 'review' ? (
                <div key={story.title}>
                  <p onClick={() => reviewStory(story)}>
                    <b>{story.title}</b> by {story.author}
                  </p>
                </div>
              ) : (
                ''
              );
            })}
          </div>
        </div>
      </div>
      <UploadStoryPopup
        trigger={addButtonState}
        setTrigger={setAddButtonState}
      />
      <StoryPopup
        story={story}
        trigger={storyState}
        setTrigger={setStoryState}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stories: state.admin,
  };
};

export default connect(mapStateToProps, {})(StoryManager);
