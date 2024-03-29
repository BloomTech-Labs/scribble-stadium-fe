import React from 'react';
import { Typography, Menu, Dropdown, Button } from 'antd';

import { Link, useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import { global } from '../../state/actions';

import parent_avatar from '../../assets/icons/parent_avatar.svg';

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

const ParentNavTopBar = props => {
  return (
    <nav className="parent-nav-top-bar" theme="light">
      <Link to="/">
        <Title className="title navbar-logo" level={1}>
          Scribble Stadium
        </Title>
      </Link>
      <div className="nav-right">
        <div className="link-container">
          <Link to="/dashboard">
            <Button
              className="play-game-btn"
              onClick={evt => {
                props.handlePlayGameButtonClick(evt);
              }}
            >
              {/* bug, see ChooseChildModal.js line 48
              
              PLAY GAME button being clicked from another page does not bring up choose child modal*/}
              PLAY GAME
            </Button>
          </Link>
          <Link to="/parent/faq">
            <span>FAQ</span>
          </Link>
          <Link to="/parent/contact">
            <span>CONTACT US</span>
          </Link>
        </div>
        <div className="straight-bar"></div>
        <span className="welcome-back-msg">
          {props.parent &&
            `Welcome back, ` +
              (props.parent.name == null ? 'parent' : `${props.parent.name}`) +
              `!`}
        </span>
        <Dropdown
          overlay={<ParentMenu clearUsers={props.clearUsers} />}
          trigger={['hover']}
          placement="bottom"
        >
          <a
            href="/"
            className="parent-avatar"
            data-testid="parent-avatar"
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
)(ParentNavTopBar);
