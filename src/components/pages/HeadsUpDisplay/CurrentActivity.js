import React, { useState, useEffect } from 'react';

export const CurrentActivity = () => {
  const [day, setDay] = useState(1);
  const [activity, setActivity] = useState('');

  // Set current day into state
  const currDay = () => {
    let today = new Date().getDay();
    setDay(today);
  };

  // This function will find the current activity based on current day and set to state
  const currActivity = () => {
    const activityList = {
      0: 'Big Final Reveal',
      1: 'Read',
      2: 'Draw',
      3: 'Write',
      4: 'Squadding Up',
      5: 'Point Share',
      6: 'Voting',
    };
    setActivity(activityList[day]);
    return activity;
  };

  // useEffect to call both functions on render
  useEffect(() => {
    currDay();
    currActivity();
  });

  return <div>Current Activity: {activity}</div>;
};
