import React from 'react';
import { Typography, Menu, Dropdown } from 'antd';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { connect } from 'react-redux';
import { global } from '../../state/actions';

import parent_avatar from '../../assets/icons/parent_avatar.svg';

const { Title } = Typography;

const ParentMenu = props => {
  const { push } = useHistory();
  const { authService } = useOktaAuth();

  const switchUsers = e => {
    props.clearUsers();
    push('/');
  };

  return (
    <Menu {...props}>
      <Menu.Item key="1" onClick={switchUsers}>
        Change User
      </Menu.Item>
      <Menu.Item key="2" onClick={() => authService.logout()}>
        Log Out
      </Menu.Item>
    </Menu>
  );
};

const ParentNavTopBar = props => {
  return (
    <nav className="parent-nav-top-bar" theme="light">
      <a href="">
        <Title className="title navbar-logo" style={{ margin: 0 }} level={1}>
          STORY SQUAD
        </Title>
      </a>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span className="welcome-back-msg">
          Welcome back, {props.parent.name ? props.parent.name : 'User'}
        </span>
        <Dropdown
          overlay={<ParentMenu clearUsers={props.clearUsers} />}
          trigger={['click', 'hover']}
          placement="bottomCenter"
        >
          <a className="parent-avatar" onClick={e => e.preventDefault()}>
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
