import React from 'react';
import { Header } from '../../common';
import { Row, Col, Checkbox } from 'antd';

import draw_icon from '../../../assets/icons/draw_icon.svg';
import read_icon from '../../../assets/icons/read_icon.svg';
import write_icon from '../../../assets/icons/write_icon.svg';

import '../../../styles/MissionControl.less';
const RenderMissionControl = props => {
  // function onChange(e) {
  //   console.log(`checked=${e.target.checked}`);
  // }

  return (
    <>
      <Header />
      <div className="mission-container">
        <Row className="main-row">
          <Col className="read" span={12}>
            <Checkbox className="checking-box" defaultChecked={false} />
            <img src={read_icon} alt="reading icon" />
            <p className="mission-control-text">Read</p>
          </Col>
          <Col className="write-and-draw" span={12}>
            <Row className="write">
              <Checkbox className="checking-box" defaultChecked={false} />

              <img src={write_icon} alt="writing icon" />
              <p className="mission-control-text">asdfeasWrite</p>
            </Row>
            <Row className="draw">
              <Checkbox className="checking-box" defaultChecked={false} />

              <img src={draw_icon} alt="drawing icon" />
              <p className="mission-control-text">Draw</p>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RenderMissionControl;
