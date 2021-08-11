import React from 'react';
import NewHud from './NewHud';

export default function NewProgressCharts(props) {
  return (
    <div className="ProgressContainer">
      <div className="ProgressHeader">
        <h2>Progress Charts</h2>
      </div>
      <div className="hud-container">
        <NewHud />
      </div>
      <div className="ProgressBoxContainer">
        <div className="ProgressBox">
          <br />
          <h4>Progress Chart will be displayed here!</h4>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
