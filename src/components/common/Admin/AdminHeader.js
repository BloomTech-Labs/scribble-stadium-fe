import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';

const AdminHeader = () => {
  const { user, logout } = useAuth0();
  const history = useHistory();

  return (
    <div className="header">
      <h4>Admin: user.name</h4>
      <div>
        <img
          src="https://raw.githubusercontent.com/BloomTech-Labs/scribble-stadium-fe/main/public/assets/Login-Explosion-Final.png"
          alt="Story Squad Logo"
        />
      </div>
      <div className="buttons">
        <Button
          onClick={() => {
            history.push('/admin');
          }}
        >
          Home
        </Button>
        <Button onClick={() => logout()}>Log Out</Button>
      </div>
    </div>
  );
};

export default AdminHeader;
