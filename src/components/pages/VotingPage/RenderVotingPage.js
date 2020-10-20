import React from 'react';
import { Header } from '../../common';
import { Row, Col, Button } from 'antd';

const RenderVotingPage = props => {
  return (
    <>
      <Header title="VOTE FOR YOUR FAVORITE STORY" />

      <div className="voting-container">
        <Row className="main-row">
          <Col className="left-half" xs={24} sm={12}></Col>
          <Col className="right-half" xs={24} sm={12}></Col>
        </Row>
        <Button className="submit-button">Submit</Button>
      </div>
    </>
  );
};
export default RenderVotingPage;
