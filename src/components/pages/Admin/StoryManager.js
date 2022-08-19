import React, { useState } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import UploadStoryPopup from './UploadStoryPopup';
import { connect } from 'react-redux';
// import StoryPopup from './StoryPopup';
import 'antd/dist/antd.css'
import { UploadOutlined } from '@ant-design/icons'
import { Button, Upload } from 'antd';
import StoryBacklog from './StoryBacklog';
import StoryDetails from './StoryDetails';
import AdminHistory from './AdminHistory';

const StoryManager = () => {
  const [addButtonState, setAddButtonState] = useState(false);

  // const [storyState, setStoryState] = useState(false);

  // const [story, setStory] = useState();

  // const reviewStory = story => {
  //   setStory(story);
  //   setStoryState(true);
  // };

  return (
    <div className="story-manager">
      <div className="library">
        <div className="library-top">
          <h2>Story Library</h2>
          <Upload>
            <Button
              className="upload-button" 
              icon={<UploadOutlined />}
              onClick={() => setAddButtonState(true)}
              type="primary"
            >
              Upload
            </Button>
          </Upload>
        </div>
        <div className="library-body">
          <StoryBacklog />
          <Switch>
            <Route path="/admin/storymanager/:id" component={StoryDetails} />
            <Route path="/admin/storymanager" component={AdminHistory} />
          </Switch>
        </div>

        {/* <div>
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
        </div> */}
      </div>
      <UploadStoryPopup
        trigger={addButtonState}
        setTrigger={setAddButtonState}
      />
      {/* <StoryPopup
        story={story}
        trigger={storyState}
        setTrigger={setStoryState}
      /> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stories: state.admin,
  };
};

export default connect(mapStateToProps, {})(StoryManager);
