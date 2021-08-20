import React, { useState, useEffect } from "react";

export const NextActivity = () => {
  const [day, setDay] = useState(1);
  const [activity, setActivity] = useState("");

  const nextDay = () => {
    let today = new Date().getDay();

    const checkDay = [
      [13, 6],
      [0, 7],
      [1, 8],
      [2, 9],
      [3, 10],
      [4, 11],
      [5, 12]
    ];

    let prevDay = checkDay[today];

    // This funcion will set current day based on previous day
    const calcDay = () => {
      if (day === prevDay[1]) {
        setDay(prevDay[1] + 1);
        return;
      } else if (day === prevDay[0]) {
        prevDay[0] === 13 ? setDay(0) : setDay(prevDay[0] + 1);
        return;
      }
    };
    calcDay();
  };

  // This function will find the current activity based on current day and set to state
  const nextActivity = () => {
    const activityList = {
      0: "Big Final Reveal",
      1: "Read",
      2: "Draw",
      3: "Write",
      4: "Squadding Up",
      5: "Point Share",
      6: "Matchup 1",
      7: "Voting Session 1",
      8: "Matchup 2",
      9: "Voting Session 2",
      10: "Matchup 3",
      11: "Voting Session 3",
      12: "Matchup 4",
      13: "Big Final Reveal"
    };
    setActivity(activityList[day + 1]);
    return activity;
  };

  // useEffect to call both functions on render
  useEffect(() => {
    nextDay();
    nextActivity();
  });

  return <div>Next Activity: {activity}</div>;
};
