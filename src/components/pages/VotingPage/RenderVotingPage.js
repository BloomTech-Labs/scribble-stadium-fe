import React from 'react';
import { Header } from '../../common';
import { Row, Col, Card } from 'antd';
import pdfSample from '../../../assets/images/votingPage/pdfSample.svg';
import pdf2Sample from '../../../assets/images/votingPage/pdf2Sample.svg';
import { VotingForm } from '../../common';

const RenderVotingPage = props => {
  return (
    <>
      <Header title="VOTE FOR YOUR FAVORITE STORY" />

      <div className="voting-container">
        <Row className="main-row">
          <Col className="left-half" xs={24} sm={12}>
            <div className="image-and-check-container">
              <Card className="pdfCard">
                <img
                  className="WritingandDrawingIcon"
                  src={pdfSample}
                  alt="writing submission"
                />
              </Card>
            </div>
          </Col>

          <Col className="right-half" xs={24} sm={12}>
            <div className="image-and-check-container">
              <Card className="pdfCard">
                <img
                  className="WritingandDrawingIcon"
                  src={pdf2Sample}
                  alt="writing submission"
                />
              </Card>
            </div>
            <VotingForm />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default RenderVotingPage;
