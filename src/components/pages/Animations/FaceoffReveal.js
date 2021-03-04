import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { animated, useChain } from 'react-spring';

import useCountdown from './AnimationComponents/useCountdown';
import useLeftDrawbackCrash from './AnimationComponents/useLeftDrawbackCrash';
import useRightDrawbackCrash from './AnimationComponents/useRightDrawbackCrash';
import useEnlargeStoryResults from './AnimationComponents/useEnlargeStoryResults';
import useEnlargeCenterToTopLeft from './AnimationComponents/useEnlargeCenterToTopLeft';
import useEnlargeCenterToTopRight from './AnimationComponents/useEnlargeCenterToTopRight';
import useEnlargeCenter from './AnimationComponents/useEnlargeCenter';
import useUpFromBottom from './AnimationComponents/useUpFromBottom';
import useEnlargeVs from './AnimationComponents/useEnlargeVs';
import useNameWinner from './AnimationComponents/useNameWinner';
import useDivAppear from './AnimationComponents/useDivAppear';
import useCounter from './AnimationComponents/useCounter';
import useGoBackButton from './AnimationComponents/useGoBackButton';

const FaceoffReveal = props => {
  const setToggle = props.setToggle;
  // we need to bring in faceoff data from FaceoffContent / FaceoffSubDisplay
  console.log(
    'animation background color:',
    props.history.location.state.backgroundColor
  );
  const dynamicInfo = props.history.location.state.dynamicInfo;

  const history = useHistory();
  // determine screen size to adjust image height
  let screenWidth = window.screen.width;

  // instantiating dynamic variables for display
  let topAvatarHeight = 0;
  let crashAvatarHeight = 0;
  let crashImageSize = 0;
  let winnerImageSize = 0;
  let vsHeight = 0;
  let matchupType = dynamicInfo.Type;
  let userAvatar = dynamicInfo.Submission1.AvatarURL;
  let opponentAvatar = dynamicInfo.Submission2.AvatarURL;
  // winnerUserName will be determined by "dynamicInfo.Winner"
  let winnerUserName = 'CAT-LADY';
  let pointsAwarded = dynamicInfo.Points;
  // dynamicBackgroundColor will be determined by which matchup is being animated--
  // we may need to create a variable / key-value pair to track which faceoff is occurring
  // let backColorArray = ['#438eac', '#ffde3b', '#e97451', '#C9E952'];
  let dynamicBackgroundColor = props.history.location.state.backgroundColor;
  //    hex codes:
  //      4. boston-blue -- #438eac
  //      3. bright-sun -- #ffde3b
  //      2. burnt-sienna -- #e97451
  //      1. conifer -- #C9E952
  console.log('matchup type', matchupType);

  // if avatar URL #9 is in play, then a few considerations:
  // she is horizontal so must have a smaller height than her vertical opponents
  // she needs to be flipped to fly forward facing if shes on the right side
  // because she is wider, all of the placements that employ useMedia hook in animation components might be thrown off

  //  determine dynamic sizing
  if (screenWidth < 601) {
    topAvatarHeight = 60;
    crashAvatarHeight = 80;
    crashImageSize = 210;
    winnerImageSize = 110;
    vsHeight = 30;
  } else if (screenWidth < 992) {
    topAvatarHeight = 80;
    crashAvatarHeight = 117;
    crashImageSize = 180;
    winnerImageSize = 150;
    vsHeight = 40;
  } else {
    topAvatarHeight = 60;
    crashAvatarHeight = 120;
    crashImageSize = 130;
    winnerImageSize = 180;
    vsHeight = 40;
  }

  // matchup type = {object.matchup type}
  // avatar1 = {object.avatar1}
  // avatar2 = {object.avatar2}
  // pointsAwarded =  {object.points}

  // creating references for animation
  // COUNTDOWN REFS
  const countdownRef3 = useRef();
  const countdownRef2 = useRef();
  const countdownRef1 = useRef();
  // LEFT DRAWBACK CRASH REFS
  const leftDrawbackCrashRef = useRef();
  // RIGHT DRAWBACK CRASH REFS
  const rightDrawbackCrashRef = useRef();
  // ENLARGE TO TOP REFS
  const storyResultsRef = useRef();
  // ENLARGE TO TOP LEFT REFS
  const leftTeamRef = useRef();
  // ENLARGE TO TOP CENTER
  const VSRef = useRef();
  // ENLARGE TO TOP RIGHT REFS
  const rightTeamRef = useRef();
  // ENLARGE CENTER REFS
  const centerEnlargeRef = useRef();
  // UP FROM BOTTOM REF
  const upFromBottomRef = useRef();
  // COUNTER REF
  const countPointsRef = useRef();
  // POINT DIV APPEAR REF
  const plusAppearRef = useRef();
  const textAppearRef = useRef();
  // NAME WINNER REF
  const nameWinnerRef = useRef();
  // GO BACK BUTTON REF
  const goBackRef = useRef();

  // creating animation hooks
  //COUNTDOWN HOOKS
  const useCountdownStyle3 = useCountdown(countdownRef3, 3);
  const useCountdownStyle2 = useCountdown(countdownRef2, 2);
  const useCountdownStyle1 = useCountdown(countdownRef1, 1);
  //LEFT DRAWBACK CRASH HOOKS
  const useLeftDrawbackCrashStyle = useLeftDrawbackCrash(leftDrawbackCrashRef);
  // RIGHT DRAWBACKCRASH HOOKS
  const useRightDrawbackCrashStyle = useRightDrawbackCrash(
    rightDrawbackCrashRef
  );
  // ENLARGE TO TOP HOOKS
  const shiftUpStyle = useEnlargeStoryResults(storyResultsRef);
  // ENLARGE TO TOP LEFT HOOKS
  const enlargeMoveLeftStyle = useEnlargeCenterToTopLeft(leftTeamRef);
  // ENLARGE TO TOP CENTER HOOKS
  const enlargeVSStyle = useEnlargeVs(VSRef);
  // ENLARGE TO TOP RIGHT HOOKS
  const enlargeMoveRightStyle = useEnlargeCenterToTopRight(rightTeamRef);
  //ENLARGE CENTER HOOKS
  const enlargeCenterStyle = useEnlargeCenter(centerEnlargeRef);
  // UP FROM BOTTOM HOOKS
  const upFromBottomStyle = useUpFromBottom(upFromBottomRef);
  // COUNTER HOOKS
  const countPointsStyle = useCounter(countPointsRef, pointsAwarded);
  // POINT DIV APPEAR HOOKS
  const divAppearStyle1 = useDivAppear(plusAppearRef, '+');
  const divAppearStyle2 = useDivAppear(textAppearRef, 'points!');
  // NAME WINNER HOOK
  const nameWinnerStyle = useNameWinner(nameWinnerRef);
  // GO BACK BUTTON HOOK
  const goBackButtonStyle = useGoBackButton(goBackRef);

  // bringing in useChain to connect the animations together
  useChain([
    countdownRef3,
    countdownRef2,
    countdownRef1,
    storyResultsRef,
    leftTeamRef,
  ]);
  useChain([
    // first item has delay start until left team ref starts
    VSRef,
  ]);
  useChain([
    // first item has delay start until left team ref starts
    rightTeamRef,
  ]);
  useChain([
    // first item has a delay start until leftDrawbackCrashRef starts
    leftDrawbackCrashRef,
  ]);
  useChain([
    // first item has a delay start until leftDrawbackCrashRef starts
    rightDrawbackCrashRef,
  ]);
  useChain([
    // first item has a delay start
    centerEnlargeRef,
  ]);
  useChain([
    // first item has a delay start
    upFromBottomRef,
    nameWinnerRef,
  ]);
  useChain([
    // first item has a delay start
    plusAppearRef,
    countPointsRef,
    textAppearRef,
    goBackRef,
  ]);

  const goBacktoMatchup = event => {
    history.push('/child/match-up');
  };

  return (
    <div
      className="FaceoffReveal"
      style={{ backgroundColor: dynamicBackgroundColor }}
    >
      <div className="fixed-box">
        <animated.h1 className="crash-location" style={useCountdownStyle3}>
          {useCountdownStyle3.number}
        </animated.h1>
        <animated.h1 className="crash-location" style={useCountdownStyle2}>
          {useCountdownStyle2.number}
        </animated.h1>
        <animated.h1 className="crash-location" style={useCountdownStyle1}>
          {useCountdownStyle1.number}
        </animated.h1>
        {/* type of matchup (drawing/story) */}
        <animated.h1 style={shiftUpStyle} className="resultsType">
          {matchupType} Results...
        </animated.h1>
        {/* drawing back avatars to left & right: */}
        <animated.img
          className="crash-location"
          style={useLeftDrawbackCrashStyle}
          src={userAvatar}
          height={crashAvatarHeight}
        />

        <animated.img
          className="crash-location"
          style={useRightDrawbackCrashStyle}
          src={opponentAvatar}
          height={crashAvatarHeight}
        />
        {/* crash image: */}
        <animated.img
          className="crash-location"
          style={enlargeCenterStyle}
          src="/animation/crashSmallCrash.svg"
          height={crashImageSize}
        />
        {/* winner's image: */}
        <animated.img
          className="crash-location"
          src="/animation/Hero8.png"
          alt="me"
          height={winnerImageSize}
          style={upFromBottomStyle}
        />
        {/* lightning bolt VS */}
        <animated.img
          className="vs"
          style={enlargeVSStyle}
          src="/animation/VS.png"
          height={vsHeight}
        />
      </div>
      {/* intial avatar images to display at top: */}
      <animated.img
        className="move-left-move-right"
        style={enlargeMoveLeftStyle}
        src={userAvatar}
        height={topAvatarHeight}
      />
      <animated.img
        className="move-left-move-right"
        style={enlargeMoveRightStyle}
        src={opponentAvatar}
        height={topAvatarHeight}
      />
      <animated.h2
        style={goBackButtonStyle}
        onClick={goBacktoMatchup}
        className="go-back-button"
      >
        go back
      </animated.h2>

      {/* winner's name and points won: */}
      <div className="bottom-fixed">
        <div className="points-container">
          <animated.h1 className="points" style={divAppearStyle1}>
            {divAppearStyle1.text}
          </animated.h1>
          <animated.h1 className="points" style={countPointsStyle}>
            {countPointsStyle.number.interpolate(val => Math.floor(val))}
          </animated.h1>
          <animated.h1 className="points" style={divAppearStyle2}>
            {divAppearStyle2.text}
          </animated.h1>
        </div>
        <div className="winner">
          <animated.h1
            className="winner-headline"
            style={nameWinnerStyle}
            onClick={goBacktoMatchup}
          >
            {winnerUserName}
          </animated.h1>
        </div>
      </div>
    </div>
  );
};

export default FaceoffReveal;
