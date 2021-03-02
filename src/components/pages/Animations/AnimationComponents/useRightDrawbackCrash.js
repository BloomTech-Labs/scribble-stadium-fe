import { useSpring } from 'react-spring';
import useMedia from '../AnimationMediaHelper/useMedia.js';

const useRightDrawbackCrash = ref => {
  const phoneScreen = useMedia('(max-width:600px)');
  const tabletScreen = useMedia('(max-width:991px)');

  const spring = useSpring({
    delay: 12300,

    from: {
      opacity: 0,
      transform: phoneScreen
        ? 'translate3d(5%, 82%, 0px) scale(1.5)'
        : tabletScreen
        ? 'translate3d(5%, 50%, 0px) scale(1.5)'
        : 'translate3d(5%, 23%, 0px) scale(1.5)',
    },

    to: [
      {
        opacity: 1,
        transform: phoneScreen
          ? 'translate3d(300%, 82%, 0px) scale(1.5)'
          : tabletScreen
          ? 'translate3d(300%, 50%, 0px) scale(1.5)'
          : 'translate3d(300%, 23%, 0px) scale(1.5)',
      },
      {
        opacity: 1,
        transform: phoneScreen
          ? 'translate3d(0%, 82%, 0px) scale(1.5)'
          : tabletScreen
          ? 'translate3d(0%, 50%, 0px) scale(1.5)'
          : 'translate3d(0%, 23%, 0px) scale(1.5)',
      },
    ],

    ref: ref,
  });
  return spring;
};

export default useRightDrawbackCrash;
