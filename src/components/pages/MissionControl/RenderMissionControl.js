import React from 'react';
import { Header } from '../../common';
import { Row, Col } from 'antd';

import '../../../styles/MissionControl.less';
const RenderMissionControl = props => {
  return (
    <>
      <Header />
      <div className="mission-container">
        <Row className="main-row">
          <Col className="read" span={12}>
            <p className="mission-control-text">Read</p>
          </Col>
          <Col className="write-and-draw" span={12}>
            <Row className="write">
              <p className="mission-control-text">Write</p>
            </Row>
            <Row className="draw">
              <p className="mission-control-text">Draw</p>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RenderMissionControl;
