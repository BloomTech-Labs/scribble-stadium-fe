import React from 'react';
import { useHistory } from 'react-router-dom';

const PlayAgainButtonAnimation = () => {
  const { push } = useHistory();

  const goToChildDashboard = () => {
    push('/child/dashboard');
  };
  const playAgain = () => {
    push('/child/play-again');
  };
  function listener(event) {
    var l = document.createElement('playbtn');
    switch (event.type) {
      case 'animationiteration':
        l.textContent = `New loop started at time ${event.elapsedTime}`;
        break;
    }
    document.getElementById('output').appendChild(l);
  }
  var el = document.getElementById('watchme');
  if (el) {
    el.addEventListener('animationiteration', listener, false);
    el.className = 'slidein';
  }

  return (
    <div className={'playagainbtn'}>
      <a href={goToChildDashboard}>
        {' '}
        <button onclick={playAgain} id="playbtn">
          Play Again
        </button>{' '}
      </a>
      <ul id="output"></ul>
    </div>
  );
};

export default PlayAgainButtonAnimation;
