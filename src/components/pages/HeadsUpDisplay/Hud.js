import React from 'react';
import { CountDownTimer } from './CountdownTimer';
import { DownCircleFilled } from '@ant-design/icons';
import { Collapse } from 'antd';
import PropTypes from 'prop-types';

function Hud(props) {
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
  const countdownTimerPositionIndex = getCountdownTimerPositionIndex(
    currentActivity
  );
  const { Panel } = Collapse;

  return (
    <div className="HudContainer">
      <div className="countdown-timer-container">
        <div className={`ctimer pos-${countdownTimerPositionIndex}`}>
          <CountDownTimer />
        </div>
      </div>

      <div
        className={`progressionBar ${
          completedActivity[0] === 'Read' && 'progressionBarLoaded'
        }`}
      >
        {activities.map(a => {
          return (
            <div
              className={`activity ${currentActivity === a && 'currentActivity'}
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
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => (
          <DownCircleFilled
            rotate={isActive ? 180 : 0}
            style={{ fontSize: '18px' }}
          />
        )}
        className="site-collapse-custom-collapse"
      >
        <Panel header="" key="1" className="site-collapse-custom-panel">
          <div className="dayBars">
            {dayBars.map(a => {
              return (
                <div
                  className={`${a} ${currentBar === a && 'currentBar'}`}
                ></div>
              );
            })}
          </div>

          <div className="days">
            <div className="day1-3">Day 1 - 3</div>
            <div className="day4">Day 4</div>
            <div className="day5">Day 5</div>
            <div className="day6-7">Day 6 - 7</div>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}

/**
 *
 * @param {string} currentActivity - "Read", "Draw", "Write", "Squad Up", "Point Share", "Voting"
 * @returns {number} One of three timer positions
 */
function getCountdownTimerPositionIndex(currentActivity) {
  if (currentActivity === undefined) {
    return 1;
  }

  const activityToTimerPositionMap = {
    Read: 1,
    Draw: 1,
    Write: 1,
    'Squad Up': 2,
    'Point Share': 2,
    Voting: 3,
  };

  return activityToTimerPositionMap[currentActivity];
}

Hud.propTypes = {
  completedActivity: PropTypes.arrayOf(
    PropTypes.oneOf(
      'Read',
      'Draw',
      'Write',
      'Squad Up',
      'Point Share',
      'Voting'
    )
  ).isRequired,
  currentActivity: PropTypes.string.isRequired,
  currentBar: PropTypes.string.isRequired,
};

export default Hud;
