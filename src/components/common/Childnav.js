import React from 'react';
import { Menu, Dropdown } from 'antd';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { connect } from 'react-redux';
import { global } from '../../state/actions';
import parent_avatar from '../../assets/icons/parent_avatar.svg';

const ChildHeader = props => {
  const { push } = useHistory();
  // const { authService } = useOktaAuth(); // https://github.com/okta/okta-react/blob/okta-react-4.0.0/README.md#migrating-from-3x-to-4x
  // augment "oktaAuth" to behave like "authService"
  const { authState, oktaAuth } = useOktaAuth();
  oktaAuth.getUser = oktaAuth.token.getUserInfo;
  oktaAuth.logout = oktaAuth.signOut;
  oktaAuth.isAuthenticated = authState.isAuthenticated;
  const authService = oktaAuth;
  // end augmentation

  const switchUsers = () => {
    props.clearUsers();
    push('/');
  };

  return (
    <Menu>
      <Menu.Item key="1" onClick={() => push('/')}>
        Home
      </Menu.Item>
      <Menu.Item key="2" onClick={() => push('/child/help')}>
        Help
      </Menu.Item>
      <Menu.Item key="3" onClick={switchUsers}>
        Change User
      </Menu.Item>
      {/* we dont want these menu items to be available unless the child has selected their profile */}
      {props.child.id !== null && (
        <>
          <Menu.Item key="4" onClick={() => push('/child/join')}>
            Squad
          </Menu.Item>
          <Menu.Item key="5" onClick={() => push('/child/match-up')}>
            Match Up
          </Menu.Item>
        </>
      )}
      ;
      <Menu.Item key="6" onClick={() => authService.logout()}>
        Logout
      </Menu.Item>
    </Menu>
  );
};

const ChildNav = props => {
  const history = useHistory();
  // hide navigation menu on certain pages
  const showNav = () => {
    switch (history.location.pathname) {
      case '':
      case '/login':
        return false;
      default:
        return true;
    }
  };
  return (
    <header>
      <h1>STORY SQUAD</h1>
      {showNav() && (
        <nav>
          <Dropdown
            overlay={
              <ChildHeader clearUsers={props.clearUsers} child={props.child} />
            }
            trigger={['hover']}
            placement="bottomCenter"
          >
            <a
              className="parent-avatar"
              data-testid="parent-avatar"
              onClick={e => e.preventDefault()}
              href={'/'}
            >
              <img src={parent_avatar} alt="Dropdown Menu" />
            </a>
          </Dropdown>
        </nav>
      )}
    </header>
  );
};

export default connect(state => ({ child: state.child }), {
  clearUsers: global.clearUsers,
})(ChildNav);
