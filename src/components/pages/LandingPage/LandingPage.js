import React from 'react';
import { Row, Col } from 'antd';
import { LoginContainer } from '../Login';
import { Header } from '../../common';

const LandingPage = () => {
  return (
    <>
      <Header />
      <Row id="head-row">
        <Col span={16}>
          <h6>
            Story Squad is a game where imagination comes to play. It’s where
            generating ideas scores big.
          </h6>
          <h6>
            Story Squad springs storytellers into action by partnering them up
            to participate in interactive & immersive creative challenges.
          </h6>
          <h6>
            Become a master of your craft by submitting original drawings &
            handwritten stories, receiving and giving real feedback, sharing
            points in a squad-vs-squad matchup, and finally see if you won.
          </h6>
          <h6>Ready?</h6>
        </Col>
        <Col span={8}>
          <LoginContainer />
        </Col>
      </Row>
      <Row>footer placeholder</Row>
    </>
  );
};

export default LandingPage;
