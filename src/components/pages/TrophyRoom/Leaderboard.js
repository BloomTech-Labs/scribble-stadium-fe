import React, { useState, useEffect, useMemo } from 'react';
import { Row, Col } from 'antd';
import { Button } from '../../common';
import { getLeaderboard } from '../../../api';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';

const Leaderboard = () => {
  const { authState } = useOktaAuth();
  const [Data, setDataInfo] = useState([]);
  const [num, setnum] = useState(10);
  const [change, setChange] = useState(0);

  useEffect(() => {
    getLeaderboard(authState).then(res => {
      console.log(res);
      res.Total_Points = res.WritingPoints + res.DrawingPoints;
      setDataInfo(res);
    });
  }, [authState]);

  useEffect(() => {
    if (change === 0) {
      Data.sort((a, b) => {
        return b.Total_Points - a.Total_Points;
      });
    }
    if (change === 1) {
      Data.sort((a, b) => {
        return b.Total_Points - a.Total_Points;
      });
    } else if (change === 2) {
      Data.sort((a, b) => {
        return b.WritingPoints - a.WritingPoints;
      });
    } else if (change === 3) {
      Data.sort((a, b) => {
        return b.DrawingPoints - a.DrawingPoints;
      });
    }
  }, [Data, change]);

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
          <h2>Writing Points</h2>
        </Col>
        <Col span={4}>
          <h2>Drawing Points</h2>
        </Col>
        <Col span={4}>
          <h2>Total</h2>
        </Col>
      </Row>
      {Data.slice(0, num).map(
        ({ id, Name, Total_Points, WritingPoints, DrawingPoints }, index) => (
          <Row key={id} justify="center">
            <Col span={4}>{index + 1}</Col>
            <Col span={4}>{Name}</Col>
            <Col span={4}>{WritingPoints}</Col>
            <Col span={4}>{DrawingPoints}</Col>
            <Col span={4}>{Total_Points}</Col>
          </Row>
        )
      )}
      <h4>Sort By</h4>
      <Button handleClick={() => setChange(1)} buttonText="Total" />
      <Button handleClick={() => setChange(2)} buttonText="Drawing" />
      <Button handleClick={() => setChange(3)} buttonText="Writing" />

      <Button handleClick={() => setnum(num + 10)} buttonText="Show more" />
    </div>
  );
};

export default Leaderboard;
