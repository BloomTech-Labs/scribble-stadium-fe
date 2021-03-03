import { useSpring } from 'react-spring';

const useRightJumpCrash = ref => {
  const spring = useSpring({
    delay: 3300,

    from: {
      opacity: 0,
      transform: 'translate3d(300%, 300%, 0px) scale(2) rotate(355deg)',
    },

    to: [
      // {
      //   opacity: 1,
      //   transform: "translate3d(300%, 200%, 0px) scale(2) rotate(355deg)"
      // },
      // {
      //   opacity: 1,
      //   transform: "translate3d(200%, 100%, 0px) scale(2) rotate(315deg)"
      // },
      {
        config: { duration: 500 },
        opacity: 1,
        transform: 'translate3d(0%, 150%, 0px) scale(2) rotate(270deg)',
      },
    ],

    ref: ref,
  });
  return spring;
};

export default useRightJumpCrash;
