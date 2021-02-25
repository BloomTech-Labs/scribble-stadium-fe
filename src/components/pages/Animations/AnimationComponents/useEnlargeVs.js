import { useSpring } from 'react-spring';

const useEnlargeVs = ref => {
  const spring = useSpring({
    config: { mass: 10, tension: 480, friction: 100 },
    from: {
      position: 'absolute',
      opacity: 0,
      transform: 'translate3d(0%, -10%, 0px) scale(2)',
    },
    to: [
      {
        opacity: 1,
        transform: 'translate3d(0%, 250%, 0px) scale(1)',
      },
    ],
    ref: ref,
  });
  return spring;
};

export default useEnlargeVs;
