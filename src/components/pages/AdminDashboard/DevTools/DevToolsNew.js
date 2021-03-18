import React from 'react';
import { useHistory } from 'react-router-dom';

import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { dayData } from './dayData';

const DevToolsNew = props => {
  const { push } = useHistory();

  const dayHandler = e => {
    push(`/dev/day/${e.target.name}`);
  };

  const dropdown = (
    <Menu>
      {dayData.map(day => {
        return (
          <Menu.Item>
            <a target="_blank" name={day.dayID} onClick={dayHandler}>
              {day.dayName}
            </a>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <div className="dev-tools">
      <h2 className="dev-title">Developer Operations</h2>
      <p>
        Select a day to test and see the stages, phases, actions, and state
        associated with that day.
      </p>
      <Dropdown overlay={dropdown}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Select a day ... <DownOutlined />
        </a>
      </Dropdown>
      <span>
        <Button style={{ margin: '2%' }} type="dev-reset">
          Reset Game
        </Button>
      </span>
    </div>
  );
};

export default DevToolsNew;
