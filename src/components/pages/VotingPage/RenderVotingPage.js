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
                src={props.votes.Submission1.ImgURL}
                alt="writing submission"
              />
              <EmojiPicker getChildState={setSubEmojis1} />
            </div>
          </Col>

          <Col className="right-half" xs={24} sm={12}>
            <div className="image-and-check-container">
              <img
                className="WritingandDrawingIcon"
                src={props.votes.Submission2.ImgURL}
                alt="writing submission"
              />
            </div>
            <EmojiPicker getChildState={setSubEmojis2} />
            <VotingForm
              FaceoffID={props.votes.ID}
              MemberID={props.child.memberId}
              subEmojis={{ subEmojis1, subEmojis2 }}
              SubmissionIDs={[
                props.votes.SubmissionID1,
                props.votes.SubmissionID2,
              ]}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default RenderVotingPage;
