import { useSpring } from 'react-spring';

const useNameWinner = ref => {
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
        transform: 'scale(1.5)',
      },
    ],
    ref: ref,
  });
  return spring;
};

export default useNameWinner;
