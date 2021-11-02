import React, { useState } from 'react';
import { Header } from '../../common';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { InstructionsModal } from '../../common';
import { modalInstructions } from '../../../utils/helpers';
import { HUD } from '../HeadsUpDisplay/index';
import Explosion from '../../../assets/images/gamemodeimg/explosion.png';
// import adventure_passport from '../../../assets/images/child_dashboard_images/adventure_passport.svg';
import change_your_avatar from '../../../assets/images/child_dashboard_images/change_your_avatar.svg';
import leaderboard_icon from '../../../assets/images/child_dashboard_images/leaderboard_icon.png';

const RenderChildDashboard = props => {
  const { push } = useHistory();
  const [modalVisible, setModalVisible] = useState(false);

  const handleAcceptMission = e => {
    push('/gamemode');
  };

  const handleTrophyRoom = e => {
    push('/gameplay/trophy-room');
  };

  const handleChangeAvatar = event => {
    push('/change-avatar');
  };

  const handleLeaderboard = e => {
    push('/leaderboard');
  };

  return (
    <>
      <Header displayMenu={true} title={'Scribble Stadium'} />
      <HUD
        completedActivity={['Read', 'Draw', 'Write']}
        currentActivity={'Squad Up'}
        currentBar={'bar2'}
      />
      <InstructionsModal //This is the pop up that happens on the child dashboard stop at one pop up
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
            <p className="accept-mission-text">ACCEPT THE MISSION!</p>
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
              // This icon will need to be changed to an inhouse icon, this is just imported as a placeholder //
              src={leaderboard_icon}
              alt="Leaderboard Button"
            />
          </Col>{' '}
          <Col
            className="adventure-passport"
            xs={24}
            sm={12}
            onClick={handleTrophyRoom}
          >
            <img className="trophy-explosion" src={Explosion} alt="explosion" />
            <p className="accept-mission-text">Trophy Room!</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RenderChildDashboard;
