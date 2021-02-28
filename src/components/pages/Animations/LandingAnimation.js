import React, { useRef } from 'react';
import { animated, useChain } from 'react-spring';
import useLeftJumpCrash from './LandingAnimationComponents/useLeftJumpCrash';
import useRightJumpCrash from './LandingAnimationComponents/useRightJumpCrash';
import useWelcomeToStorySquad from './LandingAnimationComponents/useWelcomeToStorySquad';
import useCrashEnlarge from './LandingAnimationComponents/useCrashEnlarge';
import useWinnerWithTrophy from './LandingAnimationComponents/useWinnerWithTrophy';
import useWriteInMiddle from './LandingAnimationComponents/useWritenMiddle';
import useLightningBolt from './LandingAnimationComponents/useLightningBolt';
import useReadInLeft from './LandingAnimationComponents/useReadInLeft';
import useDrawInRight from './LandingAnimationComponents/useDrawInRight';
import useTrophyAppear from './LandingAnimationComponents/useTrophyAppear';
import draw_icon from '../../../assets/icons/draw_icon.svg';
import read_icon from '../../../assets/icons/read_icon.svg';
import write_icon from '../../../assets/icons/write_icon.svg';

const LandingAnimation = () => {
  // determine screen size to adjust image height
  let screenWidth = window.screen.width;

  // instantiating dynamic variables for display
  let topAvatarHeight = 0;
  let crashAvatarHeight = 0;
  let crashImageSize = 0;
  let winnerImageSize = 0;
  let vsHeight = 0;

  // dynamicBackgroundColor will be determined by which matchup is being animated--
  // we may need to create a variable / key-value pair to track which faceoff is occurring
  let backColorArray = ['#438eac', '#ffde3b', '#e97451', '#C9E952'];
  let dynamicBackgroundColor = backColorArray[Math.floor(Math.random() * 4)];
  //    hex codes:
  //      4. boston-blue -- #438eac
  //      3. bright-sun -- #ffde3b
  //      2. burnt-sienna -- #e97451
  //      1. conifer -- #C9E952

  //  determine dynamic sizing
  if (screenWidth < 601) {
    topAvatarHeight = 30;
    crashAvatarHeight = 50;
    crashImageSize = 110;
    winnerImageSize = 110;
    vsHeight = 30;
  } else if (screenWidth < 992) {
    topAvatarHeight = 40;
    crashAvatarHeight = 117;
    crashImageSize = 180;
    winnerImageSize = 150;
    vsHeight = 40;
  } else {
    topAvatarHeight = 50;
    crashAvatarHeight = 120;
    crashImageSize = 210;
    winnerImageSize = 180;
    vsHeight = 80;
  }

  // creating references for animation

  // ENLARGE "WELCOME TO STORY SQUAD" TO TOP REFS
  const storySquadBannerRef = useRef();
  // ENLARGE "READ" TO TOP LEFT REFS
  const readInLeftRef = useRef();
  // ENLARGE "WRITE" TO TOP CENTER
  const writeInMiddleRef = useRef();
  // ENLARGE "DRAW" TO TOP RIGHT REFS
  const drawInRightRef = useRef();
  // LIGHTNING BOLT REF
  const lightningBoltStrikeRef = useRef();
  // TROPHY APPEAR REF
  const trophyAppearRef = useRef();
  // LEFT DRAWBACK CRASH REFS
  const leftDrawbackCrashRef = useRef();
  // RIGHT DRAWBACK CRASH REFS
  const rightDrawbackCrashRef = useRef();
  // ENLARGE CRASH CENTER REFS
  const crashEnlargeRef = useRef();
  // UP FROM BOTTOM WINNER REF
  const upFromBottomRef = useRef();

  // creating animation hooks

  // ENLARGE "WELCOME TO STORY SQUAD" TO TOP HOOKS
  const welcomeBannerOnTopStyle = useWelcomeToStorySquad(storySquadBannerRef);
  // ENLARGE "READ" TO TOP LEFT HOOKS
  const enlargeReadInLeftStyle = useReadInLeft(readInLeftRef);
  // ENLARGE "WRITE" TO TOP CENTER HOOKS
  const enlargeWriteInMiddleStyle = useWriteInMiddle(writeInMiddleRef);
  // ENLARGE "DRAW" TO TOP RIGHT HOOKS
  const enlargeDrawInRightStyle = useDrawInRight(drawInRightRef);
  // LIGHTNING BOLT HOOKS
  const lightningStrikeStyle = useLightningBolt(lightningBoltStrikeRef);
  // TROPHY APPEAR HOOKS
  const trophyAppearStyle = useTrophyAppear(trophyAppearRef);
  //LEFT DRAWBACK CRASH HOOKS
  const useLeftDrawbackCrashStyle = useLeftJumpCrash(leftDrawbackCrashRef);
  // RIGHT DRAWBACKCRASH HOOKS
  const useRightDrawbackCrashStyle = useRightJumpCrash(rightDrawbackCrashRef);
  //ENLARGE CRASH CENTER HOOKS
  const enlargeCrashStyle = useCrashEnlarge(crashEnlargeRef);
  // WINNER UP FROM BOTTOM HOOKS
  const upFromBottomStyle = useWinnerWithTrophy(upFromBottomRef);

  // bringing in useChain to connect the animations together
  useChain([
    storySquadBannerRef, //"WELCOME TO STORY SQUAD"
    readInLeftRef, // "READ"
    writeInMiddleRef, // "WRITE"
    drawInRightRef, // "DRAW"
    lightningBoltStrikeRef, // LIGHTNING BOLT
    trophyAppearRef, // TROPHY APPEAR
    leftDrawbackCrashRef, // LEFT DRAWBACK
  ]);
  useChain([
    // this has a timer to delay start until leftDrawbackCrashRef starts
    rightDrawbackCrashRef, // RIGHT DRAWBACK
    crashEnlargeRef, // CRASH CENTER
    upFromBottomRef, // WINNER WITH TROPHY
  ]);

  return (
    <div
      className="App"
      style={{ backgroundColor: dynamicBackgroundColor, height: '100vh' }}
    >
      <div className="fixed-box">
        {/* type of matchup (drawing/story) */}
        <animated.h1 style={welcomeBannerOnTopStyle}>
          Welcome to Story Squad!
        </animated.h1>
        {/* Read, Write, Draw: */}
        <animated.img
          style={enlargeReadInLeftStyle}
          src={read_icon}
          height={topAvatarHeight}
        />
        <animated.img
          style={enlargeWriteInMiddleStyle}
          src={write_icon}
          height={topAvatarHeight}
        />
        <animated.img
          style={enlargeDrawInRightStyle}
          src={draw_icon}
          height={topAvatarHeight}
        />
        {/* lightning bolt strikes */}
        <animated.img
          style={lightningStrikeStyle}
          src="/animation/plainLightningBolt.svg"
          height={topAvatarHeight}
        />
        {/* trophy appear */}
        <animated.img
          style={trophyAppearStyle}
          src="/animation/trophyCup.svg"
          height={topAvatarHeight}
        />
        {/* avatars jump at trophy: */}
        <animated.img
          className="crash-location"
          style={useLeftDrawbackCrashStyle}
          src="/animation/boyAvatar.svg"
          height={crashAvatarHeight}
        />
        <animated.img
          className="crash-location"
          style={useRightDrawbackCrashStyle}
          src="/animation/girlAvatar.svg"
          height={crashAvatarHeight}
        />
        {/* crash image: */}
        <animated.img
          className="crash-location"
          style={enlargeCrashStyle}
          src="/animation/crashCrash.svg"
          height={crashImageSize}
        />
        {/* winner's image: */}
        <animated.img
          className="crash-location"
          src="/animation/championWithTrophy.svg"
          alt="me"
          height={winnerImageSize}
          style={upFromBottomStyle}
        />
      </div>
    </div>
  );
};

export default LandingAnimation;
