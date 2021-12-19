//TEMPORARY - THIS COMPONENT IS NOW RENDERING AND UNDER CONSTRUCTION
// As we are deciding direction on the component all commented out code sections that were are unsure from the original iteration will be labeled as TEMPORARY

import React from 'react';

// TEMPORARY
// import { Header } from '../../common';
// import Leaderboard from './Leaderboard';

import { connect } from 'react-redux';

//TEMPORARY - Removed modal and divider as unused while we are working on the trophy room
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

// TEMPORARY
// import { child } from '../../../state/actions';

const RenderLeaderboard = props => {
  const { push } = useHistory();

  // TEMPORARY
  // const [isAchievementModalVisible, setIsAchievementModalVisible] = useState(
  //   false
  // );
  // const [isInventoryModalVisible, setIsInventoryModalVisible] = useState(false);
  // const [inventoryState, setInventoryState] = useState('');
  // const [achievementState, setAchievementState] = useState('');
  // const [streakState, setStreakState] = useState('');
  // const [isStreakModalVisible, setIsStreakModalVisible] = useState(false);

  const dashboard = () => {
    push('/dashboard');
  };

  // TEMPORARY
  // const showAchievementsModal = () => {
  //   setIsAchievementModalVisible(true);
  //   setAchievementState('child.achievements');
  // };

  // const showInventoryModel = () => {
  //   setIsInventoryModalVisible(true);
  //   setInventoryState('child.inventory');
  // };

  // const handleAchievmentOk = () => {
  //   setIsAchievementModalVisible(false);
  // };

  // const handleAchievementCancel = () => {
  //   setIsAchievementModalVisible(false);
  // };

  // const handleInventoryOk = () => {
  //   setIsInventoryModalVisible(false);
  // };

  // const handleInventoryCancel = () => {
  //   setIsInventoryModalVisible(false);
  // };

  // const handleStreakOk = () => {
  //   setIsStreakModalVisible(false);
  // };

  // const handleStreakCancel = () => {
  //   setIsStreakModalVisible(false);
  // };

  // const showStreakModel = () => {
  //   setIsStreakModalVisible(true);
  //   setStreakState('child.streak');
  // };

  return (
    <>
      {/* TEMPORARY  BELOW SECTION IS THE UNDER CONSTRUCTION SECTION TO BE REMOVED WHEN FUNCTIONAL PAGE IS READY TO BE USED*/}
      <div className={'under-construction'}>
        <div className={'rectangle-126'}>
          <h1>Coming Soon</h1>
        </div>
        <div className={'under-construction-content'}>
          <h1>Under Construction!</h1>
          <h1>Trophy Room UI Coming Soon!</h1>
        </div>{' '}
        <Button className="back-btn" onClick={dashboard}>
          {' '}
          Back to Dashboard{' '}
        </Button>
      </div>
      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  TEMPORARY UNDER CONSTRUCTION SECTION ABOVE TO BE REMOVED*/}

      {/* TEMPORARY  */}
      {/* <h1>Coming Soon</h1>
       <Header displayMenu={true} title="Scribble Stadium" />
       <Button
          style={{ margin: '1rem' }}
          className="back-btn"
          onClick={dashboard}
        >
          {' '}
          Back to Child Dashboard
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
              <h3>Completed (Way to go!):</h3> */}

      {/* TEMPORARY  THIS SECTION WAS PREVIOUSLY COMMENTED OUT AWAITING DATA*/}
      {/* {achievementState.map(achievement => {
            if (achievement.completed === true) {
              return <p>{achievement}</p>;
            }
          })} */}

      {/* TEMPORARY */}
      {/* <p>Completed first Mission!</p>
              <p>Won a game!</p>
              <p>Got most points for drawing in a mission!</p>
              <p>Got most points for writing in a mission!</p>
              <p>Completed 3 missions in a row!</p>
              <h3>Incomplete (Keep trying!):</h3>
              <p>Completed 5 missions in a row!</p>
              <p>Completed 10 Missions in a row!</p>
              <p>Most Colorful Drawing</p> */}

      {/* TEMPORARY  THIS SECTION WAS PREVIOUSLY COMMENTED OUT AWAITING DATA*/}
      {/* {achievementState.map(achievement => {
            if (achievement.completed === false) {
              return <p>{achievement}</p>;
            }
          })} */}

      {/* TEMPORARY */}
      {/* </div> */}
      {/* </Modal>
          <Divider /> */}
      {/* Add this to Change Your Avatar once it is implemented */}
      {/* <h2 className="h2" onClick={showInventoryModel}>
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
            <h3>Collectibles</h3> */}
      {/* Map over inventory state here */}
      {/* </Modal>
          <Divider />
          <h2 className="h2" onClick={showStreakModel}>
            Current Streak
          </h2>
          <Modal
            title="Login Streak"
            visible={isStreakModalVisible}
            onOk={handleStreakOk}
            onCancel={handleStreakCancel}
            style={{ margin: '0 auto' }}
          >
            <h3>
              {`Your current login streak is ${child.Streaks} weeks! Keep up the great work!`}
            </h3> */}
      {/* get child.streak from the child db */}
      {/* <img src={require('./greatjob.gif')} alt="Great job!" />
          </Modal>
        </div>
      </div>
      <div className="tablet-mobile-button">
        <Button
          style={{ margin: '1rem' }}
          className="back-btn-small-screens"
          onClick={dashboard}
        >
          Back to Child Dashboard
        </Button>
      </div>  */}
    </>
  );
};

export default connect(
  state => ({
    child: state.child,
    tasks: state.tasks,
  }),
  {}
)(RenderLeaderboard);
