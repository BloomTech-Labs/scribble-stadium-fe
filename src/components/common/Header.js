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

  const childRedirect = () => {
    push('/child/dashboard');
  };

  const galleryRedirect = () => {
    push('/gallery/:id');
  };

  const leaderboardRedirect = () => {
    push('/child/leaderboard');
  };

  return (
    <Menu
      {...props}
      mode="inline"
      //  theme="dark"
      style={styles.menu}
    >
      <Menu.Item
        key="1"
        style={styles.menuItem}
        onClick={childRedirect}
        icon={<HomeOutlined style={styles.menuItem} />}
      >
        Home
      </Menu.Item>
      <Menu.Item
        key="2"
        style={styles.menuItem}
        onClick={leaderboardRedirect}
        icon={<TrophyOutlined style={styles.menuItem} />}
      >
        Leaderboard
      </Menu.Item>
      <Menu.Item
        key="3"
        style={styles.menuItem}
        onClick={galleryRedirect}
        icon={<TableOutlined style={styles.menuItem} />}
      >
        My Gallery
      </Menu.Item>
      <Menu.Item
        key="4"
        style={styles.menuItem}
        disabled={true}
        icon={<QuestionCircleOutlined style={styles.menuItem} />}
      >
        Help
      </Menu.Item>
      <Menu.Item
        key="5"
        icon={<LogoutOutlined style={styles.menuItem} />}
        style={styles.menuItem}
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </Menu.Item>
    </Menu>
  );
};
//styling for child menu items
const styles = {
  menu: {
    opacity: '0.9',
    backgroundColor: '#FF845D',
    clipPath:
      'polygon(100% 100%, 0 100%, 0 25%, 25% 25%, 0 0, 50% 25%, 100% 25%)',
    height: 300,
    width: 250,
    left: 35,
    paddingTop: 80,
  },
  menuItem: {
    fontWeight: 'bolder',
    fontFamily: 'bangers',
    textShadow: '-2px 0 white, 0 2px white, 2px 0 white, 0 -2px white',
    color: 'black',
    letterSpacing: 5,
    lineHeight: 1.2,
    fontSize: 25,
  },
  hamburger: {
    color: '#231F20',
    fontSize: 30,
  },
  button: {
    border: '#231F20 solid 2px',
    marginLeft: 5,
    height: 40,
    width: 40,
  },
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
          overlay={<ChildMenu clearUsers={props.clearUsers} />}
          trigger={['click']}
          className="menu-button"
        >
          <Button
            className="menu"
            style={styles.button}
            icon={<MenuOutlined style={styles.hamburger} />}
            type="default"
          />
        </Dropdown>
      )}
      {pointsRemaining && (
        <h2 className="points-remaining">POINTS REMAINING: {props.points}</h2>
      )}
      <h1 className="header-text">{props.title || 'STORY SQUAD'}</h1>
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
