import React from 'react';
import { Typography, Menu, Dropdown, Badge } from 'antd';
import {
  HomeOutlined,
  // UserOutlined,
  QuestionCircleOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
// import { global } from '../../../state/actions';

import parent_avatar from '../../../assets/icons/parent_avatar.svg';

const { Title } = Typography;

const ParentMenu = props => {
  const { push } = useHistory();
  const { logout } = useAuth0();
  const { clearUsers, ...rest } = props;

  const switchUsers = () => {
    clearUsers();
    push('/');
  };

  return (
    <Menu {...rest}>
      <Menu.Item key="1" onClick={switchUsers}>
        Change User
      </Menu.Item>
      <Menu.Item
        key="2"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
};

const AdminHeader = props => {
  return (
    <nav className="admin-nav-top-bar">
      <Link to="/">
        <Title className="title navbar-logo" level={1}>
          Story Squad
        </Title>
      </Link>
      <div className="nav-right">
        <div className="icons-container">
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
        <div className="straight-bar"></div>
        <span className="welcome-msg">
          {props.parent &&
            `Welcome back, ` +
              (props.parent.name == null
                ? 'Moderator'
                : `${props.parent.name}`) +
              `!`}
        </span>
        <Dropdown
          overlay={<ParentMenu clearUsers={props.clearUsers} />}
          trigger={['hover']}
          placement="bottom"
        >
          <a
            href="/"
            className="admin-avatar"
            data-testid="admin-avatar"
            onClick={e => e.preventDefault()}
          >
            <img src={parent_avatar} alt="Dropdown Menu" />
          </a>
        </Dropdown>
      </div>
    </nav>
  );
};

export default connect(
  state => ({
    parent: state.parent,
  }),
  {
    clearUsers: global.clearUsers,
  }
)(AdminHeader);
