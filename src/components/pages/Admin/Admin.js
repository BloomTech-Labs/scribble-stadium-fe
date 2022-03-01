import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminHeader from '../../common/Admin/AdminHeader';
import AdminSideBar from '../../common/Admin/AdminSidebar';

const Admin = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Router>
        <AdminHeader />
        <div className="main">
          <AdminSideBar />
          <div className="container">Placeholder for Admin routes</div>
        </div>
      </Router>
    )
  );
};

export default Admin;
