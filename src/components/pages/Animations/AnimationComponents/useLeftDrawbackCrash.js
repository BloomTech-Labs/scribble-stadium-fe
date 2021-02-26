import { useSpring } from 'react-spring';

const useLeftDrawbackCrash = ref => {
  const spring = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(-5%, 0%, 0px) scale(1.5)',
    },
    to: [
      {
        opacity: 1,
        transform: 'translate3d(-300%, 0%, 0px) scale(1.5)',
      },
      {
        opacity: 1,
        transform: 'translate3d(0%, 0%, 0px) scale(1.5)',
      },
    ],
    ref: ref,
  });
  return spring;
};

export default useLeftDrawbackCrash;
