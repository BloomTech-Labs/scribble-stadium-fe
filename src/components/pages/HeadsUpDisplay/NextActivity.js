import React, { useState, useEffect } from "react";

export const NextActivity = () => {

  const [day, setDay] = useState(1);
  const [activity, setActivity] = useState("");

  const nextDay = (day) => {
    let today = new Date().getDay();
    setDay(today);
    if (today === 0) {
      if (day === 13) {
        setDay(0);
        return;
        // return day;
      } else if (day === 6) {
        setDay(7);
        return;
      }
    } else if (today === 1) {
      if (day === 0) {
        setDay(1);
        return;
      } else if (day === 7) {
        setDay(8);
        return;
      }
    } else if (today === 2) {
      if (day === 1) {
        setDay(2);
        return;
      } else if (day === 8) {
        setDay(9);
        return;
      }
    } else if (today === 3) {
      if (day === 2) {
        setDay(3);
        return;
      } else if (day === 9) {
        setDay(10);
        return;
      }
    } else if (today === 4) {
      if (day === 3) {
        setDay(4);
        return;
      } else if (day === 10) {
        setDay(11);
        return;
      }
    } else if (today === 5) {
      if (day === 4) {
        setDay(5);
        return;
      } else if (day === 11) {
        setDay(13);
        return;
      }
    } else if (today === 6) {
      if (day === 5) {
        setDay(6);
        return;
      } else if (day === 12) {
        setDay(13);
        return;
      }
    }
  };
}