import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Card } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import ParentNavTopBar from '../../common/ParentNavTopBar';
import NewProgressCharts from '../../common/NewProgressCharts';
import NewChildCard from '../../common/NewChildCard';
//import RenderEditPlayers from '../../pages/EditPlayers/RenderEditPlayers';
import AccountSettings from '../AccountSettings/AccountSettingsContainer';

export default function RenderNewParentDashboard(props) {
  return (
    <div>
      <Layout className="newparent-dashboard">
        <ParentNavTopBar />

        <Layout>
          <div className="progress-container">
            <NewProgressCharts />
          </div>
          <div className="Players">
            <h2>Players</h2>
            <button>Add Player</button>{' '}
            <button /*onClick={RenderEditPlayers}*/>Edit Players</button>
          </div>
          <div className="child-container">
            <NewChildCard props={props} />
          </div>
          <div>
            <AccountSettings />
          </div>
        </Layout>
      </Layout>
    </div>
  );
}
