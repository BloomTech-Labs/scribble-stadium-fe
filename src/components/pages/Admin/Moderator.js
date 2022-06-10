import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';

import AdminHeader from '../../common/Admin/AdminHeader';
import ModeratorSideBar from '../../common/Admin/ModeratorSidebar';
import ParentFooter from '../../common/ParentFooter';
import StoryManager from './StoryManager';

const Moderator = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Router>
        <AdminHeader />
        <div className="main">
          <ModeratorSideBar />
          <div className="container">
            <h1>I am a Moderator</h1>
            <StoryManager />
          </div>
        </div>
        <div>
          <ParentFooter layoutContainerCheck={'scroll'} />
        </div>
      </Router>
    )
  );
};

export default Moderator;
