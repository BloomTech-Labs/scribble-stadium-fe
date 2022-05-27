import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { Badge, Avatar } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  BellOutlined,
} from '@ant-design/icons';

import { Link } from 'react-router-dom';

const AdminHeader = () => {
  const { user } = useAuth0();
  // const history = useHistory();

  return (
    <div className="header">
      <div>
        <Link to="/">
          <h1 className="header-logo">{'STORY SQUAD'}</h1>
        </Link>
      </div>

      <div>
        <Badge count={11}>
          <Avatar
            style={{ backgroundColor: '#87d068' }}
            icon={<UserOutlined />}
          />
        </Badge>
        <h4>Welcome back, {user.name}</h4>
        <div className="header-nav">
          <div>
            <HomeOutlined style={{ fontSize: 18 }} />
          </div>
          <div>
            <QuestionCircleOutlined style={{ fontSize: 18 }} />
          </div>
          <div>
            <Badge dot>
              <BellOutlined style={{ fontSize: 18 }} />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
