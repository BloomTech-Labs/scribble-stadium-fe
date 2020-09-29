import React from 'react';

import { Link, useHistory } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { global } from '../../state/actions';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import BackButton from '../common/BackButton';

const ChildMenu = props => {
  const { push } = useHistory();
  const { authService } = useOktaAuth();

  const switchUsers = e => {
    props.clearUsers();
    push('/');
  };
  return (
    <Menu {...props}>
      <Menu.Item key="1">
        <Link to="/child/dashboard">Home</Link>
      </Menu.Item>
      <Menu.Item key="2" disabled={true}>
        Help
      </Menu.Item>
      <Menu.Item key="3" onClick={switchUsers}>
        Change User
      </Menu.Item>
      <Menu.Item key="4" onClick={() => authService.logout()}>
        Log Out
      </Menu.Item>
    </Menu>
  );
};

const Header = ({ displayMenu = true, backButton = false, ...props }) => {
  return (
    <div className="hero">
      {backButton && <BackButton destination={'/child/mission-control'} />}
      {displayMenu && (
        <Dropdown
          overlay={<ChildMenu clearUsers={props.clearUsers} />}
          trigger={['click']}
          className="menu-button"
        >
          <Button icon={<MenuOutlined />} type="text" />
        </Dropdown>
      )}
      <h1 className="header-text">STORY SQUAD</h1>
    </div>
  );
};
export default connect(null, {
  clearUsers: global.clearUsers,
})(Header);
