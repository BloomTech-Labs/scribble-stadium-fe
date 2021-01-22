import React, { useState } from 'react';
import { Header } from '../../common';
import Leaderboard from './Leaderboard';

import { connect } from 'react-redux';

import { Divider } from 'antd';
import { Modal } from 'antd';

const RenderTrophyRoom = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalState, setModalState] = useState('');
  const [inventoryState, setInventoryState] = useState('');
  // const [achievementState, setAchievementState] = useState('');

  const showAchievementsModal = () => {
    setIsModalVisible(true);
    setModalState('child.achievements');
  };

  const showInventoryModel = () => {
    setIsModalVisible(true);
    setInventoryState('child.inventory');
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Header displayMenu={true} title="Trophy Room" />
      <h2 className="h2">Leaderboard</h2>
      <Leaderboard />
      <Divider />
      <h2 className="h2" onClick={showAchievementsModal}>
        Achievements
      </h2>
      <Modal
        title="Achievements"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Achievement 1</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        {/* Map over achievement state here */}
      </Modal>
      <Divider />
      <h2 className="h2" onClick={showInventoryModel}>
        Inventory
      </h2>
      <Modal
        title="Inventory"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Achievement 1</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
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
