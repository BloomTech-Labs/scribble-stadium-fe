import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { dayData } from './dayData';

const DevToolsNew = props => {
  let { dayID } = useParams();
  const { push } = useHistory();

  const dayHandler = () => {
    push(`/dev/day/${dayID}`);
  };

  const dropdown = (
    <Menu>
      {dayData.map(day => {
        return (
          <Menu.Item>
            <a target="_blank" onClick={dayHandler}>
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
