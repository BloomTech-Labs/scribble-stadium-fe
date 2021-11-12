import React from 'react';
import { Header } from '../../common';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import explosion from '../../../assets/images/gamemodeimg/explosion.png';
import boyImg from '../../../assets/images/gamemodeimg/LightingKid.png';
import PlayAgainButtonAnimation from './PlayAgainButtonAnimation';

const RenderWinnerPage = props => {
  const { push } = useHistory();

  const goToChildDashboard = () => {
    push('/child/dashboard');
  };

  return (
    <>
      <Header displayMenu={true} />

      <div className={'winner-container'}>
        <div className="winner-box">
          <h1>Winner!</h1>
          <img src={explosion} alt="boom" className="explosion-img" />
          <img src={boyImg} alt="boyImg" className="winner-boy-img" />
          <div className="playbutton">
            <PlayAgainButtonAnimation />
          </div>
        </div>
        <p> THUNDERBOLT</p>
      </div>
    </>
  );
};

export default connect(
  state => ({
    child: state.child,
    tasks: state.tasks,
  }),
  {}
)(RenderWinnerPage);
