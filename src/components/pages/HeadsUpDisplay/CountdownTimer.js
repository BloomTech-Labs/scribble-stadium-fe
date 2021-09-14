import React, { useState, useEffect } from 'react';
import { CurrentActivity } from './CurrentActivity';
import { NextActivity } from './NextActivity';

export const CountDownTimer = () => {
  // This function will calculate difference between current and target times
  const calculateTimeRemaining = () => {
    let currTime = new Date();

    // This variable will format current local time to pacific timezone (string)
    let pst = currTime.toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });

    let endTime = new Date();
    let today = new Date().getDay();

    const countdownVar = {
      0: 72,
      1: 24,
      2: 24,
      3: 48,
    };

    // Set endTime based on day of week (72, 48, 25 hour timers)
    endTime.setHours(countdownVar[today], 0, 0, 0);
    // parse var pst, changing it from string to number format, then subtract from endTime
    let timeDiff = endTime - Date.parse(pst);

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
    <div className="countdown-timer">
      <div>Time Remaining: {convertTimeFormat(timeRemaining)}</div>
    </div>
  );
};
