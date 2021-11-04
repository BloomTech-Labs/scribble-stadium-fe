import React, { useEffect } from 'react';
import { Header } from '../../common';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { gsap } from 'gsap';
import Footer from '../GamePlay/Footer';

import flyingGirlImg from '../../../assets/images/hero_images/hero9.png';
import boyWithYellowHelmetImg from '../../../assets/images/hero_images/hero1.png';

const RenderPlayAgain = () => {
  const { push } = useHistory();

  const goToChildDashboard = () => {
    push('/child/dashboard');
  };

  // Add animation - hero image of girl flies in from left
  useEffect(() => {
    gsap.from('.hero-image-container', {
      opacity: 0,
      y: 200,
      duration: 1,
    });

    gsap.from('.flying-girl-img', {
      opacity: 0,
      x: -200,
      duration: 1,
      delay: 1,
    });
  }, []);

  return (
    <>
      <Header displayMenu={true} />
      <div className="play-again">
        <div className="rectangle-126" style={{ margin: '3rem' }}>
          <h1>Play Again?</h1>
          <div className="hero-image-container">
            <img
              src={flyingGirlImg}
              alt="A flying girl in hero costume"
              className="flying-girl-img"
            />
          </div>
        </div>
        <div className="play-again-content">
          <div className="play-again-inner-container">
            <img
              src={boyWithYellowHelmetImg}
              alt="An excited boy in hero costume"
              className="boy-with-yellow-helmet-img"
            />

            <div className="play-again-text">
              <p>That was fun!</p>
              <p>If you want to play again, click the button below!</p>
              <Button
                style={{ margin: '1rem' }}
                className="play-again-button"
                onClick={goToChildDashboard}
              >
                Play Again
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* The Footer import must be updated once it gets moved to the global component "common" directory */}
      <Footer />
    </>
  );
};

export default connect(
  state => ({
    child: state.child,
    tasks: state.tasks,
  }),
  {}
)(RenderPlayAgain);
