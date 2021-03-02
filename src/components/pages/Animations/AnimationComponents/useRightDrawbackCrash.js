import { useSpring } from 'react-spring';

const useRightDrawbackCrash = ref => {
  const spring = useSpring({
    delay: 12300,

    from: {
      opacity: 0,
      transform: 'translate3d(5%, 100%, 0px) scale(1.5)',
    },

    to: [
      {
        opacity: 1,
        transform: 'translate3d(300%, 100%, 0px) scale(1.5)',
      },
      {
        opacity: 1,
        transform: 'translate3d(0%, 100%, 0px) scale(1.5)',
      },
    ],

    ref: ref,
  });
  return spring;
};

export default useRightDrawbackCrash;
