import React, { useState } from 'react';
import { Header } from '../../common';
import { Row, Col, InputNumber, Button } from 'antd';
import { connect } from 'react-redux';

import placeholder from '../../../assets/images/child_dashboard_images/change_your_avatar.svg';

const PointShare = props => {
  const [totalPoints, setTotalPoints] = useState(100);
  const [storyOnePoints, setStoryOnePoints] = useState(0);
  const [storyTwoPoints, setStoryTwoPoints] = useState(0);
  const [illustrationOnePoints, setIllustrationOnePoints] = useState(0);
  const [illustrationTwoPoints, setIllustrationTwoPoints] = useState(0);

  const checkValues = () => {
    setTotalPoints(prevState => {
      var submittedTotal =
        storyOnePoints +
        storyTwoPoints +
        illustrationOnePoints +
        illustrationTwoPoints;
      if (submittedTotal > 100) {
        return prevState;
      } else {
        // update header prop
      }
    });
  };

  const formSubmit = () => {};

  return (
    <>
      <Header title="SHARE POINTS" />
      <Row className="main-row">
        <Col className="squad-col" span={6}>
          <Row className="teammate-one">
            <img
              className="teammate-one-avatar"
              src={placeholder}
              alt="Child Avatar"
            />
          </Row>
          <Row className="teammate-two">
            <img
              className="teammate-one-avatar"
              src={placeholder}
              alt="Child Avatar"
            />
          </Row>
        </Col>
        <Col className="points-col" span={18}>
          <Row className="teammate-one-points">
            <div className="submission-container">
              <img className="submission" src="" alt="Submission" />
              <InputNumber
                defaultValue={storyOnePoints}
                min={10}
                step={5}
                onChange={checkValues}
                onClick={event => setStoryOnePoints(event.target.value)}
              />
            </div>
            <div className="submission-container">
              <img className="submission" src="" alt="Submission" />
              <InputNumber
                defaultValue={illustrationOnePoints}
                min={10}
                step={5}
                onChange={checkValues}
                onClick={event => setIllustrationOnePoints(event.target.value)}
              />
            </div>
          </Row>
          <Row className="teammate-two-points">
            <div className="submission-container">
              <img className="submission" src="" alt="Submission" />
              <InputNumber
                defaultValue={storyTwoPoints}
                min={10}
                step={5}
                onChange={checkValues}
                onClick={event => setStoryTwoPoints(event.target.value)}
              />
            </div>
            <div className="submission-container">
              <img className="submission" src="" alt="Submission" />
              <InputNumber
                defaultValue={illustrationTwoPoints}
                min={10}
                step={5}
                onChange={checkValues}
                onClick={event => setIllustrationTwoPoints(event.target.value)}
              />
            </div>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(PointShare);
