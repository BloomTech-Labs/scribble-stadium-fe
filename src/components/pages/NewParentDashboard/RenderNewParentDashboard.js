<<<<<<< refs/remotes/origin/main
import React, { useState } from 'react';
import { Layout, Tabs } from 'antd';
// import { useAuth0 } from '@auth0/auth0-react';
// import { getProfileData } from '../../../api';
=======
import React, { useEffect, useState } from 'react';
import { Layout, Row, Col } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import { getProfileData } from '../../../api';
>>>>>>> Removed Tabs.
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
  // const { user } = useAuth0();
  // const { setParent } = props;
  const [childrenAccounts] = useState(FAKE_CHILDREN);
  const [modalVisible, setModalVisible] = useState(false);
  const { Content } = Layout;
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
      {/* <Header > */}
      <ParentNavTopBar
        handlePlayGameButtonClick={evt => {
          evt.preventDefault();
          setModalVisible(true);
        }}
      />
      {/* </Header> */}
      <Layout className="newparent-dashboard">
        {/* TODO: add width control to containers, responsive sizes, add breakpoints  */}
        <Content>
          <Row gutter={[16, 16]}>
            <Col span={12} className="child-container">
              <NewChildCard props={props} />
            </Col>
            <Col span={12} className="renderWordCloud">
              <RenderWordCloud />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12} className="progress-container">
              <NewProgressCharts />
            </Col>
            <Col span={12} className="account-container">
              <AccountSettings />
            </Col>
          </Row>
        </Content>
        {/* <Footer> */}
        {/* </Footer> */}
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
