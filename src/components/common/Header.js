import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'antd';
import { CountDown } from 'ant-design-pro/lib/CountDown';
import {
  HomeOutlined,
  MenuOutlined,
  TrophyOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  TableOutlined,
} from '@ant-design/icons';
import { connect } from 'react-redux';
import { global } from '../../state/actions';
import { useAuth0 } from '@auth0/auth0-react';
import BackButton from '../common/BackButton';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

const ChildMenu = props => {
  const { push } = useHistory();
  const { logout } = useAuth0();

  const dashboard = () => {
    push('/dashboard');
  };

  const galleryRedirect = () => {
    push('/gallery/:id');
  };

  const leaderboardRedirect = () => {
    push('/leaderboard');
  };

  return (
    <Menu {...props} mode="inline" className="child-header-menu">
      <Menu.Item
        key="1"
        className="child-header-menu-item"
        onClick={dashboard}
        icon={<HomeOutlined className="child-header-menu-item" />}
      >
        Home
      </Menu.Item>
      <Menu.Item
        key="2"
        className="child-header-menu-item"
        onClick={leaderboardRedirect}
        icon={<TrophyOutlined className="child-header-menu-item" />}
      >
        Leaderboard
      </Menu.Item>
      <Menu.Item
        key="3"
        className="child-header-menu-item"
        onClick={galleryRedirect}
        icon={<TableOutlined className="child-header-menu-item" />}
      >
        My Gallery
      </Menu.Item>
      <Menu.Item
        key="4"
        className="child-header-menu-item"
        disabled={true}
        icon={<QuestionCircleOutlined className="child-header-menu-item" />}
      >
        Help
      </Menu.Item>
      <Menu.Item
        key="5"
        icon={<LogoutOutlined className="child-header-menu-item" />}
        className="child-header-menu-item"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </Menu.Item>
    </Menu>
  );
};

const Header = ({
  displayMenu = false,
  backButton = false,
  countDown = false,
  pointsRemaining = false,
  teamName = false,
  versus = false,
  pointsToWin = false,
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
          overlay={<ChildMenu />}
          trigger={['click']}
          className="menu-button"
        >
          <Button
            className="menu"
            className="child-header-button"
            icon={<MenuOutlined className="child-header-hamburger" />}
            type="default"
          />
        </Dropdown>
      )}
      {pointsRemaining && (
        <h2 className="points-remaining">POINTS REMAINING: {props.points}</h2>
      )}
      <h1 className="header-text">{props.title || 'SCRIBBLE STADIUM'}</h1>
      {teamName && <h2 className="team-name">{props.team.teamName}</h2>}
      {versus && (
        <h2 className="versus">
          {props.team.teamName} VS {}
        </h2>
      )}
      {pointsToWin && (
        <h3 className="points-to-win">201 POINTS NEEDED TO WIN!</h3>
      )}
    </div>
  );
};
export default connect(state => ({ team: state.team }), {
  clearUsers: global.clearUsers,
})(Header);
Header.propTypes = {
  title: PropTypes.string,
};
