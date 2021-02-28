import { useSpring } from 'react-spring';

const useLeftJumpCrash = ref => {
  const spring = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(-300%, 300%, 0px) scale(2) rotate(0deg)',
    },
    to: [
      // {
      //   opacity: 1,
      //   transform: "translate3d(-300%, 200%, 0px) scale(2) rotate(5deg)"
      // },
      // {
      //   opacity: 1,
      //   transform: "translate3d(-200%, 100%, 0px) scale(2) rotate(45deg)"
      // },
      {
        opacity: 1,
        transform: 'translate3d(0%, 0%, 0px) scale(2) rotate(90deg)',
      },
    ],
    ref: ref,
  });
  return spring;
};

export default useLeftJumpCrash;
