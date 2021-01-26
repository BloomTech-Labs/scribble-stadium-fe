import React, { useState } from 'react';
import { Header } from '../../common';
import Leaderboard from './Leaderboard';

import { connect } from 'react-redux';

import { Divider } from 'antd';
import { Modal } from 'antd';

const RenderTrophyRoom = props => {
  const [isModal1Visible, setIsModal1Visible] = useState(false);
  const [isModal2Visible, setIsModal2Visible] = useState(false);
  const [inventoryState, setInventoryState] = useState('');
  const [achievementState, setAchievementState] = useState('');

  const showAchievementsModal = () => {
    setIsModal1Visible(true);
    setAchievementState('child.achievements');
  };

  const showInventoryModel = () => {
    setIsModal2Visible(true);
    setInventoryState('child.inventory');
  };

  const handle1Ok = () => {
    setIsModal1Visible(false);
  };

  const handle1Cancel = () => {
    setIsModal1Visible(false);
  };

  const handle2Ok = () => {
    setIsModal2Visible(false);
  };

  const handle2Cancel = () => {
    setIsModal2Visible(false);
  };

  return (
    <>
      <Header displayMenu={true} title="Trophy Room" />
      <h1>Leader Board</h1>
      <Leaderboard />
      <Divider />
      <h2 className="h2" onClick={showAchievementsModal}>
        Achievements
      </h2>
      <Modal
        title="Achievements"
        visible={isModal1Visible}
        onOk={handle1Ok}
        onCancel={handle1Cancel}
        width={900}
      >
        <div style={{ overflow: 'scroll' }}>
          <h3>Completed (Way to go!):</h3>
          <p>Completed first Mission!</p>
          <p>Won a game!</p>
          <p>Got most points for drawing in a mission!</p>
          <p>Got most points for writing in a mission!</p>
          <p>Completed 3 missions in a row!</p>
          <h3>Incomplete (Keep trying!):</h3>
          <p>Completed 5 missions in a row!</p>
          <p>Completed 10 Missions in a row!</p>
          <p>Most Colorful Drawing</p>
          {/* Map over achievement state here */}
        </div>
      </Modal>
      <Divider />
      <h2 className="h2" onClick={showInventoryModel}>
        Inventory
      </h2>
      <Modal
        title="Inventory List"
        visible={isModal2Visible}
        onOk={handle2Ok}
        onCancel={handle2Cancel}
        style={{ margin: '0 auto' }}
      >
        <h3>Skins</h3>
        <h3>Stickers</h3>
        <h3>Collectibles</h3>
        {/* Map over inventory state here */}
      </Modal>
    </>
  );
};

export default connect(
  state => ({
    child: state.child,
    tasks: state.tasks,
  }),
  {}
)(RenderTrophyRoom);
