import React, { useState, useEffect } from 'react';

export const NextActivity = () => {
  const [day, setDay] = useState(1);
  const [activity, setActivity] = useState('');

  // Set current day in state
  const nextDay = () => {
    let today = new Date().getDay();

    setDay(today);
  };

  // This function will find the next activity based on next day and set to state
  const nextActivity = () => {
    const activityList = {
      0: 'Big Final Reveal',
      1: 'Read',
      2: 'Draw',
      3: 'Write',
      4: 'Squadding Up',
      5: 'Point Share',
      6: 'Voting',
    };
    setActivity(day === 6 ? activityList[0] : activityList[day + 1]);
    return activity;
  };

  // useEffect to call both functions on render
  useEffect(() => {
    nextDay();
    nextActivity();
  });

  return <div>Next Activity: {activity}</div>;
};
