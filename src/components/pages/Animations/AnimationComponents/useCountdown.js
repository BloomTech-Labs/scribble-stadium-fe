import { useSpring } from 'react-spring';

const useCountdown = (ref, num) => {
  const spring = useSpring({
    from: {
      number: num,
      opacity: 0,
      transform: 'scale(3)',
    },
    to: [
      {
        number: num,
        opacity: 1,
        transform: 'scale(10)',
      },
      {
        number: num,
        opacity: 0,
        transform: 'scale(1)',
      },
    ],
    config: {
      duration: 800,
    },
    ref: ref,
  });
  return spring;
};

export default useCountdown;
