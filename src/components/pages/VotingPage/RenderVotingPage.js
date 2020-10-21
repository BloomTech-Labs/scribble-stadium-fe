import React from 'react';
import { Header } from '../../common';
import { Row, Col, Button, Card } from 'antd';
import pdfSample from '../../../assets/images/votingPage/pdfSample.svg';
import pdf2Sample from '../../../assets/images/votingPage/pdf2Sample.svg';
import Checkbox from '../../common/CheckBoxVoting';

const RenderVotingPage = props => {
  function handleChecked(e) {
    return `checked=${e.target.checked}`;
  }
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
              <div className="check-box">
                <Checkbox defaultChecked={false} onChange={handleChecked} />
              </div>
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
              <div className="check-box">
                <Checkbox defaultChecked={false} onChange={handleChecked} />
              </div>
            </div>
          </Col>
        </Row>
        <Button className="submit-button">Submit</Button>
      </div>
    </>
  );
};
export default RenderVotingPage;
