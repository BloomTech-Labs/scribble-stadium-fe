import React from 'react';
import { Header } from '../../common';
import { Row, Col, Button } from 'antd';
import matchup_bolt from '../../../assets/images/match_up_images/matchup_bolt.svg';

const RenderMatchUp = props => {
  return (
    <>
      <Header displayMenu={true} title="The Matchup" />
      <div className="matchup-container">
        <Row className="toprow">
          <Col className="green-box" xs={24} sm={13}>
            <div>
              <img src={matchup_bolt} alt="light bolt" />
            </div>
          </Col>

          <Col className="red-box" xs={24} sm={11}>
            <div>
              <img src={matchup_bolt} alt="light bolt" />
            </div>
          </Col>
        </Row>
        <Row className="bottomrow">
          <Col className="yellow-box" xs={24} sm={11}>
            <img src={matchup_bolt} alt="light bolt" />
          </Col>

          <Col className="blue-box" xs={24} sm={13}>
            <img src={matchup_bolt} alt="light bolt" />
          </Col>
        </Row>

        <Button className="back-button">Back</Button>

        <Button className="vote-button">Vote!</Button>
      </div>
    </>
  );
};
export default RenderMatchUp;
