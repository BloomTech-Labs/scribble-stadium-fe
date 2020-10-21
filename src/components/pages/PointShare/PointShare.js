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
    // var submittedTotal =
    //     storyOnePoints +
    //     storyTwoPoints +
    //     illustrationOnePoints +
    //     illustrationTwoPoints;
    // setTotalPoints(100 - submittedTotal);
  };

  // const formSubmit = () => {};

  return (
    <>
      {/* Header requires countDown={true}  */}
      <Header
        title="SHARE POINTS"
        pointsRemaining={true}
        points={totalPoints}
      />
      <div className="point-share-container">
        <Row className="team-row">
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
                  value={storyOnePoints}
                  min={0}
                  step={5}
                  onChange={value => {
                    setStoryOnePoints(value);
                    setTotalPoints(
                      100 -
                        (value +
                          storyTwoPoints +
                          illustrationOnePoints +
                          illustrationTwoPoints)
                    );
                    checkValues();
                  }}
                />
              </div>
              <div className="submission-container">
                <img className="submission" src="" alt="Submission" />
                <InputNumber
                  value={illustrationOnePoints}
                  min={0}
                  step={5}
                  onChange={value => {
                    setIllustrationOnePoints(value);
                    setTotalPoints(
                      100 -
                        (value +
                          storyTwoPoints +
                          storyOnePoints +
                          illustrationTwoPoints)
                    );
                    checkValues();
                  }}
                />
              </div>
            </Row>
            <Row className="teammate-two-points">
              <div className="submission-container">
                <img className="submission" src="" alt="Submission" />
                <InputNumber
                  value={storyTwoPoints}
                  min={0}
                  step={5}
                  onChange={value => {
                    setStoryTwoPoints(value);
                    setTotalPoints(
                      100 -
                        (value +
                          storyOnePoints +
                          illustrationOnePoints +
                          illustrationTwoPoints)
                    );
                    checkValues();
                  }}
                />
              </div>
              <div className="submission-container">
                <img className="submission" src="" alt="Submission" />
                <InputNumber
                  value={illustrationTwoPoints}
                  min={0}
                  step={5}
                  onChange={value => {
                    setIllustrationTwoPoints(value);
                    setTotalPoints(
                      100 -
                        (value +
                          storyTwoPoints +
                          illustrationOnePoints +
                          storyOnePoints)
                    );
                    checkValues();
                  }}
                />
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(PointShare);
