import React from 'react';
import { useHistory } from 'react-router-dom';

const PlayAgainButtonAnimation = () => {
  const { push } = useHistory();

<<<<<<< refs/remotes/origin/main
<<<<<<< refs/remotes/origin/main
  // const goToChildDashboard = () => {
  //   push('/child/dashboard');
  // };
=======
//  const goToChildDashboard = () => {
//   push('/child/dashboard');
//  };
>>>>>>> commented out unused funct
=======
  //  const goToChildDashboard = () => {
  //   push('/child/dashboard');
  //  };
>>>>>>> useCallback added
  const playAgain = () => {
    push('/child/play-again');
  };
  function listener(event) {
    var l = document.createElement('playbtn');
    switch (event.type) {
      case 'animationiteration':
        l.textContent = `New loop started at time ${event.elapsedTime}`;
        break;
<<<<<<< refs/remotes/origin/main
<<<<<<< refs/remotes/origin/main
      default:
        l.textContent = `Animation event of type ${event.type}`; // no default case was included, so I made my best guess while squashing bugs.
=======
	default: ;
>>>>>>> commented out unused funct
=======
      default:
>>>>>>> useCallback added
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
