import React from 'react';
import { Typography, Menu, Dropdown, Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { connect } from 'react-redux';
import { global } from '../../state/actions';

import parent_avatar from '../../assets/icons/parent_avatar.svg';

const { Title } = Typography;

const ParentMenu = props => {
  const { push } = useHistory();
  const { authService } = useOktaAuth();
  const { clearUsers, ...rest } = props;

  const switchUsers = e => {
    clearUsers();
    push('/');
  };

  return (
    <Menu {...rest}>
      <Menu.Item key="1" onClick={switchUsers}>
        Change User
      </Menu.Item>
      <Menu.Item key="2" onClick={() => authService.logout()}>
        Logout
      </Menu.Item>
    </Menu>
  );
};

const ParentNavTopBar = props => {
  return (
    <nav className="parent-nav-top-bar" theme="light">
      <Link to="/parent/dashboard">
        <Title className="title navbar-logo" level={1}>
          STORY SQUAD
        </Title>
      </Link>
      <div className="nav-right">
        <div className="link-container">
          <Link to="/parent/faq">
            <Button className="play-game-btn">PLAY GAME</Button>
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
          {props.parent && `Welcome back, ${props.parent.name}`}
        </span>
        <Dropdown
          overlay={<ParentMenu clearUsers={props.clearUsers} />}
          trigger={['hover']}
          placement="bottomCenter"
        >
          <a
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
