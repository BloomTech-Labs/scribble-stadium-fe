import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { Header } from '../../common';
import ChildFooter from '../../common/ChildFooter';
import FaceoffContent from './FaceoffContent';
import { InstructionsModal } from '../../common';
import { modalInstructions } from '../../../utils/helpers';

const RenderMatchUp = props => {
  const { push } = useHistory();

  return (
    <>
      <Header displayMenu={true} title="Scribble Stadium" />
      

      <div className="matchup-container">
        <div id="matchup-window">
          <h1>The Matchup</h1>
          <h2>201 points to win</h2>
          <div className="player-matchup">
            <div className="player-container">
              <div id="first-player" className="player-image"></div>
              <figcaption>player name</figcaption>
            </div>
            <div className="player-container">
              <div id="second-player" className="player-image"></div>
              <figcaption>player name</figcaption>
            </div>
            <div className="vs-image"></div>
            <div className="player-container">
              <div id="third-player" className="player-image"></div>
              <figcaption>player name</figcaption>
            </div>
            <div className="player-container">
              <div id="fourth-player" className="player-image"></div>
              <figcaption>player name</figcaption>
            </div>
          </div>
        </div>
      </div>
      <div className="drawing-story-matchup">
        <div className="drawing-matchup"></div>
        <div className="story-matchup"></div>
      </div>
    </>
  );
};

export default RenderMatchUp;
