import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UploadStoryPopup from './UploadStoryPopup';
import { connect } from 'react-redux';
import StoryPopup from './StoryPopup';
import { Button } from 'antd';
import StoryBacklog from './StoryBacklog';
import StoryDetails from './StoryDetails';
import AdminHistory from './AdminHistory';
import AdminFilters from './AdminFilters';

const StoryManager = ({ stories }) => {
  // Pop-up button state for Add button. This button is used for adding new stories
  const [addButtonState, setAddButtonState] = useState(false);

  //state to pass to children AdminFilters and StoryBacklog,
  //so that changes in AdminFilter can change the state in BacklogStories
  const [filters, setFilters] = useState({
    status: 'All',
    submittedBy: 'All',
    assignedTo: 'All',
  });

  return (
    <div className="story-manager">
      <div className="library">
        {/* A button to add new stories. When clicked a <UploadStoryPopup> component 
      is shown (via CSS), to upload new files*/}
        <div className="library-top">
          <Button
            onClick={() => setAddButtonState(true)}
            type="primary"
            shape="round"
          >
            Add +
          </Button>

          <AdminFilters filters={filters} setFilters={setFilters} />
        </div>

        {/* Four primary components in the body. 
            - AdminFilters and StoryBacklog is always shown on "/storymanager" route
            - AdminHistory is only shown on "/storymanager" route,
            - StoryDetails is only shown on "/storymanager/:story_id" route
          AdminFilters and StoryBacklog share "filters" state from their parent component here
          so that changes in AdminFilter can reflect on StoryBacklog component.
         */}
        <div className="library-body">
          <div className="library-body-main">
            <StoryBacklog filters={filters} />
            <Switch>
              <Route
                path="/admin/storymanager/:story_id"
                component={StoryDetails}
              />
              <Route path="/admin/storymanager" component={AdminHistory} />
            </Switch>
          </div>
        </div>
      </div>

      {/* Story pop-up  to add new stories, which is controlled by local state "addButtonState"*/}
      <UploadStoryPopup
        trigger={addButtonState}
        setTrigger={setAddButtonState}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stories: state.admin.stories,
  };
};

export default connect(mapStateToProps, {})(StoryManager);
