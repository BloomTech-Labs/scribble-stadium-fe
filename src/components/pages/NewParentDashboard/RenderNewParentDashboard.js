import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { getProfileData } from '../../../api';
import ParentNavTopBar from '../../common/ParentNavTopBar';
import NewProgressCharts from '../../common/NewProgressCharts';
import NewChildCard from '../../common/NewChildCard';
//import RenderEditPlayers from '../../pages/EditPlayers/RenderEditPlayers';
import AccountSettings from '../AccountSettings/AccountSettingsContainer';
import { connect } from 'react-redux';
import { setParent } from '../../../state/actions/parentActions';
import { PlusCircleOutlined, EditOutlined } from '@ant-design/icons';

const RenderNewParentDashboard = props => {
  const { authState } = useOktaAuth();
  const { setParent } = props;

  useEffect(() => {
    getProfileData(authState).then(res => {
      setParent({
        ...res[0],
        children: res.filter(user => user.type !== 'Parent'),
      });
    });
  }, [setParent, authState]);

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
            <button>
              <PlusCircleOutlined /> Add Player
            </button>
            <button /*onClick={RenderEditPlayers}*/>
              <EditOutlined /> Edit Players
            </button>
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
};

export default connect(null, { setParent: setParent })(
  RenderNewParentDashboard
);
