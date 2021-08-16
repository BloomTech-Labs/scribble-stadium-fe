//** Import Modules */
import React from 'react';
import GameStepsProgress from './GameStepsProgress';

export default function GameReadStep(props) {
  return (
    <div id="read-step" className="gamemode-content">
      <GameStepsProgress />

      <div className="next-btn">
        <button>I'm awesome, I'm done reading!</button>
      </div>
    </div>
  );
}
