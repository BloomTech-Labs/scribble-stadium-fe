import React, { useState } from 'react';
import { Header } from '../../common';
import Leaderboard from './Leaderboard';

const RenderTrophyRoom = props => {
  //   const { push } = useHistory();
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <>
      <Header displayMenu={true} />
      <Leaderboard />
      <h1>Test</h1>
    </>
  );
};

export default RenderTrophyRoom;
