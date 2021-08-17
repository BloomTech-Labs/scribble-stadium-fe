import React, { useState } from 'react';
import { CountDownTimer } from './CountdownTimer';
import Hud from '../../../styles/less/Hud.less';

export default function (props) {
  return (
    <div className="HudContainer">
      <CountDownTimer />
      {/* This is going to show all tasks as well as indicating current task */}
      <div className="progressionBar">
        <div classname="read">Read</div>
        <div classname="draw">Draw</div>
        <div classname="write">Write</div>
        <div classname="squad">Squad Up</div>
        <div classname="pontShare">Point Share</div>
        <div classname="vote">Vote</div>
      </div>
      {/* This will show the days and indicaate current day */}
      <div className="dayBars">
        <div className="day1-3"></div>
        <div className="day4-5"></div>
        <div className="day6-7"></div>
      </div>
    </div>
  );
}
