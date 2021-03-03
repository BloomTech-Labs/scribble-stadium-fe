import { useSpring } from 'react-spring';

const useUpFromBottom = ref => {
  const spring = useSpring({
    delay: 14000,
    config: { mass: 80, tension: 1000, friction: 250 },
    from: {
      position: 'absolute',
      opacity: 0,
      transform: 'translate3d(0%, 1050%, 0px) scale(8)',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0%, 0%, 0px) scale(2)',
    },
    ref: ref,
  });
  return spring;
};

export default useUpFromBottom;
