import React from 'react';

import { Link, useHistory } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'antd';
import { CountDown } from 'ant-design-pro/lib/CountDown';
import { MenuOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { global } from '../../state/actions';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import BackButton from '../common/BackButton';
import PropTypes from 'prop-types';

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
      <Menu.Item key="5">
        <Link to="/child/join">Join</Link>
      </Menu.Item>
    </Menu>
  );
};

const Header = ({
  displayMenu = true,
  backButton = false,
  countDown = false,
  pointsRemaining = false,
  ...props
}) => {
  // const targetTime = new Date().getTime() + 300;
  // CountDown component requires 'target' property, currently not functional
  return (
    <div className="hero">
      {backButton && <BackButton destination={'/child/mission-control'} />}
      {countDown && <CountDown className="countdown" />}
      {displayMenu && (
        <Dropdown
          overlay={<ChildMenu clearUsers={props.clearUsers} />}
          trigger={['click']}
          className="menu-button"
        >
          <Button className="menu" icon={<MenuOutlined />} type="default" />
        </Dropdown>
      )}
      {pointsRemaining && (
        <h2 className="points-remaining">POINTS REMAINING: {props.points}</h2>
      )}
      <h1 className="header-text">{props.title || 'STORY SQUAD'}</h1>
    </div>
  );
};
export default connect(null, {
  clearUsers: global.clearUsers,
})(Header);

Header.propTypes = {
  title: PropTypes.string,
};
