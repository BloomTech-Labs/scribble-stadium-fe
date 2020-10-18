import React from 'react';
import { Header } from '../../common';
import { Row, Col } from 'antd';

const SquadUp = props => {
  return (
    <>
      <Header title="JOIN THE SQUAD" />
      <div className="point-share-container">
        <Row className="squad-container">
          <Col className="squad-one" xs={12} sm={12}></Col>
          <Col className="squad-two" xs={12} sm={12}></Col>
        </Row>
      </div>
    </>
  );
};

export default SquadUp;
