// note: we need to figure out how to bring in the CSS from code sandbox:

import React, { useRef } from 'react';
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

const FaceoffReveal = () => {
  // determine screen size to adjust image height
  let screenWidth = window.screen.width;

  // instantiating dynamic variables for display
  let topAvatarHeight = 0;
  let crashAvatarHeight = 0;
  let crashImageSize = 0;
  let winnerImageSize = 0;
  let matchupType = 'Story';
  let userAvatar = '';
  let opponentAvatar = '';
  let pointsAwarded = 60;
  let dynamicBackgroundColor = '#438eac';
  //    hex codes:
  //      4. boston-blue -- #438eac
  //      3. bright-sun -- #ffde3b
  //      2. burnt-sienna -- #e97451
  //      1. conifer -- #4a5a41

  //  determine dynamic variables

  if (screenWidth < 601) {
    topAvatarHeight = 30;
    crashAvatarHeight = 50;
    crashImageSize = 110;
    winnerImageSize = 110;
  } else if (screenWidth < 992) {
    topAvatarHeight = 40;
    crashAvatarHeight = 117;
    crashImageSize = 180;
    winnerImageSize = 150;
  } else {
    topAvatarHeight = 50;
    crashAvatarHeight = 120;
    crashImageSize = 210;
    winnerImageSize = 180;
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

  // bringing in useChain to connect the animations together
  useChain([
    countdownRef3,
    countdownRef2,
    countdownRef1,
    storyResultsRef,
    leftTeamRef,
    VSRef,
    rightTeamRef,
    leftDrawbackCrashRef,
  ]);
  useChain([
    // this has a timer to delay start until leftDrawbackCrashRef starts
    rightDrawbackCrashRef,
    centerEnlargeRef,
    upFromBottomRef,
    nameWinnerRef,
    plusAppearRef,
    countPointsRef,
    textAppearRef,
  ]);

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
        <animated.h1 style={shiftUpStyle}>{matchupType} Results...</animated.h1>
        {/* drawing back avatars to left & right: */}
        <animated.img
          className="crash-location"
          style={useLeftDrawbackCrashStyle}
          src="https://freesvg.org/img/1339607732.png"
          height={crashAvatarHeight}
        />

        <animated.img
          className="crash-location"
          style={useRightDrawbackCrashStyle}
          src="https://freesvg.org/img/1339607732.png"
          height={crashAvatarHeight}
        />
        {/* crash image: */}
        <animated.img
          className="crash-location"
          style={enlargeCenterStyle}
          src="https://freesvg.org/img/1339607732.png"
          height={crashImageSize}
        />
        {/* winner's image: */}
        <animated.img
          className="crash-location"
          src="https://freesvg.org/img/1339607732.png"
          alt="me"
          height={winnerImageSize}
          style={upFromBottomStyle}
        />
      </div>
      {/* intial avatar images to display at top: */}
      <animated.img
        style={enlargeMoveLeftStyle}
        src="https://freesvg.org/img/1339607732.png"
        height={topAvatarHeight}
      />
      <animated.h1 style={enlargeVSStyle}>VS</animated.h1>

      <animated.img
        style={enlargeMoveRightStyle}
        src="https://freesvg.org/img/1339607732.png"
        height={topAvatarHeight}
      />

      {/* winner's name and points won: */}
      <div className="bottom-fixed">
        <div className="bot-of-bottom-fixed">
          <animated.h1 className="winner-headline" style={nameWinnerStyle}>
            Brian Kubes
          </animated.h1>
        </div>
        <animated.div className="top-of-bottom-fixed">
          <animated.h1 style={divAppearStyle1}>
            {divAppearStyle1.text}
          </animated.h1>
          <animated.h1 className="top-of-bottom-fixed" style={countPointsStyle}>
            {countPointsStyle.number.interpolate(val => Math.floor(val))}
          </animated.h1>
          <animated.h1 className="top-of-bottom-fixed" style={divAppearStyle2}>
            {divAppearStyle2.text}
          </animated.h1>
        </animated.div>
      </div>
    </div>
  );
};

export default FaceoffReveal;
