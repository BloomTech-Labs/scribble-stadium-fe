import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Header } from '../../common';
import { Row, Col, InputNumber, Button, notification } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { submitPoints } from '../../../api/index';

import { SubmissionViewerModal } from '../../common';
import { InstructionsModal } from '../../common';
import { modalInstructions } from '../../../utils/helpers';

const PointShare = props => {
  const { push } = useHistory();
  const [totalPoints, setTotalPoints] = useState(100);
  const [storyOnePoints, setStoryOnePoints] = useState(0);
  const [storyTwoPoints, setStoryTwoPoints] = useState(0);
  const [illustrationOnePoints, setIllustrationOnePoints] = useState(0);
  const [illustrationTwoPoints, setIllustrationTwoPoints] = useState(0);
  const [teamPoints, setTeamPoints] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);

  const { user } = useAuth0();

  /**
   *Virtual Player
   *Array of virtual player IDs
   *['VP-1','VP-2','VP-3','VP-4','VP-5','VP-6','VP-7']
   *Check if MemeberID for child is one of the virtual players IDs if true then submit virtual player points 25-25-25-25
   *Conditionaly render PointShare | Virtual player will not see the component so all data submition is happening behind the scenes for virtual player
   */
  const virtualPlayerIDs = [
    'VP-1',
    'VP-2',
    'VP-3',
    'VP-4',
    'VP-5',
    'VP-6',
    'VP-7',
  ];

  const setVirtualPlayerPoints = virtualPlayerID => {
    return [
      {
        WritingPoints: 25,
        DrawingPoints: 25,
        MemberID: virtualPlayerID,
        SubmissionID: props.team.child1.SubmissionID,
      },
      {
        WritingPoints: 25,
        DrawingPoints: 25,
        MemberID: virtualPlayerID,
        SubmissionID: props.team.child2.SubmissionID,
      },
    ];
  };

  const formSubmit = () => {
    // note: lines 43 - 51 not required anymore! However, "notification" could be used for future implementations
    // regarding error handling for the user's share points submission. Yay!
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

  const virtualPlayerCallback = useCallback(
    virtualPlayerID => {
      return [
        {
          WritingPoints: 25,
          DrawingPoints: 25,
          MemberID: virtualPlayerID,
          SubmissionID: props.team.child1.SubmissionID,
        },
        {
          WritingPoints: 25,
          DrawingPoints: 25,
          MemberID: virtualPlayerID,
          SubmissionID: props.team.child2.SubmissionID,
        },
      ];
    },
    [props.team.child2.SubmissionID, props.team.child1.SubmissionID]
  );

  useEffect(() => {
    if (teamPoints) {
      submitPoints(user, teamPoints);
    }

    // check for virtual player id from props
    if (virtualPlayerIDs.includes(props.team.child1.MemberID)) {
      // if virtual id submit virtual player points
      submitPoints(user, virtualPlayerCallback(props.team.child1.MemberID));
    } else if (virtualPlayerIDs.includes(props.team.child2.MemberID)) {
      submitPoints(user, virtualPlayerCallback(props.team.child2.MemberID));
    }
  }, [
    teamPoints,
    user,
    virtualPlayerCallback,
    props.team.child2.MemberID,
    props.team.child1.MemberID,
    virtualPlayerIDs,
  ]);

  const openModal = content => {
    setModalContent(content);
    setShowModal(true);
  };

  // SharePointHandler - handler that sets the logic of each input number point value:
  // maxValue - it returns the maximum value available for each input.
  // pointSetter - it takes into account the min and max value on each input, and it will
  // determine how many points are available to spend on the current input number field.
  // setTotalPoints - it keeps track of total points available

  const sharePointHandler = ({ value, pointSetter, a, b, c }) => {
    const maxValue =
      100 - (Math.max(a, 10) + Math.max(b, 10) + Math.max(c, 10));
    pointSetter(Math.min(value, maxValue));
    setTotalPoints(Math.max(100 - (value + a + b + c), 0));
  };

  const backToJoin = e => {
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
                <InputNumber
                  value={illustrationOnePoints}
                  max={70}
                  min={0}
                  step={5}
                  onChange={value =>
                    sharePointHandler({
                      value,
                      pointSetter: setIllustrationOnePoints,
                      a: storyTwoPoints,
                      b: storyOnePoints,
                      c: illustrationTwoPoints,
                    })
                  }
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
                  value={storyOnePoints}
                  max={70}
                  min={0}
                  step={5}
                  onChange={value =>
                    sharePointHandler({
                      value,
                      pointSetter: setStoryOnePoints,
                      a: storyTwoPoints,
                      b: illustrationOnePoints,
                      c: illustrationTwoPoints,
                    })
                  }
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
                  value={illustrationTwoPoints}
                  max={70}
                  min={0}
                  step={5}
                  onChange={value =>
                    sharePointHandler({
                      value,
                      pointSetter: setIllustrationTwoPoints,
                      a: storyTwoPoints,
                      b: illustrationOnePoints,
                      c: storyOnePoints,
                    })
                  }
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
                  value={storyTwoPoints}
                  max={70}
                  min={0}
                  step={5}
                  onChange={value =>
                    sharePointHandler({
                      value,
                      pointSetter: setStoryTwoPoints,
                      a: storyOnePoints,
                      b: illustrationOnePoints,
                      c: illustrationTwoPoints,
                    })
                  }
                />
              </div>
            </Row>
          </Col>
        </Row>
        <Button
          selection="#eb7d5bbb"
          className="match-up"
          type="primary"
          size="large"
          onClick={formSubmit}
        >
          Match Up!
        </Button>
        <Button className="back-to-join-the-squad" onClick={backToJoin}>
          Back
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
