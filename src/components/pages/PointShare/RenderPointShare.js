import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Header } from '../../common';
import Footer from '../GamePlay/Footer';
import { Button, notification, InputNumber } from 'antd';
import {
  ZoomInOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
import { connect } from 'react-redux';
import { submitPoints } from '../../../api/index';

import { SubmissionViewerModal } from '../../common';
import { InstructionsModal } from '../../common';
import { modalInstructions } from '../../../utils/helpers';

// import hero images - TEMPORARY HARD CODE - remove when pulling state ( avatarID ) from backend
import childOneImg from '../../../assets/images/hero_images/hero10.png';
import childTwoImg from '../../../assets/images/hero_images/hero8.png';
// import sample writing submission - TEMPORARY HARD CODE - remove when pulling state from backend
import sampleWritingSubmission from './sampleWriting.png';
import sampleDrawingSubmission from './sampleDrawing.png';

// initialize state for user object - TEMPORARY HARD CODE - remove when pulling state from backend
const initialStateForUserTemporaryHardcode = {
  id: 1,
  avatarID: 1, // foreign key to avatar table
  avatar: {
    // avatar object is pulled into child object from avatar table (this happens on the BE)
    id: 1,
    fileName: 'hero10.png',
  },
  characterName: 'Pinky Winky',
};

const PointShare = props => {
  const [totalPoints, setTotalPoints] = useState(100);

  // these setStory and setIllustration functions set state of the 4 InputNumber components
  const [storyOnePoints, setStoryOnePoints] = useState(0);
  const [storyTwoPoints, setStoryTwoPoints] = useState(0);
  const [illustrationOnePoints, setIllustrationOnePoints] = useState(0);
  const [illustrationTwoPoints, setIllustrationTwoPoints] = useState(0);

  const [teamPoints, setTeamPoints] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);

  let { user } = useAuth0();
  let history = useHistory();

  // TEMPORARY HARD CODE - remove when pulling user state from backend
  user = initialStateForUserTemporaryHardcode;

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

  // handlePointShare - onClick helper function that sets the logic of each of the 4 point assignment boxes and state.
  // maxValue - it returns the maximum value available for each input.
  // pointSetter - it takes into account the min and max value on each input, and it will
  // determine how many points are available to spend on the current input number field.
  // setTotalPoints - it keeps track of total points available, sets that value to state.
  const handlePointShare = ({ value, pointSetter, a, b, c }) => {
    const maxValue =
      100 - (Math.max(a, 10) + Math.max(b, 10) + Math.max(c, 10));
    pointSetter(Math.min(value, maxValue));
    setTotalPoints(Math.max(100 - (value + a + b + c), 0));
  };

  const handleSubmitPoints = () => {
    // this page needs to route to Winner page per Ash's / Jake's Whimsical
    history.push('/child/winner');
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
        title="SCRIBBLE STADIUM"
        displayMenu={true}
        pointsRemaining={true}
        points={totalPoints}
        teamName={true}
      />

      <div className="point-share-rectangle">
        <div className="point-share-text">
          <h2 className="point-share-text-heading">POINTS SHARING</h2>
          <p className="point-share-paragraph">{`Now it is time to split up 100 points across your squad's portfolio of stories and drawings.  You must put a minimum of 10 points on each and the total among all 4 must add up to 100 points.`}</p>

          <p className="point-share-paragraph">
            {`As you read both stories and look at both drawings, think about which ones best reflect the characters,  plot, and settings from the chapters you read.  Share the most points with the ones you think are the best.`}{' '}
          </p>
        </div>
      </div>

      <div className="point-share-boxes-container">
        <div className="point-share-box child-one">
          <div className="point-share-child-info">
            <img src={childOneImg} alt="child-one-avatar" />
            <p className="point-share-heading">{`${user.characterName.toUpperCase()} (YOU)`}</p>
          </div>
          <div className="point-share-story">
            <p className="point-share-heading">STORY</p>
            <div className="point-share-submission">
              <img src={sampleWritingSubmission} alt="child-one-story" />
            </div>
            <div className="point-share-zoom-container">
              <ZoomInOutlined
                className="point-share-zoom"
                style={{ fontSize: '40px', padding: '5.5px' }}
              />
            </div>
            <div className="counter-box">
              <p className="points-assigned">{storyOnePoints}</p>
              <div className="increment-box">
                <CaretUpOutlined
                  className="increment-up"
                  style={{ color: '#6CEAE6', fontSize: '30px' }}
                  onClick={() => {
                    handlePointShare({
                      value: storyOnePoints + 5,
                      pointSetter: setStoryOnePoints,
                      a: storyTwoPoints,
                      b: illustrationOnePoints,
                      c: illustrationTwoPoints,
                    });
                  }}
                />
                <CaretDownOutlined
                  className="increment-down"
                  style={{ color: '#6CEAE6', fontSize: '30px' }}
                  onClick={() => {
                    handlePointShare({
                      value: storyOnePoints - 5,
                      pointSetter: setStoryOnePoints,
                      a: storyTwoPoints,
                      b: illustrationOnePoints,
                      c: illustrationTwoPoints,
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="point-share-drawing">
            <p className="point-share-heading">DRAWING</p>
            <div className="point-share-submission">
              <img src={sampleDrawingSubmission} alt="child-one-drawing" />
            </div>
            <div className="point-share-zoom-container">
              <ZoomInOutlined
                className="point-share-zoom"
                style={{ fontSize: '40px', padding: '5.5px' }}
              />
            </div>
            <div className="counter-box">
              <p className="points-assigned">{illustrationOnePoints}</p>
              <div className="increment-box">
                <CaretUpOutlined
                  className="increment-up"
                  style={{ color: '#6CEAE6', fontSize: '30px' }}
                  onClick={() => {
                    handlePointShare({
                      value: illustrationOnePoints + 5,
                      pointSetter: setIllustrationOnePoints,
                      a: storyTwoPoints,
                      b: storyOnePoints,
                      c: illustrationTwoPoints,
                    });
                  }}
                />
                <CaretDownOutlined
                  className="increment-down"
                  style={{ color: '#6CEAE6', fontSize: '30px' }}
                  onClick={() => {
                    handlePointShare({
                      value: illustrationOnePoints - 5,
                      pointSetter: setIllustrationOnePoints,
                      a: storyTwoPoints,
                      b: storyOnePoints,
                      c: illustrationTwoPoints,
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="point-share-box child-two">
          <div className="point-share-child-info">
            <img src={childTwoImg} alt="child-two-avatar" />
            <p className="point-share-heading">{`WHITE FOX`}</p>
          </div>

          <div className="point-share-story">
            <p className="point-share-heading">STORY</p>

            <div className="point-share-submission">
              <img src={sampleWritingSubmission} alt="child-two-story" />
              <div className="point-share-zoom-container">
                <ZoomInOutlined
                  className="point-share-zoom"
                  style={{ fontSize: '40px', padding: '5.5px' }}
                />
              </div>
            </div>

            <div className="counter-box">
              <p className="points-assigned">{storyTwoPoints}</p>
              <div className="increment-box">
                <CaretUpOutlined
                  className="increment-up"
                  style={{ color: '#6CEAE6', fontSize: '30px' }}
                  onClick={() => {
                    handlePointShare({
                      value: storyTwoPoints + 5,
                      pointSetter: setStoryTwoPoints,
                      a: storyOnePoints,
                      b: illustrationOnePoints,
                      c: illustrationTwoPoints,
                    });
                  }}
                />
                <CaretDownOutlined
                  className="increment-down"
                  style={{ color: '#6CEAE6', fontSize: '30px' }}
                  onClick={() => {
                    handlePointShare({
                      value: storyTwoPoints - 5,
                      pointSetter: setStoryTwoPoints,
                      a: storyOnePoints,
                      b: illustrationOnePoints,
                      c: illustrationTwoPoints,
                    });
                  }}
                />
              </div>
            </div>
          </div>

          <div className="point-share-drawing">
            <p className="point-share-heading">DRAWING</p>
            <div className="point-share-submission">
              <img
                className="submission-image"
                src={sampleDrawingSubmission}
                alt="child-two-drawing"
              />
              <div className="point-share-zoom-container">
                <ZoomInOutlined
                  className="point-share-zoom"
                  style={{ fontSize: '40px', padding: '5.5px' }}
                />
              </div>
              <div className="counter-box">
                <p className="points-assigned">{illustrationTwoPoints}</p>
                <div className="increment-box">
                  <CaretUpOutlined
                    className="increment-up"
                    style={{ color: '#6CEAE6', fontSize: '30px' }}
                    onClick={() => {
                      handlePointShare({
                        value: illustrationTwoPoints + 5,
                        pointSetter: setIllustrationTwoPoints,
                        a: storyTwoPoints,
                        b: illustrationOnePoints,
                        c: storyOnePoints,
                      });
                    }}
                  />
                  <CaretDownOutlined
                    className="increment-down"
                    style={{ color: '#6CEAE6', fontSize: '30px' }}
                    onClick={() => {
                      handlePointShare({
                        value: illustrationTwoPoints - 5,
                        pointSetter: setIllustrationTwoPoints,
                        a: storyTwoPoints,
                        b: illustrationOnePoints,
                        c: storyOnePoints,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Button
          className="point-share-submit-button"
          onClick={handleSubmitPoints}
        >
          Submit Points
        </Button>
      </div>
      {/* The Footer import must be updated once it gets moved to the global component "common" directory */}
      <Footer />
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
