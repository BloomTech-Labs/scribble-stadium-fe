import React from 'react';
import { Header } from '../../common';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import adventure_passport from '../../../assets/images/child_dashboard_images/adventure_passport.svg';
import change_your_avatar from '../../../assets/images/child_dashboard_images/change_your_avatar.svg';
import trophy_room from '../../../assets/images/child_dashboard_images/trophy_room.svg';

const RenderChildDashboard = props => {
  return (
    <>
      <Header />
      <div className="dash-container">
        <Row>
          <Col className="accept-mission" span={12}>
            <p className="accept-mission-text">
              <Link to="/child/mission-control">ACCEPT THE MISSION!</Link>
            </p>
          </Col>
          <Col className="change-avatar" span={12}>
            <img
              className="child-dash-img"
              src={change_your_avatar}
              alt="Change Your Avatar Button"
            />
          </Col>
        </Row>
        <Row>
          <Col className="adventure-passport" span={12}>
            <img
              className="child-dash-img"
              src={adventure_passport}
              alt="Adventure Passport Button"
            />
          </Col>
          <Col className="trophy-room" span={12}>
            <img
              className="child-dash-img"
              src={trophy_room}
              alt="Trophy Room Button"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RenderChildDashboard;
