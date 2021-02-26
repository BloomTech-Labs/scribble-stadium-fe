import { useSpring } from 'react-spring';
const useCounter = (ref, num) => {
  const spring = useSpring({
    from: {
      number: 0,
      opacity: 0,
    },
    to: {
      number: num,
      opacity: 1,
    },
    config: {
      duration: 3000,
    },
    ref: ref,
  });
  return spring;
};
export default useCounter;
