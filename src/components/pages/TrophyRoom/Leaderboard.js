import React, { useState } from 'react';
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
  { name: 'Yaraz', score: 502 },
];

Data.sort((a, b) => {
  // Sorts based on score value
  return b.score - a.score;
});

const Leaderboard = () => {
  const [num, setnum] = useState(10);

  return (
    <div>
      <Row>
        <Col span={8}>
          <h2>Placement</h2>
        </Col>
        <Col span={8}>
          <h2>Username</h2>
        </Col>
        <Col span={8}>
          <h2>Score</h2>
        </Col>
      </Row>
      {
        //*Index goes for however long the data is needs to be limited
      }
      {Data.slice(0, num).map(({ name, score }, index) => (
        <Row>
          <Col span={8}>{index + 1}</Col>
          <Col span={8}>{name}</Col>
          <Col span={8}>{score}</Col>
        </Row>
      ))}
      <h1 onClick={() => setnum(5)}>5</h1>
      <h1 onClick={() => setnum(10)}>10</h1>
      <h1 onClick={() => setnum(50)}>50</h1>
    </div>
  );
};

export default Leaderboard;
