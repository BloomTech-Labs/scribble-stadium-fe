import { useSpring } from 'react-spring';

const useUpFromBottom = ref => {
  const spring = useSpring({
    config: { mass: 80, tension: 1000, friction: 250 },
    from: {
      position: 'absolute',
      opacity: 0,
      transform: 'translate3d(0%, 1050%, 0px) scale(6.5)',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0%, 0%, 0px) scale(1)',
    },
    ref: ref,
  });
  return spring;
};

export default useUpFromBottom;
