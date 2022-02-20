import React, { useEffect, useState } from 'react';
import { Layout, Tabs } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import { getProfileData } from '../../../api';
import ParentNavTopBar from '../../common/ParentNavTopBar';
import NewProgressCharts from '../../common/NewProgressCharts';
import NewChildCard from '../../common/NewChildCard';
import AccountSettings from '../AccountSettings/AccountSettingsContainer';
import { connect } from 'react-redux';
import { setParent } from '../../../state/actions/parentActions';
import RenderWordCloud from '../WordCloud';
import ParentFooter from '../../common/ParentFooter';
import ChooseChildModal from './ChooseChildModal';
import { useHistory } from 'react-router-dom';
import ParentDashboardNav from '../../common/ParentDashboardNav';
// TEMPORARY HARD CODE - import of image assets - remove when pulling state from BE or globally
import pinkyWinky from '../../../assets/images/hero_images/hero10.png';
import submarineBoy from '../../../assets/images/hero_images/hero3.png';
import dad from '../../../assets/images/hero_images/hero5.png';

const RenderNewParentDashboard = props => {
  const FAKE_CHILDREN = [
    {
      ID: 0,
      Name: 'Pinky Winky',
      AvatarURL: pinkyWinky,
    },
    {
      ID: 1,
      Name: 'Submarine Boy',
      AvatarURL: submarineBoy,
    },
    {
      ID: 2,
      Name: 'Dad',
      AvatarURL: dad,
    },
  ];

  const history = useHistory();
  const { user } = useAuth0();
  const { setParent } = props;
  const [childrenAccounts, setChildrenAccounts] = useState(FAKE_CHILDREN);
  const [modalVisible, setModalVisible] = useState(false);
  const { TabPane } = Tabs;

  useEffect(() => {
    getProfileData()
      .then(res => {
        setParent({
          ...res[0],
          children: res.filter(user => user.type !== 'Parent'),
        });
      })
      .catch(err => {
        console.log('error retrieving profile data', err.message);
      });
  }, [setParent, user]);
  return (
    <div id="parent-dashboard-page">
      <Layout className="newparent-dashboard">
        <ParentNavTopBar
          handlePlayGameButtonClick={evt => {
            evt.preventDefault();
            setModalVisible(true);
          }}
        />
        <Layout>
          <div className="card-container">
            <Tabs type="card" centered defaultActiveKey="1001">
              <TabPane key="1001" tab="Word Cloud">
                <div className="renderWordCloud">
                  <RenderWordCloud />
                </div>
              </TabPane>
              <TabPane key="1002" tab="Player Progress">
                <div className="progress-container">
                  <NewProgressCharts />
                </div>
              </TabPane>
              <TabPane key="1003" tab="Player(s)">
                <div className="child-container">
                  <NewChildCard props={props} />
                </div>
              </TabPane>
              <TabPane key="1004" tab="Settings">
                <div>
                  <AccountSettings />
                </div>
              </TabPane>
            </Tabs>
          </div>
        </Layout>
      </Layout>
      <ParentFooter />

      {modalVisible && (
        <ChooseChildModal
          childrenAccounts={childrenAccounts}
          handleCharacterClick={(evt, childId) => {
            history.push('/dashboard');
          }}
        />
      )}
    </div>
  );
};

export default connect(null, { setParent: setParent })(
  RenderNewParentDashboard
);
