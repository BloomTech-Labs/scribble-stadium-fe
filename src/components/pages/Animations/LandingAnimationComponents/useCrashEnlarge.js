import { useSpring } from 'react-spring';

const useCrashEnlarge = ref => {
  const spring = useSpring({
    from: {
      opacity: 0,
      transform: 'scale(1)',
    },
    to: [
      {
        opacity: 1,
        transform: 'scale(4)',
      },
      {
        opacity: 1,
        transform: 'scale(2)',
      },
    ],
    ref: ref,
  });
  return spring;
};

export default useCrashEnlarge;
