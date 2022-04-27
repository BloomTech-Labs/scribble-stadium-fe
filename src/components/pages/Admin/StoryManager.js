import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import UploadStoryPopup from './UploadStoryPopup';
import { connect } from 'react-redux';
import { Button } from 'antd';
import StoryBacklog from './StoryBacklog';
import StoryDetails from './StoryDetails';
import AdminHistory from './AdminHistory';
import AdminFilters from './AdminFilters';

const StoryManager = ({ stories }) => {
  /*
   - Pop-up button state for Add button. This button is used for adding new stories
  */
  const [addButtonState, setAddButtonState] = useState(false);

  /*
    - state to pass to children AdminFilters and StoryBacklog,
    - so that changes in AdminFilter can change the state in BacklogStories
  */
  const [filters, setFilters] = useState({
    status: 'All',
    submittedBy: 'All',
    assignedTo: 'All',
  });

  return (
    <div className="story-manager">
      <div className="library">
        {/* 
          Top of story manager contains 2 components:
              - A button to add new stories. When clicked a <UploadStoryPopup> component 
                is shown (via CSS), to upload new files
              - AdminFilters component (with 3 filters), always shown on "/storymanager" route 
                Note: AdminFilters and StoryBacklog (in the "library-body") share "filters" state 
                      from their parent component here so that changes in AdminFilter can reflect on 
                      StoryBacklog component.
                */}
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

        {/* 
          Three primary components in the body. 
            - StoryBacklog is always shown on "/storymanager" route.
            - AdminHistory is only shown on "/storymanager" route,
            - StoryDetails is only shown on "/storymanager/:story_id" route
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

      {/* 
        - Story pop-up  to add new stories, which is controlled by local state "addButtonState"
      */}
      <UploadStoryPopup
        trigger={addButtonState}
        setTrigger={setAddButtonState}
      />
    </div>
  );
};

/*
  - declare a variable to get stories from global state via connect
*/
const mapStateToProps = state => {
  return {
    stories: state.admin.stories,
  };
};

/*
  - connect to global state (adminReducer) to pass the state data (stories) to props
*/
export default connect(mapStateToProps, {})(StoryManager);
