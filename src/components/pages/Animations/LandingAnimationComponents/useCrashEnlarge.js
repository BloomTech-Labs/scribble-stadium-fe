import { useSpring } from 'react-spring';

const useCrashEnlarge = ref => {
  const spring = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(0%, 100%, 0px) scale(1)',
    },
    to: [
      {
        config: { duration: 200 },
        opacity: 1,
        transform: 'translate3d(0%, 100%, 0px) scale(4)',
      },
      {
        config: { duration: 200 },
        opacity: 1,
        transform: 'translate3d(0%, 100%, 0px) scale(3)',
      },
    ],
    ref: ref,
  });
  return spring;
};

export default useCrashEnlarge;
