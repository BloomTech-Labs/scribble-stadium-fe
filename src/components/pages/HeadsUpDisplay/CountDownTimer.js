import React, { useState, useEffect } from 'react';

export const CountDownTimer = () => {
  // This function will calculate difference between current and target times
  const calculateTimeRemaining = () => {
    let currTime = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(Date.now());
    console.log('current time is ', time);
    // let timeDiff =
  };

  const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const [timeRemaining, setTimeRemaining] = useState(time);
};
