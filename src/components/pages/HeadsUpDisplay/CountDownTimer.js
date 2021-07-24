import React, { useState, useEffect } from 'react';

export const CountDownTimer = () => {
  // This function will convert timer from seconds to HH:MM:SS format
  const convertTimeFormat = time => {
    let timeVar = parseInt(time, 10);

    let hours = Math.floor(timeVar / 60 / 60);
    let minutes = Math.floor(timeVar / 60) - hours * 60;
    let seconds = timeVar % 60;

    return [hours, minutes, seconds]
      .map(v => (v < 10 ? '0' + v : v))
      .filter((v, i) => v !== '00' || i > 0)
      .join(':');
  };

  // Placeholder, will need to add logic for how much time to add to timer
  let time = 86400;

  const [timeRemaining, setTimeRemaining] = useState(time);

  // This will be used to decide how much time on timer
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  /** Incrementally remove seconds, need to figure out why timeout has to
   *   be set to 500 MS, should work at 1000
   */
  useEffect(() => {
    const timer =
      timeRemaining > 0 &&
      setTimeout(() => setTimeRemaining(timeRemaining - 1), 500);
    return () => timer;
  }, [timeRemaining]);

  return (
    <div className="countdown-timer">
      <div>Countdown: {convertTimeFormat(timeRemaining)}</div>
    </div>
  );
};
