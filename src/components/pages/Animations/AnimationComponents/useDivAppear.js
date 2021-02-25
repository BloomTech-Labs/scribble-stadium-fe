import { useSpring } from 'react-spring';

const useDivAppear = (ref, text) => {
  const spring = useSpring({
    from: {
      text: '',
      opacity: 0,
    },
    to: {
      text: text,
      opacity: 1,
    },
    ref: ref,
  });
  return spring;
};

export default useDivAppear;
