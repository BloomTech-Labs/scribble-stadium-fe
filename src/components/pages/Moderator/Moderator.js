import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';

import AdminHeader from '../../common/Admin/AdminHeader';
import ModeratorSideBar from '../Moderator/ModeratorSidebar';
import DatePicker from './DatePicker';
import TransferDrawings from './TransferDrawings';
import ParentFooter from '../../common/ParentFooter';

const Moderator = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Router>
        <AdminHeader />
        <div className="main">
          <ModeratorSideBar />
          <div className="container">
            <h1>Moderator Dashboard</h1>
            <DatePicker />
            <TransferDrawings />
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
