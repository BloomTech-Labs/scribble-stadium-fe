import React from 'react';
import { Header } from '../../common';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import boom from '../../../assets/images/boom-img.png';
import talkBubble1 from '../../../assets/images/talk-bubble1.png';
import talkBubble2 from '../../../assets/images/talk-bubble2.png';
import ChildFooter from '../../common/ChildFooter';

// import hero images - TEMPORARY HARD CODE - remove when pulling state ( avatarID ) from backend
import childOneImg from '../../../assets/images/hero_images/hero10.png';
import childTwoImg from '../../../assets/images/hero_images/hero8.png';

const RenderNextSteps = () => {
  const { push } = useHistory();

  const goToMatchup = () => {
    push('/child/match-up');
  };

  return (
    <>
      <Header displayMenu={true} />
      <div className="next-steps">
        <div className="next-steps-container">
          <div className="next-steps-text">
            <h1 className="next-steps-header">JOIN YOUR SQUAD</h1>
            <p className="next-steps-description">
              Congrats! You have been matched with another player and are now
              part of a squad. Your squad is now ready to take part in a match
              between 2 squads. Ready?
            </p>
          </div>

          <div className="next-steps-content">
            <div className="next-steps-child-info">
              <div className="image-wrapper">
                <img
                  className="background-image talk-bubble"
                  src={talkBubble1}
                  alt="talk bubble"
                />
                <p className="overlay-text talk-bubble-text">{`Hi! I'm Pinky Winky! Nice to meet you!`}</p>
              </div>

              <div className="image-wrapper">
                <img
                  className="background-image"
                  src={boom}
                  alt="yellow explosion"
                />
                <img
                  className="overlay-image"
                  src={childOneImg}
                  alt="child one avatar"
                />
              </div>

              <p className="you-label">{`(YOU)`}</p>
            </div>

            <div className="next-steps-child-info">
              <div>
                <div className="image-wrapper">
                  <img
                    className="background-image talk-bubble"
                    src={talkBubble2}
                    alt="talk bubble"
                  />
                  <p className="overlay-text talk-bubble-text">{`Hi! I'm White Fox! Nice to meet you!`}</p>
                </div>

                <div className="image-wrapper">
                  <img
                    className="background-image"
                    src={boom}
                    alt="yellow explosion"
                  />
                  <img
                    className="overlay-image flip-image"
                    src={childTwoImg}
                    alt="child two avatar"
                  />
                </div>
              </div>
            </div>
          </div>

          <Button
            style={{ margin: '1rem' }}
            className="next-steps-btn"
            onClick={goToMatchup}
          >
            Let's play!
          </Button>
        </div>
      </div>
      {/* The Footer import must be updated once it gets moved to the global component "common" directory */}
      <ChildFooter />
    </>
  );
};

export default connect(
  state => ({
    child: state.child,
    tasks: state.tasks,
  }),
  {}
)(RenderNextSteps);
