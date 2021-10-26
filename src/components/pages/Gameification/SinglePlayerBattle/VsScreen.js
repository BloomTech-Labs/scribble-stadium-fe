//** Import Modules */
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

//** Temp Assets */
import playerImg from '../../../../assets/images/gamemodeimg/placeholder.png';
import oppotnetImg from '../../../../assets/images/gamemodeimg/placeholder.png';

export default function VsScreen(props) {
  //* Handle the next button click
  const beginVoting = () => {
    props.history.push(`${props.baseURL}/story-voting`);
  };

  //* Add some animation
  useEffect(() => {
    gsap.from('#matchup-screen .heading', {
      scale: 0,
      opacity: 0,
      duration: 0.5,
    });

    gsap.from('#matchup-screen .vs', {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      delay: 1.5,
    });

    gsap.from('#matchup-screen .player', {
      scale: 0,
      duration: 1,
      delay: 0.5,
      opacity: 0,
    });

    gsap.from('#matchup-screen .opponent', {
      scale: 0,
      duration: 1,
      delay: 0.5,
      opacity: 0,
    });
  }, []);

  return (
    <div id="vs-screen">
      <div className="heading">
        <h2>Boss Mode</h2>
        <h3>Meet your matchup</h3>
      </div>

      <div className="vs-section">
        <div className="player avatar">
          <img src={playerImg} alt="Player Avatar" />
          <p>Player Name</p>
        </div>

        <div className="vs">VS</div>

        <div className="opponent avatar">
          <img src={oppotnetImg} alt="Opponent Avatar" />
          <p>Bot Jackson</p>
        </div>
      </div>

      <div className="next-btn">
        <button onClick={beginVoting}>Start Voting</button>
      </div>
    </div>
  );
}
