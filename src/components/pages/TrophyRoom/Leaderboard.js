import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { Button } from '../../common';

const Data = [
  // Test data
  { name: 'Jack', score: 500, total: 494 },
  { name: 'Matt', score: 429, total: 22 },
  { name: 'Sam', score: 750, total: 512 },
  { name: 'Liz', score: 720, total: 592 },
  { name: 'Tim', score: 130, total: 2812 },
  { name: 'Fizz', score: 590, total: 29182 },
  { name: 'Alex', score: 40, total: 38212 },
  { name: 'Pam', score: 150, total: 2910 },
  { name: 'Opa', score: 10, total: 429 },
  { name: 'Yan', score: 1500, total: 5032 },
  { name: 'Yaraz', score: 502, total: 3202 },
  { name: 'Ahri', score: 4800, total: 242 },
  { name: 'Akali', score: 3150, total: 642 },
  { name: 'Alistar', score: 1350, total: 202 },
  { name: 'Amumu', score: 450, total: 520 },
];

const Leaderboard = () => {
  const [num, setnum] = useState(10);
  const [sort, setSort] = useState(null);

  const Sort = e => {
    if (sort === false) {
      Data.sort((a, b) => {
        return b.total - a.total;
      });
    } else {
      Data.sort((a, b) => {
        return b.score - a.score;
      });
    }
  };

  return (
    <div className="leaderboard">
      <Row justify="center">
        <Col span={4}>
          <h2>Placement</h2>
        </Col>
        <Col span={4}>
          <h2>Username</h2>
        </Col>
        <Col span={4}>
          <h2>Score</h2>
        </Col>
        <Col span={4}>
          <h2>Total</h2>
        </Col>
      </Row>
      {
        //*Index goes for however long the data is needs to be limited
      }
      {Data.slice(0, num).map(({ name, score, total }, index) => (
        <Row justify="center">
          <Col span={4}>{index + 1}</Col>
          <Col span={4}>{name}</Col>
          <Col span={4}>{score}</Col>
          <Col span={4}>{total}</Col>
        </Row>
      ))}
      <Button handleClick={() => setnum(10)} buttonText="15" />
      <Button handleClick={() => setnum(50)} buttonText="50" />
      <Button handleClick={() => Sort(setSort(true))} buttonText="Total" />
      <Button handleClick={() => Sort(setSort(false))} buttonText="Score" />
    </div>
  );
};

export default Leaderboard;
