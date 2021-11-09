import React from 'react';
import { Header } from '../../common';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import explosion from '../../../assets/images/gamemodeimg/explosion.png';
import boyImg from '../../../assets/images/gamemodeimg/LightingKid.png';
const RenderWinnerPage = props => {
  const { push } = useHistory();

  const goToChildDashboard = () => {
    push('/child/dashboard');
  };

  return (
    <>
      <Header displayMenu={true} />
      {/* REMOVE ONCE DESIGN WORK BEGINS - START */}
      <div className={'winner-container'}>
        <div className="wbox">
          <img src={explosion} alt="boom" className="explosion-img" />
          <div className="winner-text">
            Winner!
            <div className="winner-avatar">
              <img src={boyImg} alt="boyImg" className="winner-boy-img" />
            </div>
            <div className="winner-name">THUNDERBOLT</div>
          </div>
        </div>
      </div>
      {/* REMOVE ONCE DESIGN WORK BEGINS - END */}
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
