// reusable animation component

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export function FadeInAnimation({
  children,
  wrapperElement = 'div',
  direction = null,
  delay = 0,
  ...props
}) {
  const Component = wrapperElement;
  const compRef = useRef(null);
  const distance = 400;
  let fadeDirection;
  switch (direction) {
    case 'left':
      fadeDirection = { x: -distance };
      break;
    case 'right':
      fadeDirection = { x: distance };
      break;
    case 'up':
      fadeDirection = { y: distance };
      break;
    case 'down':
      fadeDirection = { y: -distance };
      break;
    default:
      fadeDirection = { x: 0 };
  }
  useEffect(() => {
    gsap.from(compRef.current, 1, {
      ...fadeDirection,
      opacity: 0,
      delay,
    });
  }, [compRef, fadeDirection, delay]);
  return (
    <Component ref={compRef} {...props}>
      {children}
    </Component>
  );
}

export function MoveDownAnimation({
  children,
  wrapperElement = 'div',
  direction = null,
  ...props
}) {
  const Component = wrapperElement;
  const compRef = useRef(null);
  const distance = 400;
  let fadeDirection;
  switch (direction) {
    case 'left':
      fadeDirection = { x: -distance };
      break;
    case 'right':
      fadeDirection = { x: distance };
      break;
    case 'up':
      fadeDirection = { y: distance };
      break;
    case 'down':
      fadeDirection = { y: -distance };
      break;
    default:
      fadeDirection = { x: 0 };
  }
  useEffect(() => {
    gsap.from(compRef.current, 1, {
      ...fadeDirection,
      opacity: 0,
    });
  }, [compRef, fadeDirection]);
  return (
    <Component ref={compRef} {...props}>
      {children}
    </Component>
  );
}
