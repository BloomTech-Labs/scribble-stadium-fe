import React, { useState, useEffect } from 'react';
import { Header } from '../../common';
import ChildFooter from '../../common/ChildFooter';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { InstructionsModal } from '../../common';
import { modalInstructions } from '../../../utils/helpers';
import change_your_avatar from '../../../assets/images/child_dashboard_images/change_your_avatar.svg';
import leaderboard_icon from '../../../assets/images/child_dashboard_images/leaderboard_icon.png';
import data from '../../../data.json';
import { connect } from 'react-redux';
import { getSubmissions } from '../../../api/index';

const RenderChildDashboard = () => {
  const history = useHistory();
  const [modalVisible, setModalVisible] = useState(false);

  const [submissionData, setSubmissionData] = useState([]);
  useEffect(() => {
    getSubmissions(1).then(res => {
      console.groupCollapsed('%cgetSubmissions', 'color: #CC5500');
      setSubmissionData(res.data);
      console.log(
        `%cgetSubmissions response: ${JSON.stringify(res)}`,
        'color: #2980B9'
      );
      console.groupEnd('getSubmissions');
    });
  }, []);

  const handleAcceptMission = e => {
    data.gameSession = true;
    history.push('/gamemode');
  };

  const handleTrophyRoom = e => {
    history.push('/gameplay/trophy-room');
  };

  const handleChangeAvatar = event => {
    history.push('/change-avatar');
  };

  const handleLeaderboard = e => {
    history.push('/leaderboard');
  };

  return (
    <div data-testid="child-dashboard">
      <Header
        displayMenu={true}
        title={'Scribble Stadium'}
        data-testid="child-dashboard"
      />
      <InstructionsModal
        modalVisible={modalVisible}
        handleCancel={() => {
          setModalVisible(false);
        }}
        handleOk={() => {
          setModalVisible(false);
        }}
        instructions={modalInstructions.childDash}
      />
      <div className="dash-container">
        <Row className="toprow">
          <Col
            className="accept-mission"
            xs={24}
            sm={12}
            onClick={handleAcceptMission}
          >
            {submissionData.length > 0 ? (
              <p className="accept-mission-text">RESUME THE MISSION!</p>
            ) : (
              <p className="accept-mission-text">ACCEPT THE MISSION!</p>
            )}
          </Col>
          <Col
            className="change-avatar"
            xs={24}
            sm={12}
            onClick={handleChangeAvatar}
          >
            <img
              className="child-dash-img"
              src={change_your_avatar}
              alt="Change Your Avatar Button"
            />
          </Col>
        </Row>
        <Row className="bottomrow">
          <Col
            className="leaderboard"
            xs={24}
            sm={12}
            onClick={handleLeaderboard}
          >
            <img
              className="child-dash-img"
              src={leaderboard_icon}
              alt="Leaderboard Button"
            />
          </Col>{' '}
          <Col
            className="trophy-room-button"
            xs={24}
            sm={12}
            onClick={handleTrophyRoom}
          >
            <p className="accept-mission-text">Trophy Room!</p>
          </Col>
        </Row>
      </div>
      <ChildFooter />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currActivity: state.currActivity,
    submissions: state.submissions,
  };
};

export default connect(mapStateToProps)(RenderChildDashboard);
