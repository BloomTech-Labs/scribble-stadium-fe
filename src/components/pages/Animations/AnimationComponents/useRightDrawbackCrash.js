import { useSpring } from 'react-spring';
import useMedia from '../AnimationMediaHelper/useMedia.js';

const useRightDrawbackCrash = ref => {
  const phoneScreen = useMedia('(max-width:600px)');
  const tabletScreen = useMedia('(max-width:991px)');

  const spring = useSpring({
    delay: 13000,

    from: {
      opacity: 0,
      transform: phoneScreen
        ? 'translate3d(5%, 0%, 0px) scale(1.5)'
        : tabletScreen
        ? 'translate3d(5%, 18%, 0px) scale(1.5)'
        : 'translate3d(5%, 23%, 0px) scale(1.5)',
    },

    to: [
      {
        opacity: 1,
        transform: phoneScreen
          ? 'translate3d(300%, 0%, 0px) scale(1.5)'
          : tabletScreen
          ? 'translate3d(300%, 18%, 0px) scale(1.5)'
          : 'translate3d(300%, 23%, 0px) scale(1.5)',
      },
      {
        opacity: 1,
        transform: phoneScreen
          ? 'translate3d(0%, 0%, 0px) scale(1.5)'
          : tabletScreen
          ? 'translate3d(0%, 18%, 0px) scale(1.5)'
          : 'translate3d(0%, 23%, 0px) scale(1.5)',
      },
    ],

    ref: ref,
  });
  return spring;
};

export default useRightDrawbackCrash;
