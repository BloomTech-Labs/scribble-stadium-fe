import React, { useState, useEffect } from 'react';

export const CountDownTimer = () => {
  // This function will calculate difference between current and target times
  const calculateTimeRemaining = () => {
    let currTime = new Date();
    // let currTime = new Date("2021-08-08T23:59:59");
    // let currTime = new Date("2021-08-09T00:00:00");
    // console.log("currTime", currTime);

    // If the day of week is Saturday, countdown will be 48 hours, otherwise, 24 hours
    let endTime = new Date().setHours(24, 0, 0, 0);
    // console.log("endTime", convertTimeFormat(endTime));
    // currTime.getDay() === 6
    //   ? new Date().setHours(48, 0, 0, 0)
    //   : new Date().setHours(24, 0, 0, 0);

    // let endTime = new Date("2021-08-09T00:00:00");

    let timeDiff = endTime - currTime;

    // console.log("timeDiff", convertTimeFormat(timeDiff));

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
  const [week, setWeek] = useState('weekOne');

  // This function will display the current activity based on day of the week
  const currActivity = () => {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const activityList = {
      weekOne: {
        Sunday: 'Voting Session 1',
        Monday: 'Read',
        Tuesday: 'Draw',
        Wednesday: 'Write',
        Thursday: 'Squadding Up',
        Friday: 'Point Share',
        Saturday: 'Matchup',
      },
      weekTwo: {
        Sunday: 'Big Final Reveal',
        Monday: 'Matchup',
        Tuesday: 'Voting Session 2',
        Wednesday: 'Matchup',
        Thursday: 'Voting Session 3',
        Friday: 'Matchup',
        Saturday: 'Big Final Reveal',
      },
    };

    let day = daysOfWeek[new Date().getDay()];
    // let day = daysOfWeek[new Date("2021-08-08T23:59:59").getDay()];
    // let day = daysOfWeek[new Date("2021-08-09T00:00:00").getDay()];

    const toggleWeek = week => {
      week === 'weekOne' ? setWeek('weekTwo') : setWeek('weekOne');
    };

    if (day === 1 && convertTimeFormat(timeRemaining) === 0) {
      toggleWeek(week);
    }

    console.log(
      'week',
      week,
      'day',
      day,
      'currActivity',
      activityList[week][day],
      'timeRemaining',
      convertTimeFormat(timeRemaining)
    );
    return activityList[week][day];
  };

  currActivity();

  useEffect(() => {
    const timer =
      timeRemaining > 0 &&
      setTimeout(() => setTimeRemaining(calculateTimeRemaining()), 1000);
    return () => clearTimeout(timer);
  }, [timeRemaining]);

  return (
    <div className="countdown-timer">
      <div>Current Activity: {currActivity()}</div>
      <div>Countdown: {convertTimeFormat(timeRemaining)}</div>
    </div>
  );
};
