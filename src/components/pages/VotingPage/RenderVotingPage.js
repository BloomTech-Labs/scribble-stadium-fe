import React from 'react';
import { Header } from '../../common';
import { Row, Col, Card } from 'antd';
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
                  src={props.faceoff.Submission1.ImgURL}
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
                  src={props.faceoff.Submission2.ImgURL}
                  alt="writing submission"
                />
              </Card>
            </div>
            <VotingForm FaceoffID={props.faceoff.ID} MemberID={props.child.memberId}/>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default RenderVotingPage;
