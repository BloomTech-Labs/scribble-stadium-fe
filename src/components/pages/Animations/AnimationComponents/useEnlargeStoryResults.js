import { useSpring } from 'react-spring';

const useEnlargeStoryResults = ref => {
  const spring = useSpring({
    config: { mass: 10, tension: 180, friction: 100 },
    from: {
      opacity: 0,
      transform: 'translate3d(0%, 150%, 0px) scale(3)',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0%, 5%, 0px) scale(1)',
    },
    ref: ref,
  });
  return spring;
};

export default useEnlargeStoryResults;
