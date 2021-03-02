import { useSpring } from 'react-spring';

const useLightningBolt = ref => {
  const spring = useSpring({
    config: { mass: 10, tension: 480, friction: 100 },
    from: {
      position: 'absolute',
      opacity: 0,
      transform: 'translate3d(0%, -10%, 0px) scale(1)',
    },
    to: [
      {
        config: { duration: 400 },
        opacity: 1,
        transform: 'translate3d(0%, 100%, 0px) scale(1)',
      },
      {
        config: { duration: 200 },
        opacity: 0,
        transform: 'translate3d(0%, 20%, 0px) scale(1)',
      },
    ],
    ref: ref,
  });
  return spring;
};

export default useLightningBolt;
