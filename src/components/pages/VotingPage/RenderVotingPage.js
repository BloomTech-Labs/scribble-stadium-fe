import React from 'react';
import { Header } from '../../common';
import { Row, Col } from 'antd';

const RenderVotingPage = props => {
  return (
    <>
      <Header title="VOTE FOR YOUR FAVORITE STORY" />

      <div className="voting-container">
        <Row className="main-row">
          <Col className="left-half" xs={24} sm={12}></Col>
          <Col className="right-half" xs={24} sm={12}></Col>
        </Row>
      </div>
    </>
  );
};
export default RenderVotingPage;
