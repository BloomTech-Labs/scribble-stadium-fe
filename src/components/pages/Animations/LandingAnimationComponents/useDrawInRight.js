import { useSpring } from 'react-spring';
import useMedia from '../AnimationMediaHelper/useMedia.js';

const useDrawInRight = ref => {
  const phoneScreen = useMedia('(max-width:600px)');
  const tabletScreen = useMedia('(min-width:601px)');

  const spring = useSpring({
    config: { mass: 10, tension: 500, friction: 150 },
    from: {
      position: 'absolute',
      opacity: 0,
      transform: 'translate3d(500%, 200%, 0px) scale(1) rotate(355deg)',
    },
    to: [
      {
        config: { duration: 200 },
        opacity: 1,
        transform: phoneScreen
          ? 'translate3d(300%, 200%, 0px) scale(2)'
          : tabletScreen
          ? 'translate3d(500%, 200%, 0px) scale(2) rotate(0deg)'
          : 'translate3d(700%, 200%, 0px) scale(4)',
      },
      {
        config: { duration: 200 },
        opacity: 1,
        transform: phoneScreen
          ? 'translate3d(300%, 200%, 0px) scale(1)'
          : tabletScreen
          ? 'translate3d(500%, 300%, 0px) scale(2)'
          : 'translate3d(700%, 300%, 0px) scale(2.5)',
      },
    ],
    ref: ref,
  });
  return spring;
};

export default useDrawInRight;
