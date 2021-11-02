//** Import Modules */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

//** Import Components */
import { Header } from '../../common';
import { NotFoundPage } from '../NotFound';
import Footer from './Footer';
import GamePlayMission from './GamePlayMission';
import { TrophyRoom } from '../TrophyRoom/index';
import GameModal from './GameModal';
import Explosion from '../../../assets/images/gamemodeimg/explosion.png';
import { Gamemode } from '../Gamemode';

function GamePlayMain(props) {
  // Specify a base URL
  const baseURL = '/gameplay';

  // State to enable/disable the modal
  const [enableModal, setEnableModal] = useState(false);

  // Data that the modal will display
  const [modalData, setModalData] = useState({});

  // Function to enable the modal
  const enableModalWindow = data => {
    setEnableModal(true);
    setModalData(data);
  };

  // Function to disable the modal
  const disableModalWindow = () => {
    setEnableModal(false);
  };

  return (
    <div id="gameplay">
      <Header />

      <Switch>
        <Route exact path={baseURL}>
          <GamemodeBtns
            baseURL={baseURL}
            enableModalWindow={enableModalWindow}
          />
        </Route>
        <Route path={`${baseURL}/gamemode`}>
          <Gamemode baseURL={baseURL} />
        </Route>

        <Route path={`${baseURL}/mission`}>
          <GamePlayMission
            baseURL={baseURL}
            enableModalWindow={enableModalWindow}
            disableModalWindow={disableModalWindow}
          />
        </Route>
        <Route path={`${baseURL}/`}>
          <TrophyRoom
            baseURL={baseURL}
            enableModalWindow={enableModalWindow}
            disableModalWindow={disableModalWindow}
          />
        </Route>

        <Route component={NotFoundPage} />
      </Switch>

      <Footer />

      {enableModal && (
        <GameModal
          modalData={modalData}
          disableModalWindow={disableModalWindow}
        />
      )}
    </div>
  );
}

//** Component for the buttons */
const GamemodeBtns = props => {
  const history = useHistory();

  const acceptMission = e => {
    e.preventDefault();
    history.push(`${props.baseURL}/mission/read`);
  };

  const trophyRoom = e => {
    e.preventDefault();
    history.push(`${props.baseURL}/trophy-room`);
  };

  // Enable initial modal
  useEffect(() => {
    const data = {
      title: 'Welcome to Scribble Stadium!',
      description: ' Accept the mission to start your adventure!',
      buttonTxt: "Let's Go!",
    };

    props.enableModalWindow(data);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="main-btns">
      <div className="inner-container">
        <button className="mission-btn" onClick={acceptMission}>
          <img className="mission-explosion" src={Explosion} alt="explosion" />
          <p className="mission-btn-txt">
            {' '}
            Accept
            <br /> The Mission
          </p>
        </button>
        <button onClick={trophyRoom}>Trophy Room</button>
      </div>
    </div>
  );
};
export default connect(null, null)(GamePlayMain);
