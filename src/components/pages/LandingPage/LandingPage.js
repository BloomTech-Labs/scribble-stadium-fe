import React from 'react';
import { Row, Col } from 'antd';
import { LoginContainer } from '../Login';
import { Header } from '../../common';

const LandingPage = () => {
  return (
    <>
      <Header displayMenu={false} />
      <Row id="head-row">
        <Col span={16}>
          <p>
            Story Squad is a game where imagination comes to play. It’s where
            generating ideas scores big.
          </p>
          <p>
            Story Squad springs storytellers into action by partnering them up
            to participate in interactive & immersive creative challenges.
          </p>
          <p>
            Become a master of your craft by submitting original drawings &
            handwritten stories, receiving and giving real feedback, sharing
            points in a squad-vs-squad matchup, and finally see if you won.
          </p>
          <p>Ready?</p>
        </Col>
        <Col span={8}>
          <LoginContainer />
        </Col>
      </Row>
    </>
  );
};

export default LandingPage;
