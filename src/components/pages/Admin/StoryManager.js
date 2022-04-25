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
  const [addButtonState, setAddButtonState] = useState(false);

  const [filters, setFilters] = useState({
    status: 'All',
    submittedBy: 'All',
    assignedTo: 'All',
  });

  return (
    <div className="story-manager">
      <div className="library">
        <div className="library-top">
          <Button
            onClick={() => setAddButtonState(true)}
            type="primary"
            shape="round"
          >
            Add +
          </Button>
        </div>
        <div className="library-body">
          <AdminFilters filters={filters} setFilters={setFilters} />
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
