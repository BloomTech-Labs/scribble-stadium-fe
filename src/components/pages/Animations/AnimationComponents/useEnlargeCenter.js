import { useSpring } from 'react-spring';

const useEnlargeCenter = ref => {
  const spring = useSpring({
    delay: 15300,
    from: {
      opacity: 0,
      transform: 'scale(1)',
    },
    to: [
      {
        opacity: 1,
        transform: 'scale(6)',
      },
      {
        opacity: 1,
        transform: 'scale(3.2)',
      },
    ],
    ref: ref,
  });
  return spring;
};

export default useEnlargeCenter;
