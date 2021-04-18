import React, { useState } from 'react';
import { Header } from '../../common';
import Leaderboard from './Leaderboard';

import { connect } from 'react-redux';

import { Divider, Button, Modal } from 'antd';
import { useHistory } from 'react-router-dom';

const RenderTrophyRoom = props => {
  const { push } = useHistory();
  const [isAchievementModalVisible, setIsAchievementModalVisible] = useState(
    false
  );
  const [isInventoryModalVisible, setIsInventoryModalVisible] = useState(false);
  const [inventoryState, setInventoryState] = useState('');
  const [achievementState, setAchievementState] = useState('');

  const dashboard = () => {
    push('/child/dashboard');
  };

  const showAchievementsModal = () => {
    setIsAchievementModalVisible(true);
    setAchievementState('child.achievements');
  };

  const showInventoryModel = () => {
    setIsInventoryModalVisible(true);
    setInventoryState('child.inventory');
  };

  const handleAchievmentOk = () => {
    setIsAchievementModalVisible(false);
  };

  const handleAchievementCancel = () => {
    setIsAchievementModalVisible(false);
  };

  const handleInventoryOk = () => {
    setIsInventoryModalVisible(false);
  };

  const handleInventoryCancel = () => {
    setIsInventoryModalVisible(false);
  };

  return (
    <>
      <Header displayMenu={true} title="Trophy Room" />
      <Button style={{ margin: '1rem' }} onClick={dashboard}>
        Back to Child Dashboard!
      </Button>
      <div className="trophy-container">
        <Leaderboard child={props.child} />
        <div className="custom-divider"></div>
        <div className="modal-container">
          <h2 className="h2" onClick={showAchievementsModal}>
            Achievements
          </h2>
          <Modal
            title="Achievements"
            visible={isAchievementModalVisible}
            onOk={handleAchievmentOk}
            onCancel={handleAchievementCancel}
            // width={900}
          >
            <div style={{ overflow: 'scroll' }}>
              <h3>Completed (Way to go!):</h3>
              {/* {achievementState.map(achievement => {
            if (achievement.completed === true) {
              return <p>{achievement}</p>;
            }
          })} */}
              <p>Completed first Mission!</p>
              <p>Won a game!</p>
              <p>Got most points for drawing in a mission!</p>
              <p>Got most points for writing in a mission!</p>
              <p>Completed 3 missions in a row!</p>
              <h3>Incomplete (Keep trying!):</h3>
              <p>Completed 5 missions in a row!</p>
              <p>Completed 10 Missions in a row!</p>
              <p>Most Colorful Drawing</p>
              {/* {achievementState.map(achievement => {
            if (achievement.completed === false) {
              return <p>{achievement}</p>;
            }
          })} */}
            </div>
          </Modal>
          <Divider />
          {/* Add this to Change Your Avatar once it is implemented */}
          <h2 className="h2" onClick={showInventoryModel}>
            Inventory
          </h2>
          <Modal
            title="Inventory List"
            visible={isInventoryModalVisible}
            onOk={handleInventoryOk}
            onCancel={handleInventoryCancel}
            style={{ margin: '0 auto' }}
          >
            <h3>Skins</h3>
            <h3>Stickers</h3>
            <h3>Collectibles</h3>
            {/* Map over inventory state here */}
          </Modal>
        </div>
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
)(RenderTrophyRoom);
