import React from 'react';
import { Row, Col } from 'antd';

const Leaderboard = props => {
  return (
    <div>
      <Row>
        <Col h2={8}>Placement</Col>
        <Col h2={8}>Username</Col>
        <Col h2={8}>Score</Col>
      </Row>
      <Row>
        <Col>Stuff</Col>
      </Row>
    </div>
  );
};

export default Leaderboard;
