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

  const goToPointShare = e => {
    e.preventDefault();
    push('/child/point-share');
  };

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
        <div className="small-matchup-window">
          <div id="first-window">
            <div className="player-container">
              <div
                id="first-player-small-window"
                className="player-image-small"
              ></div>
              <figcaption>player name</figcaption>
            </div>
            <div className="vs-lightning-image"></div>
            <div className="player-container">
              <div
                id="second-player-small-window"
                className="player-image-small"
              ></div>
              <figcaption>player name</figcaption>
            </div>
          </div>
          <h2>140 points to win</h2>
        </div>

        <div className="small-matchup-window">
          <div id="second-window">
            <div className="player-container">
              <div
                id="first-player-small-window"
                className="player-image-small"
              ></div>
              <figcaption>player name</figcaption>
            </div>
            <div className="vs-lightning-image"></div>
            <div className="player-container">
              <div
                id="second-player-small-window"
                className="player-image-small"
              ></div>
              <figcaption>player name</figcaption>
            </div>
          </div>
          <h2>150 points to win</h2>
        </div>
        <div className="small-matchup-window">
          <div id="third-window">
            <div className="player-container">
              <div
                id="third-player-small-window"
                className="player-image-small"
              ></div>
              <figcaption>player name</figcaption>
            </div>
            <div className="vs-lightning-image"></div>
            <div className="player-container">
              <div
                id="fourth-player-small-window"
                className="player-image-small"
              ></div>
              <figcaption>player name</figcaption>
            </div>
          </div>
          <h2>30 points to win</h2>
        </div>
        <div className="small-matchup-window">
          <div id="fourth-window">
            <div className="player-container">
              <div
                id="third-player-small-window"
                className="player-image-small"
              ></div>
              <figcaption>player name</figcaption>
            </div>
            <div className="vs-lightning-image"></div>
            <div className="player-container">
              <div
                id="fourth-player-small-window"
                className="player-image-small"
              ></div>
              <figcaption>player name</figcaption>
            </div>
          </div>
          <h2>50 points to win</h2>
        </div>
      </div>
    </>
  );
};

export default RenderMatchUp;
