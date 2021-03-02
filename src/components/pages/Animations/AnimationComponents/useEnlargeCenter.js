import { useSpring } from 'react-spring';
import useMedia from '../AnimationMediaHelper/useMedia.js';

const useEnlargeCenter = ref => {
  const phoneScreen = useMedia('(max-width:600px)');
  const tabletScreen = useMedia('(min-width:601px)');

  const spring = useSpring({
    delay: 13300,
    from: {
      opacity: 0,
      transform: 'translate3d(0%, -35%, 0px) scale(1)',
    },
    to: [
      {
        opacity: 1,
        transform: 'translate3d(0%, -35%, 0px) scale(6)',
      },
      {
        opacity: 1,
        transform: 'translate3d(0%, -35%, 0px) scale(5)',
      },
    ],
    ref: ref,
  });
  return spring;
};

export default useEnlargeCenter;
