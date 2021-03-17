import React from 'react';
import { useHistory } from 'react-router-dom';

import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const DevToolsNew = props => {
  const { push } = useHistory();

  const SatHandler = () => {
    push('/saturday');
  };
  const SunHandler = () => {
    push('sunday');
  };
  const MonHandler = () => {
    push('/monday');
  };
  const TuesHandler = () => {
    push('tuesday');
  };
  const WedHandler = () => {
    push('wednesday');
  };
  const ThursHandler = () => {
    push('thursday');
  };
  const FriHandler = () => {
    push('friday');
  };

  const dropdown = (
    <Menu>
      <Menu.Item>
        <a target="_blank" onClick={SatHandler}>
          Saturday
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a target="_blank" onClick={SunHandler}>
          Sunday
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a target="_blank" onClick={MonHandler}>
          Monday
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a target="_blank" onClick={TuesHandler}>
          Tuesday
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a target="_blank" onClick={WedHandler}>
          Wednesday
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a target="_blank" onClick={ThursHandler}>
          Thursday
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a target="_blank" onClick={FriHandler}>
          Friday
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="dev-tools">
      <h2 className="dev-title">Developer Operations</h2>
      <p>
        What day of the week would you like to test, see the stages / actions /
        state, or learn more about?
      </p>
      <Dropdown overlay={dropdown}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Select a day ... <DownOutlined />
        </a>
      </Dropdown>
      <span>
        <Button type="dev-reset">Reset Game</Button>
      </span>
    </div>
  );
};

export default DevToolsNew;
