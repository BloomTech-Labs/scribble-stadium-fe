import React from 'react';
import { Header } from '../../common';
import { Row, Col, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import draw_icon from '../../../assets/icons/draw_icon.svg';
import read_icon from '../../../assets/icons/read_icon.svg';
import write_icon from '../../../assets/icons/write_icon.svg';

const RenderMissionControl = props => {
  const { push } = useHistory();

  function handleChecked(e) {
    console.log(`checked=${e.target.checked}`);
  }

  const handleReadStory = e => {
    console.log('get to reading!!!');
    push('/child/story');
  };

  return (
    <>
      <Header />
      <div className="mission-container">
        <Row className="main-row">
          <Col className="read" span={12} onClick={handleReadStory}>
            <Checkbox
              className="checking-box"
              defaultChecked={false}
              onChange={handleChecked}
            />
            <Col className="image-and-text-container">
              <img src={read_icon} alt="reading icon" />
              <p className="mission-control-text">Read</p>
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
                <p className="mission-control-text">Write</p>
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
