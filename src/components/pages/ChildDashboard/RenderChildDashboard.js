import React from 'react';
import { Header } from '../../common';

import accept_the_mission from '../../../assets/images/child_dashboard_images/accept_the_mission.svg';
import adventure_passport from '../../../assets/images/child_dashboard_images/adventure_passport.svg';
import change_your_avatar from '../../../assets/images/child_dashboard_images/change_your_avatar.svg';
import trophy_room from '../../../assets/images/child_dashboard_images/trophy_room.svg';

const RenderChildDashboard = props => {
  return (
    <>
      <Header />
      <h1>Hello Child!!!</h1>
      <img src={accept_the_mission} alt="Accept The Mission!" />
      <img src={adventure_passport} alt="Accept The Mission!" />
      <img src={change_your_avatar} alt="Accept The Mission!" />
      <img src={trophy_room} alt="Accept The Mission!" />
    </>
  );
};

export default RenderChildDashboard;
