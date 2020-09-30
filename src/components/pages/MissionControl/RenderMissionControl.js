import React from 'react';
import { Header } from '../../common';
import { Row, Col, Checkbox } from 'antd';
import { Link } from 'react-router-dom';

import draw_icon from '../../../assets/icons/draw_icon.svg';
import read_icon from '../../../assets/icons/read_icon.svg';
import write_icon from '../../../assets/icons/write_icon.svg';

const RenderMissionControl = props => {
  function handleChecked(e) {
    console.log(`checked=${e.target.checked}`);
  }

  return (
    <>
      <Header title="MISSION" />
      <div className="mission-container">
        <Row className="main-row">
          <Col className="read" span={12}>
            <Checkbox
              className="checking-box"
              defaultChecked={false}
              onChange={handleChecked}
            />
            <Col className="image-and-text-container">
              <img src={read_icon} alt="reading icon" />
              <p className="mission-control-text">
                <Link to="/child/story">Read</Link>
              </p>
            </Col>
          </Col>
          <Col className="write-and-draw" span={12}>
            <Row className="write">
              <Checkbox
                className="checking-box"
                defaultChecked={false}
                onChange={handleChecked}
              />
              <Col className="image-and-text-container">
                <img src={write_icon} alt="writing icon" />
                <p className="mission-control-text">
                  <Link to="writing-sub">Write</Link>
                </p>
              </Col>
            </Row>
            <Row className="draw">
              <Checkbox
                className="draw-checking-box"
                defaultChecked={false}
                onChange={handleChecked}
              />
              <Col className="image-and-text-container">
                <img src={draw_icon} alt="drawing icon" />
                <p className="mission-control-text">Draw</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RenderMissionControl;
