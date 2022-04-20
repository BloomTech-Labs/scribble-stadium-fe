import React from 'react';
import { useHistory } from 'react-router-dom';

const PlayAgainButtonAnimation = () => {
  const { push } = useHistory();

  // const goToChildDashboard = () => {
  //   push('/child/dashboard');
  // };
  const playAgain = () => {
    push('/child/play-again');
  };
  function listener(event) {
    var l = document.createElement('playbtn');
    switch (event.type) {
      case 'animationiteration':
        l.textContent = `New loop started at time ${event.elapsedTime}`;
        break;
      default:
        l.textContent = `Animation event of type ${event.type}`; // no default case was included, so I made my best guess while squashing bugs.
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
      <button onClick={playAgain} id="playbtn" className={'play-again-btn'}>
        Play Again
      </button>{' '}
      <ul id="output"></ul>
    </div>
  );
};

export default PlayAgainButtonAnimation;
