import { useSpring } from 'react-spring';

const useDivAppear = (ref, text) => {
  let delayVar = 0;

  if (text === '+') {
    delayVar = 18000;
  } else {
    delayVar = 0;
  }

  const spring = useSpring({
    delay: delayVar,
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
