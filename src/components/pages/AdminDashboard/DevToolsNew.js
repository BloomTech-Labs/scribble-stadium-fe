import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { devMode } from '../../../state/actions/index';

const DevToolsNew = ({ devMode, setDevMode }) => {
  const { push } = useHistory();

  const handleSatMon = e => {
    push('/dev/day/1-3');
  };

  const handleTues = e => {
    push('/dev/day/4');
  };

  const handleWed = e => {
    push('/dev/day/5');
  };

  const handleThurs = e => {
    push('/dev/day/6');
  };

  const handleFri = e => {
    push('/dev/day/7');
  };

  const handleDevMode = () => {
    setDevMode(!devMode.isDevModeActive);
  };

  const dropdown = (
    <Menu>
      <Menu.Item>
        <a target="_blank" onClick={handleSatMon}>
          Saturday - Monday
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" onClick={handleTues}>
          Tuesday
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" onClick={handleWed}>
          Wednesday
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" onClick={handleThurs}>
          Thursday
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" onClick={handleFri}>
          Friday
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="dev-ops-page">
      <div className="dev-tools">
        <h2 className="dev-title">Developer Operations</h2>
        <p>
          Select a day to test and see the stages, phases, actions, and state
          associated with that day.
        </p>
        <div className="dev-mode-buttons">
          <Button style={{ margin: '8px' }} onClick={handleDevMode}>
            {devMode.isDevModeActive ? 'Deactivate' : 'Activate'} developer mode
          </Button>
          {devMode.isDevModeActive ? (
            <Dropdown style={{ margin: '8px' }} overlay={dropdown}>
              <a
                className="ant-dropdown-link"
                onClick={e => e.preventDefault()}
              >
                Select a day ... <DownOutlined />
              </a>
            </Dropdown>
          ) : (
            <Dropdown style={{ margin: '8px' }} disabled overlay={dropdown}>
              <a
                className="ant-dropdown-link"
                onClick={e => e.preventDefault()}
              >
                Select a day ... <DownOutlined />
              </a>
            </Dropdown>
          )}
        </div>
      </div>
    </div>
  );
};

export default connect(
  state => ({
    devMode: state.devMode,
  }),
  { setDevMode: devMode.setDevMode }
)(DevToolsNew);
