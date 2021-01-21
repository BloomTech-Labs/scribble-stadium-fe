import React, { useState } from 'react';
import { Header } from '../../common';
import Leaderboard from './Leaderboard';

import { Divider } from 'antd';

const RenderTrophyRoom = props => {
  return (
    <>
      <Header displayMenu={true} title="Trophy Room" />
      <h1>Leader Board</h1>
      <Leaderboard />
      <Divider />
      <h2 className="h2">Achievements</h2>
      <Divider />
      <h2 className="h2">Inventory</h2>
    </>
  );
};

export default RenderTrophyRoom;
