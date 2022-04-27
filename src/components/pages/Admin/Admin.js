import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AdminHeader from '../../common/Admin/AdminHeader';
import StoryManager from './StoryManager';
import { Button } from 'antd';

const Admin = () => {
  /* 
    - to get user's auth status so that Admin component can only be displayed to authenticated users 
  */
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Router>
        <AdminHeader />
        <div className="main">
          {/*
            - Admin sidebar was removed and instead a simple link navigation was added 
          */}
          <nav>
            <Link to="/admin/admindashboard">
              <Button type="link">
                <b>Admin Dashboard</b>
              </Button>
            </Link>
            <Link to="/admin/storymanager">
              <Button type="link">
                <b>Story Manager</b>
              </Button>
            </Link>
          </nav>
          {/* 
            Storymanager component that contains 5 main components:
                - UploadStory: to add new stories by admins/moderators
                - BacklogStory: to display all stories in the a backlog
                - AdminFilters: to filter all backlog stories (in BacklogStory component)
                                by status, submittedBy and assignedTo
                - AdminHistory: that displays latest activity of tickets on story manager home page
                - StoryDetails: that displays story description, images and 
                                gives ability to admins to Approve or Reject stories
           */}
          <div className="container">
            <Switch>
              <Route path="/admin/storymanager" component={StoryManager} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  );
};

export default Admin;
