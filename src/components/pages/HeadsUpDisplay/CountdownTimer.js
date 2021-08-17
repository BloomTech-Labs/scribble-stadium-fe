import React, { useState, useEffect } from 'react';
import { CurrentActivity } from './CurrentActivity';

export const CountDownTimer = () => {
  // This function will calculate difference between current and target times
  const calculateTimeRemaining = () => {
    let currTime = new Date();

    // Set endTime to midnight each day, need to add logic for Saturday weekTwo to === 48 hours
    let endTime = new Date().setHours(24, 0, 0, 0);

    let timeDiff = endTime - currTime;

    return timeDiff;
  };

  // This function will convert the format for our time difference to HH:MM:SS
  const convertTimeFormat = time => {
    let timeVar = parseInt(time, 10);

    let hours = Math.floor(timeVar / (1000 * 60 * 60));
    let minutes = Math.floor((timeVar / (1000 * 60)) % 60);
    let seconds = Math.floor(timeVar / 1000) % 60;

    return [hours, minutes, seconds]
      .map(v => (v < 10 ? '0' + v : v))
      .filter((v, i) => v !== '00' || i > 0)
      .join(':');
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer =
      timeRemaining > 0 &&
      setTimeout(() => setTimeRemaining(calculateTimeRemaining()), 1000);
    return () => clearTimeout(timer);
  }, [timeRemaining]);

  return (
    // <div className="countdown-timer">
    //   <div>Current Activity: <CurrentActivity /></div>
    //   <div>Time Remaining: {convertTimeFormat(timeRemaining)}</div>
    // </div>
    <div className="timer">{convertTimeFormat(timeRemaining)}</div>
  );
};
