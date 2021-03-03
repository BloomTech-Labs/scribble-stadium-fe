import { useSpring } from 'react-spring';

const useWelcomeToStorySquad = (ref, text) => {
  let positionVals = '';
  if (text === 'READ!') {
    positionVals = 'translate3d(-235%, 20%, 0px) scale(1)';
  } else if (text === 'WRITE!') {
    positionVals = 'translate3d(0%, 20%, 0px) scale(1)';
  } else {
    positionVals = 'translate3d(185%, 20%, 0px) scale(1)';
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
