import { useSpring } from 'react-spring';

const useNameWinner = ref => {
  const spring = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    ref: ref,
  });
  return spring;
};

export default useNameWinner;
