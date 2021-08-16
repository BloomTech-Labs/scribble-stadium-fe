import React from 'react';

export default function GameMissionProgress() {
  return (
    <div id="mission-progress">
      <h3>Your Mission</h3>

      <div className="steps">
        <div id="step-1" className="step">
          <span>1</span>
          Read
        </div>

        <div id="step-2" className="step">
          <span>2</span>
          Draw
        </div>

        <div id="step-3" className="step">
          <span>3</span>
          Write
        </div>
      </div>
    </div>
  );
}
