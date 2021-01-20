import React from 'react';
import { Row, Col } from 'antd';

const Data = [
  // Test data
  { name: 'Jack', score: 500 },
  { name: 'Matt', score: 429 },
  { name: 'Sam', score: 750 },
  { name: 'Liz', score: 720 },
  { name: 'Tim', score: 130 },
  { name: 'Fizz', score: 590 },
  { name: 'Alex', score: 40 },
  { name: 'Pam', score: 150 },
  { name: 'Opa', score: 10 },
  { name: 'Yan', score: 1500 },
];

Data.sort((a, b) => {
  // Sorts based on score value
  return b.score - a.score;
});

const Leaderboard = props => {
  return (
    <div>
      <Row>
        <Col span={8}>Placement</Col>
        <Col span={8}>Username</Col>
        <Col span={8}>Score</Col>
      </Row>
      {console.log(Data.length)}
      {Data.map(({ placement, name, score }) => (
        <Row>
          {/* <Col span={8}>{placement}</Col> */}
          <Col span={8}>{name}</Col>
          <Col span={8}>{score}</Col>
        </Row>
      ))}
    </div>
  );
};

export default Leaderboard;
