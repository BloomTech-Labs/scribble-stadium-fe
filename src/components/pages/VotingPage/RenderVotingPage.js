import React, { useState } from 'react';
import { Header, VotingForm, EmojiPicker } from '../../common';
import { Row, Col } from 'antd';

const RenderVotingPage = props => {
  const [subEmojis1, setSubEmojis1] = useState('');
  const [subEmojis2, setSubEmojis2] = useState('');

  return (
    <>
      <Header title="VOTE FOR YOUR FAVORITE STORY" displayMenu={true} />

      <div className="voting-container">
        <Row className="main-row">
          <Col className="left-half" xs={24} sm={12}>
            <div className="image-and-check-container">
              <img
                className="WritingandDrawingIcon"
                // ERRLOG: submission1 instead of submissionID1(??)
                src={props.votes.Submission1.ImgURL}
                alt="writing/drawing submission"
              />
              <EmojiPicker getChildState={setSubEmojis1} />
            </div>
          </Col>

          <Col className="right-half" xs={24} sm={12}>
            <div className="image-and-check-container">
              <img
                className="WritingandDrawingIcon"
                // ERRLOG: submission2 instead of submissionID2(??)
                src={props.votes.Submission2.ImgURL}
                alt="writing/drawing submission"
              />
            </div>
            <EmojiPicker getChildState={setSubEmojis2} />
            <VotingForm
              faceoffToVote={props.votes}
              child={props.child}
              subEmojis={{ subEmojis1, subEmojis2 }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default RenderVotingPage;
