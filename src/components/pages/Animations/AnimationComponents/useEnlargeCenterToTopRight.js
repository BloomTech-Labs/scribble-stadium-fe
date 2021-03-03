import { useSpring } from 'react-spring';
import useMedia from '../AnimationMediaHelper/useMedia.js';

const useEnlargeCenterToTopRight = ref => {
  const phoneScreen = useMedia('(max-width:600px)');
  const tabletScreen = useMedia('(max-width:991px)');

  const spring = useSpring({
    delay: 10500,
    config: { mass: 10, tension: 500, friction: 150 },
    from: {
      position: 'absolute',
      opacity: 0,
      transform: 'translate3d(0%, 600%, 0px) scale(1)',
    },
    to: [
      {
        opacity: 1,
        transform: phoneScreen
          ? 'translate3d(0%, 600%, 0px) scale(2)'
          : tabletScreen
          ? 'translate3d(0%, 400%, 0px) scale(3)'
          : 'translate3d(0%, 600%, 0px) scale(4)',
      },
      {
        opacity: 1,
        transform: phoneScreen
          ? 'translate3d(300%, 200%, 0px) scale(1.5)'
          : tabletScreen
          ? 'translate3d(475%, 200%, 0px) scale(1.5)'
          : 'translate3d(1000%, 250%, 0px) scale(2)',
      },
      {
        opacity: 0,
      },
    ],
    ref: ref,
  });
  return spring;
};

export default useEnlargeCenterToTopRight;
