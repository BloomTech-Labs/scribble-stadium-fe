import React, { useState } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import UploadStoryPopup from './UploadStoryPopup';
import { connect } from 'react-redux';
import StoryPopup from './StoryPopup';
import { Button } from 'antd';
import StoryBacklog from './StoryBacklog';
// import BacklogStoryCard from '../Admin/BacklogStoryCard';
import StoryDetails from './StoryDetails';
import AdminHistory from './AdminHistory';
import Leaderboard from '../Leaderboard/Leaderboard';
const StoryManager = ({ stories }) => {
  const [addButtonState, setAddButtonState] = useState(false);
  const [story, setStory] = useState(false);

  const reviewStory = story => {
    story(story);
    setStory(true);
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
        <Leaderboard />

        <div className="library-body">
          <StoryDetails />
          <AdminHistory />
          {/* <BacklogStoryCard /> */}
          <Switch>
            <Route path="/admin/storymanager/:id" component={StoryDetails} />
            <Route path="/admin/storymanager" component={AdminHistory} />
          </Switch>
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
                'review-checkboxex'
              );
            })}
          </div>
        </div>
        <StoryBacklog />
      </div>
      <UploadStoryPopup
        trigger={addButtonState}
        setTrigger={setAddButtonState}
      />
      <StoryPopup story={story} trigger={story} setTrigger={setStory} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stories: state.admin,
  };
};

export default connect(mapStateToProps, {})(StoryManager);
