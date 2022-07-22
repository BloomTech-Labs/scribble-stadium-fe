

import React, { useEffect, useState } from 'react';
import { Layout, Row, Col } from 'antd';
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
// TEMPORARY HARD CODE - import of image assets - remove when pulling state from BE or globally
import pinkyWinky from '../../../assets/images/hero_images/hero10.png';
import submarineBoy from '../../../assets/images/hero_images/hero3.png';
import dad from '../../../assets/images/hero_images/hero5.png';

const RenderNewParentDashboard = () => {
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getProfile(user.sub));
    }
  }, [isAuthenticated]);

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

      <Layout className="newparent-dashboard">
        {/* TODO: add width control to containers, responsive sizes, add breakpoints  */}
        <Content className="grid-container">
          <Row gutter={[16, { xs: 8, sm: 14, md: 18, lg: 32 }]}>
            <Col className="child-column" sm={{}} md={{ span: 12 }}>
              <NewChildCard props={props} className="child-container" />
            </Col>
            <Col sm={{}} md={{ span: 12 }}>
              <AccountSettings className="account-container" />
            </Col>
          </Row>
          <Row gutter={[16, { xs: 8, sm: 14, md: 18, lg: 32 }]}>
            <Col sm={{}} md={{ span: 12 }}>
              <NewProgressCharts className="progress-container" />
            </Col>
            <Col sm={{}} md={{ span: 12 }}>
              <RenderWordCloud className="renderWordCloud" />
            </Col>
          </Row>
        </Content>
      </Layout>
      <ParentFooter />
      {modalVisible && (
        <ChooseChildModal
          childrenAccounts={childrenAccounts}
          handleCharacterClick={() => {
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
