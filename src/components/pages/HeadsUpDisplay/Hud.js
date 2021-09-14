import React, { useState } from 'react';
import { CountDownTimer } from './CountdownTimer';
import Hud from '../../../styles/less/Hud.less';
import checkMark from '../../../assets/images/Checkmark.svg';
import { Button } from 'antd';
import { UpCircleFilled } from '@ant-design/icons';

export default function (props) {
  const { completedActivity, currentActivity, currentBar } = props;
  const activities = [
    'Read',
    'Draw',
    'Write',
    'Squad Up',
    'Point Share',
    'Voting',
  ];

  const dayBars = ['bar1', 'bar2', 'bar3', 'bar4'];

  return (
    <div className="HudContainer">
      <CountDownTimer />
      <br />
      {/* This is going to show all tasks as well as indicating current task */}
      <div className="progressionBar">
        {activities.map(a => {
          return (
            <div
              className={`activity ${currentActivity == a && 'currentActivity'}
              ${
                completedActivity.length - 1 >= activities.indexOf(a) &&
                'completedActivity'
              }`}
            >
              <span>{a}</span>
            </div>
          );
        })}
      </div>
      {/* This will show the days and indicaate current day 
       <img class="checkImg"  src={checkMark} alt="checkMark"></img>
              <br></br>*/}

      <div className="dayBars">
        {dayBars.map(a => {
          return (
            <div className={`${a} ${currentBar == a && 'currentBar'}`}></div>
          );
        })}
      </div>

      <div className="days">
        <div className="day1-3">Day 1 - 3</div>
        <div className="day4">Day 4</div>
        <div className="day5">Day 5</div>
        <div className="day6-7">Day 6 - 7</div>
      </div>
      {/* Button for collapsing/expanding will go here */}
      <input type="checkbox" name="toggle" id="toggle" />
      <label for="toggle"></label>
      <div class="message"> CONTENT GOES HERE </div>
    </div>
  );
}
