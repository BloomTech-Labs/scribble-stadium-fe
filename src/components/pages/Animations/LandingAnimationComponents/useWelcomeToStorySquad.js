import { useSpring } from 'react-spring';

const useWelcomeToStorySquad = (ref, text) => {
  let positionVals = '';
  if (text === 'READ!') {
    positionVals = 'translate3d(-150%, 0%, 0px) scale(1)';
  } else if (text === 'WRITE!') {
    positionVals = 'translate3d(60%, 0%, 0px) scale(1)';
  } else if (text === 'DRAW!') {
    positionVals = 'translate3d(250%, 0%, 0px) scale(1)';
  } else {
    positionVals = 'translate3d(-75%, 325%, 0px) scale(1) rotate(345deg)';
  }

  const spring = useSpring({
    config: { mass: 10, tension: 180, friction: 100, duration: 200 },
    from: {
      text: text,
      opacity: 0,
      transform: positionVals,
    },
    to: {
      text: text,
      opacity: 1,
      transform: positionVals,
    },
    ref: ref,
  });
  return spring;
};

export default useWelcomeToStorySquad;
