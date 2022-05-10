/*
This component contains temporary hard coding to fill data that should be pulling from the database.
- currently those BE endpoints and DB data structures are not finished. 11-07-21
Once this component pulls data from the database, change the parameters in the render section so that they pull from props and this page will be complete.  

As BE endpoints and DB schema are finished:
[] remove hardcode virtual player data, pull this data from BE and DB. Virtual player creation & data should be on BE, not FE
[] remove hardcode user data, pull this data from props or global state
[] remove hardcode point data, pull this data from props or global state
[] remove hardcode story / drawing submission data, pull this data from BE and DB
[] ensure that handleSubmitPoints passes the correct data to BE
[] remove all comments when component is complete and ready for production

Complete:
[x] styling matches Figma 
[x] counter boxes increment and decrement, saving value to component state
[x] component level state saves and renders correctly ---> storyOnePoints, storyTwoPoints, illustrationOnePoints, illustrationTwoPoints
*/

import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Header } from '../../common';
import ChildFooter from '../../common/ChildFooter';
import { Button, notification } from 'antd';
import {
  ZoomInOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
import { connect } from 'react-redux';
import { submitPoints } from '../../../api/index';

import { SubmissionViewerModal } from '../../common';

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
  // The following code is commented out to prevent warnings during compilation
  // const [modalVisible, setModalVisible] = useState(true);
  //  const [modalVisible, setModalVisible] = useState(true);
  //  const [modalVisible, setModalVisible] = useState(true);

  let { user } = useAuth0();
  let history = useHistory();

  // TEMPORARY HARD CODE - remove when pulling user state from backend
  user = initialStateForUserTemporaryHardcode;

  /**
  create virtual player - TEMPORARY HARD CODE - remove when pulling state from backend
   *Array of virtual player IDs ---> ['VP-1','VP-2','VP-3','VP-4','VP-5','VP-6','VP-7']
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

  // const setVirtualPlayerPoints = virtualPlayerID => {
  //   return [
  //     {
  //       WritingPoints: 25,
  //       DrawingPoints: 25,
  //       MemberID: virtualPlayerID,
  //       SubmissionID: props.team.child1.SubmissionID,
  //     },
  //     {
  //       WritingPoints: 25,
  //       DrawingPoints: 25,
  //       MemberID: virtualPlayerID,
  //       SubmissionID: props.team.child2.SubmissionID,
  //     },
  //   ];
  // };
//  const setVirtualPlayerPoints = virtualPlayerID => {
//    return [
//      {
//        WritingPoints: 25,
//        DrawingPoints: 25,
//        MemberID: virtualPlayerID,
//        SubmissionID: props.team.child1.SubmissionID,
//      },
//      {
//        WritingPoints: 25,
//        DrawingPoints: 25,
//        MemberID: virtualPlayerID,
//        SubmissionID: props.team.child2.SubmissionID,
//      },
//    ];
//  };
  //  const setVirtualPlayerPoints = virtualPlayerID => {
  //    return [
  //      {
  //        WritingPoints: 25,
  //        DrawingPoints: 25,
  //        MemberID: virtualPlayerID,
  //        SubmissionID: props.team.child1.SubmissionID,
  //      },
  //      {
  //        WritingPoints: 25,
  //        DrawingPoints: 25,
  //        MemberID: virtualPlayerID,
  //        SubmissionID: props.team.child2.SubmissionID,
  //      },
  //    ];
  //  };
  const formSubmit = () => {
    // notification used to handle errors related to the user's share points submission.
    if (totalPoints < 0) {
      notification.error({
        message: 'You may only allocate 100 points!',
      });
      return;
    }
    setTeamPoints([
      // base case, when you DON'T have a virtual player
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
    // useCallback refreshes the callback function when the SubmissionIDs change
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
      // submitPoints is an api call to BE that sends teamPoints
      submitPoints(user, teamPoints);
    }

    // if child one is a virtual player
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

  // openModal helper function, sets the content of the modal through state. onClick of the zoom icon calls openModal
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
    formSubmit(); // submit the form
    history.push('/child/winner'); // this page routes to Winner page per Ash / Jake's Whimsical
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
                onClick={() => openModal([{ ImgURL: sampleWritingSubmission }])}
              />
            </div>
            <div className="counter-box">
              <p className="points-assigned">{storyOnePoints}</p>
              <div className="increment-box">
                <Button
                  onClick={() => {
                    handlePointShare({
                      value: storyOnePoints + 5,
                      pointSetter: setStoryOnePoints,
                      a: storyTwoPoints,
                      b: illustrationOnePoints,
                      c: illustrationTwoPoints,
                    });
                  }}
                  style={{
                    width: '100%',
                    padding: '0',
                    border: 'none',
                    margin: '0',
                    overflow: 'hidden',
                  }}
                >
                  <CaretUpOutlined
                    style={{ color: '#6CEAE6', fontSize: '30px' }}
                  />
                </Button>
                <Button
                  onClick={() => {
                    handlePointShare({
                      value:
                        storyOnePoints >= 5
                          ? storyOnePoints - 5
                          : storyOnePoints,
                      pointSetter: setStoryOnePoints,
                      a: storyTwoPoints,
                      b: illustrationOnePoints,
                      c: illustrationTwoPoints,
                    });
                  }}
                  style={{
                    width: '100%',
                    padding: '0',
                    border: 'none',
                    margin: '0',
                    overflow: 'hidden',
                  }}
                >
                  <CaretDownOutlined
                    className="increment-down"
                    style={{ color: '#6CEAE6', fontSize: '30px' }}
                  />
                </Button>
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
                onClick={() => openModal([{ ImgURL: sampleDrawingSubmission }])}
              />
            </div>
            <div className="counter-box">
              <p className="points-assigned">{illustrationOnePoints}</p>
              <div className="increment-box">
                <Button
                  onClick={() => {
                    handlePointShare({
                      value: illustrationOnePoints + 5,
                      pointSetter: setIllustrationOnePoints,
                      a: storyTwoPoints,
                      b: storyOnePoints,
                      c: illustrationTwoPoints,
                    });
                  }}
                  style={{
                    width: '100%',
                    padding: '0',
                    border: 'none',
                    margin: '0',
                    overflow: 'hidden',
                  }}
                >
                  <CaretUpOutlined
                    className="increment-up"
                    style={{ color: '#6CEAE6', fontSize: '30px' }}
                  />
                </Button>
                <Button
                  onClick={() => {
                    handlePointShare({
                      value:
                        illustrationOnePoints >= 5
                          ? illustrationOnePoints - 5
                          : illustrationOnePoints,
                      pointSetter: setIllustrationOnePoints,
                      a: storyTwoPoints,
                      b: storyOnePoints,
                      c: illustrationTwoPoints,
                    });
                  }}
                  style={{
                    width: '100%',
                    padding: '0',
                    border: 'none',
                    margin: '0',
                    overflow: 'hidden',
                  }}
                >
                  <CaretDownOutlined
                    className="increment-down"
                    style={{ color: '#6CEAE6', fontSize: '30px' }}
                  />
                </Button>
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
                  onClick={() =>
                    openModal([{ ImgURL: sampleWritingSubmission }])
                  }
                />
              </div>
            </div>

            <div className="counter-box">
              <p className="points-assigned">{storyTwoPoints}</p>
              <div className="increment-box">
                <Button
                  onClick={() => {
                    handlePointShare({
                      value: storyTwoPoints + 5,
                      pointSetter: setStoryTwoPoints,
                      a: storyOnePoints,
                      b: illustrationOnePoints,
                      c: illustrationTwoPoints,
                    });
                  }}
                  style={{
                    width: '100%',
                    padding: '0',
                    border: 'none',
                    margin: '0',
                    overflow: 'hidden',
                  }}
                >
                  <CaretUpOutlined
                    className="increment-up"
                    style={{ color: '#6CEAE6', fontSize: '30px' }}
                  />
                </Button>
                <Button
                  onClick={() => {
                    handlePointShare({
                      value:
                        storyTwoPoints >= 5
                          ? storyTwoPoints - 5
                          : storyTwoPoints,
                      pointSetter: setStoryTwoPoints,
                      a: storyOnePoints,
                      b: illustrationOnePoints,
                      c: illustrationTwoPoints,
                    });
                  }}
                  style={{
                    width: '100%',
                    padding: '0',
                    border: 'none',
                    margin: '0',
                    overflow: 'hidden',
                  }}
                >
                  <CaretDownOutlined
                    className="increment-down"
                    style={{ color: '#6CEAE6', fontSize: '30px' }}
                  />
                </Button>
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
                  onClick={() =>
                    openModal([{ ImgURL: sampleDrawingSubmission }])
                  }
                />
              </div>
              <div className="counter-box">
                <p className="points-assigned">{illustrationTwoPoints}</p>
                <div className="increment-box">
                  <Button
                    onClick={() => {
                      handlePointShare({
                        value: illustrationTwoPoints + 5,
                        pointSetter: setIllustrationTwoPoints,
                        a: storyTwoPoints,
                        b: illustrationOnePoints,
                        c: storyOnePoints,
                      });
                    }}
                    style={{
                      width: '100%',
                      padding: '0',
                      border: 'none',
                      margin: '0',
                      overflow: 'hidden',
                    }}
                  >
                    <CaretUpOutlined
                      className="increment-up"
                      style={{ color: '#6CEAE6', fontSize: '30px' }}
                    />
                  </Button>
                  <Button
                    onClick={() => {
                      handlePointShare({
                        value:
                          illustrationTwoPoints >= 5
                            ? illustrationTwoPoints - 5
                            : illustrationTwoPoints,
                        pointSetter: setIllustrationTwoPoints,
                        a: storyTwoPoints,
                        b: illustrationOnePoints,
                        c: storyOnePoints,
                      });
                    }}
                    style={{
                      width: '100%',
                      padding: '0',
                      border: 'none',
                      margin: '0',
                      overflow: 'hidden',
                    }}
                  >
                    <CaretDownOutlined
                      className="increment-down"
                      style={{ color: '#6CEAE6', fontSize: '30px' }}
                    />
                  </Button>
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
      <ChildFooter />
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
