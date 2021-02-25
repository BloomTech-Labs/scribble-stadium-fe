import { useSpring } from 'react-spring';

const useRightDrawbackCrash = ref => {
  const spring = useSpring({
    delay: 15500,

    from: {
      opacity: 0,
      transform: 'translate3d(5%, 0%, 0px) scale(2)',
    },

    to: [
      {
        opacity: 1,
        transform: 'translate3d(300%, 0%, 0px) scale(2)',
      },
      {
        opacity: 1,
        transform: 'translate3d(0%, 0%, 0px) scale(2)',
      },
    ],

    ref: ref,
  });
  return spring;
};

export default useRightDrawbackCrash;
