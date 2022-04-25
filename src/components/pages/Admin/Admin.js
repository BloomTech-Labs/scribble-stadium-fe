import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AdminHeader from '../../common/Admin/AdminHeader';
import AdminSideBar from '../../common/Admin/AdminSidebar';
import StoryManager from './StoryManager';
import { Button } from 'antd';
const Admin = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Router>
        <AdminHeader />
        <div className="main">
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
