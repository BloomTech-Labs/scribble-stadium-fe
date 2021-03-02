import { useSpring } from 'react-spring';
import useMedia from '../AnimationMediaHelper/useMedia';

const useGoBackButton = ref => {
  const phoneScreen = useMedia('(max-width:600px)');
  const tabletScreen = useMedia('(min-width:601px)');

  const spring = useSpring({
    from: {
      opacity: 0,
      transform: phoneScreen
        ? 'translate3d(-250%, 0%, 0px) scale(1)'
        : tabletScreen
        ? 'translate3d(-350%, 0%, 0px) scale(1)'
        : 'translate3d(-400%, 0%, 0px) scale(1)',
      position: 'absolute',
    },
    to: {
      opacity: 1,
    },
    ref: ref,
  });
  return spring;
};

export default useGoBackButton;
