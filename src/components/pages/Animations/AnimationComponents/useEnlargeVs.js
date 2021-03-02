import { useSpring } from 'react-spring';

const useEnlargeVs = ref => {
  const spring = useSpring({
    config: { mass: 10, tension: 480, friction: 100 },
    from: {
      position: 'absolute',
      opacity: 0,
      transform: 'translate3d(0%, -5%, 0px) scale(3)',
    },
    to: [
      {
        opacity: 1,
        transform: 'translate3d(0%, 330%, 0px) scale(4)',
      },
      // {
      //   opacity: 1,
      //   transform: 'translate3d(0%, 320%, 0px) scale(3)',
      // }
    ],
    ref: ref,
  });
  return spring;
};

export default useEnlargeVs;
