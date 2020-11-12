import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import { Header } from '../../common';
import { Row, Col, InputNumber, Button, notification } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { submitPoints } from '../../../api/index';
import { useHistory } from 'react-router-dom';

import { SubmissionViewerModal } from '../../common';
import { InstructionsModal } from '../../common';
import { modalInstructions } from '../../../utils/helpers';

const PointShare = props => {
  const [totalPoints, setTotalPoints] = useState(100);
  const [storyOnePoints, setStoryOnePoints] = useState(0);
  const [storyTwoPoints, setStoryTwoPoints] = useState(0);
  const [illustrationOnePoints, setIllustrationOnePoints] = useState(0);
  const [illustrationTwoPoints, setIllustrationTwoPoints] = useState(0);
  const [teamPoints, setTeamPoints] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);

  const { authState } = useOktaAuth();
  const { push } = useHistory();

  const formSubmit = () => {
    if (totalPoints < 0) {
      notification.error({
        message: 'You may only allocate 100 points!',
      });
      return;
    }

    setTeamPoints([
      {
        WritingPoints: storyOnePoints,
        DrawingPoints: illustrationOnePoints,
        MemberID: props.child.memberId,
        SubmissionID: props.team.child1.SubmissionID,
      },
      {
        WritingPoints: storyTwoPoints,
        DrawingPoints: illustrationTwoPoints,
        MemberID: props.child.memberId,
        SubmissionID: props.team.child2.SubmissionID,
      },
    ]);
  };

  useEffect(() => {
    if (teamPoints) {
      submitPoints(authState, teamPoints);
    }
  }, [teamPoints, authState]);

  const openModal = content => {
    setModalContent(content);
    setShowModal(true);
  };

  const backJoin = e => {
    push('/child/join');
  };
  return (
    <>
      {/* Header requires countDown={true}  */}
      {showModal && (
        <SubmissionViewerModal
          showModal={showModal}
          content={modalContent}
          closeModal={() => setShowModal(false)}
        />
      )}
      <Header
        title="SHARE POINTS"
        displayMenu={true}
        pointsRemaining={true}
        points={totalPoints}
        teamName={true}
      />
      <QuestionCircleOutlined
        className="question-icon"
        onClick={() => {
          setModalVisible(true);
        }}
      />
      <InstructionsModal
        modalVisible={modalVisible}
        handleCancel={() => {
          setModalVisible(false);
        }}
        handleOk={() => {
          setModalVisible(false);
        }}
        instructions={modalInstructions.sharePoints}
      />
      <div className="point-share-container">
        <Row className="team-row">
          <Col>
            <Row className="teammate-one">
              <img
                className="teammate-one-avatar"
                src={props.team.child1.AvatarURL}
                alt="Child Avatar"
              />
            </Row>
            <Row className="teammate-two">
              <img
                className="teammate-one-avatar"
                src={props.team.child2.AvatarURL}
                alt="Child Avatar"
              />
            </Row>
          </Col>
          <Col>
            <Row className="teammate-one-points">
              <div className="submission-container">
                <img
                  className="submission"
                  src={props.team.child1.ImgURL}
                  alt="Submission"
                  onClick={() =>
                    openModal([{ ImgURL: props.team.child1.ImgURL }])
                  }
                />
                {console.log(props.team)}
                <InputNumber
                  value={storyOnePoints}
                  min={0}
                  step={5}
                  onChange={value => {
                    setStoryOnePoints(value);
                    setTotalPoints(
                      100 -
                        (value +
                          storyTwoPoints +
                          illustrationOnePoints +
                          illustrationTwoPoints)
                    );
                  }}
                />
              </div>
              <div className="submission-container">
                <img
                  className="submission"
                  src={props.team.child1.Pages[0].PageURL}
                  alt="Submission"
                  onClick={() => openModal(props.team.child1.Pages)}
                />
                <InputNumber
                  value={illustrationOnePoints}
                  min={0}
                  step={5}
                  onChange={value => {
                    setIllustrationOnePoints(value);
                    setTotalPoints(
                      100 -
                        (value +
                          storyTwoPoints +
                          storyOnePoints +
                          illustrationTwoPoints)
                    );
                  }}
                />
              </div>
            </Row>
            <Row className="teammate-two-points">
              <div className="submission-container">
                <img
                  className="submission"
                  src={props.team.child2.ImgURL}
                  alt="Submission"
                  onClick={() =>
                    openModal([{ ImgURL: props.team.child2.ImgURL }])
                  }
                />
                <InputNumber
                  value={storyTwoPoints}
                  min={0}
                  step={5}
                  onChange={value => {
                    setStoryTwoPoints(value);
                    setTotalPoints(
                      100 -
                        (value +
                          storyOnePoints +
                          illustrationOnePoints +
                          illustrationTwoPoints)
                    );
                  }}
                />
              </div>
              <div className="submission-container">
                <img
                  className="submission"
                  src={props.team.child2.Pages[0].PageURL}
                  alt="Submission"
                  onClick={() => openModal(props.team.child2.Pages)}
                />
                <InputNumber
                  value={illustrationTwoPoints}
                  min={0}
                  step={5}
                  onChange={value => {
                    setIllustrationTwoPoints(value);
                    setTotalPoints(
                      100 -
                        (value +
                          storyTwoPoints +
                          illustrationOnePoints +
                          storyOnePoints)
                    );
                  }}
                />
              </div>
            </Row>
          </Col>
        </Row>
        <Button className="back-button" onClick={backJoin}>
          Back
        </Button>
        <Button
          selection="#eb7d5bbb"
          className="match-up"
          type="primary"
          size="large"
          onClick={formSubmit}
        >
          Match Up!
        </Button>
      </div>
    </>
  );
};

export default connect(
  state => ({
    child: state.child,
    team: state.team,
  }),
  {}
)(PointShare);
