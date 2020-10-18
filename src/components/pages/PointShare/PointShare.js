import React, { useState } from 'react';
import { Header } from '../../common';
import { Row, Col } from 'antd';

import placeholder from '../../../assets/images/child_dashboard_images/change_your_avatar.svg';
import { CaretUpFilled, CaretDownFilled } from '@ant-design/icons';

const PointShare = props => {
  const [totalPoints_A, setTotalPoints_A] = useState(100);
  const [totalPoints_B, setTotalPoints_B] = useState(100);
  const [storyOnePoints, setStoryOnePoints] = useState(0);
  const [storyTwoPoints, setStoryTwoPoints] = useState(0);
  const [illustrationOnePoints, setIllustrationOnePoints] = useState(0);
  const [illustrationTwoPoints, setIllustrationTwoPoints] = useState(0);

  const incrementStoryPoints_A = () => {
    if (totalPoints_A > 0) {
      setStoryOnePoints(storyOnePoints + 1);
      setTotalPoints_A(totalPoints_A - 1);
    }
  };

  const decrementStoryPoints_A = () => {
    if (totalPoints_A > 0) {
      setStoryOnePoints(storyOnePoints - 1);
      setTotalPoints_A(totalPoints_A + 1);
    }
  };

  const incrementStoryPoints_B = () => {
    if (totalPoints_B > 0) {
      setStoryTwoPoints(storyTwoPoints + 1);
      setTotalPoints_B(totalPoints_B - 1);
    }
  };

  const decrementStoryPoints_B = () => {
    if (totalPoints_B > 0) {
      setStoryTwoPoints(storyTwoPoints - 1);
      setTotalPoints_B(totalPoints_B + 1);
    }
  };

  const incrementIllustrationPoints_A = () => {
    if (totalPoints_A > 0) {
      setIllustrationOnePoints(illustrationOnePoints + 1);
      setTotalPoints_A(totalPoints_A - 1);
    }
  };

  const decrementIllustrationPoints_A = () => {
    if (totalPoints_A > 0) {
      setIllustrationOnePoints(illustrationOnePoints - 1);
      setTotalPoints_A(totalPoints_A + 1);
    }
  };

  const incrementIllustrationPoints_B = () => {
    if (totalPoints_B > 0) {
      setIllustrationTwoPoints(illustrationTwoPoints + 1);
      setTotalPoints_B(totalPoints_B - 1);
    }
  };

  const decrementIllustrationPoints_B = () => {
    if (totalPoints_B > 0) {
      setIllustrationOnePoints(illustrationTwoPoints - 1);
      setTotalPoints_B(totalPoints_B + 1);
    }
  };

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
              <h3 className="points">{storyOnePoints}</h3>
              <CaretUpFilled onClick={incrementStoryPoints_A} />
              <CaretDownFilled onClick={decrementStoryPoints_A} />
            </div>
            <div className="submission-container">
              <img className="submission" src="" alt="Submission" />
              <h3 className="points">{illustrationOnePoints}</h3>
              <CaretUpFilled onClick={incrementIllustrationPoints_A} />
              <CaretDownFilled onClick={decrementIllustrationPoints_A} />
            </div>
          </Row>
          <Row className="teammate-two-points">
            <div className="submission-container">
              <img className="submission" src="" alt="Submission" />
              <h3 className="points">{storyTwoPoints}</h3>
              <CaretUpFilled onClick={incrementStoryPoints_B} />
              <CaretDownFilled onClick={decrementStoryPoints_B} />
            </div>
            <div className="submission-container">
              <img className="submission" src="" alt="Submission" />
              <h3 className="points">{illustrationTwoPoints}</h3>
              <CaretUpFilled onClick={incrementIllustrationPoints_B} />
              <CaretDownFilled onClick={decrementIllustrationPoints_B} />
            </div>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default PointShare;
