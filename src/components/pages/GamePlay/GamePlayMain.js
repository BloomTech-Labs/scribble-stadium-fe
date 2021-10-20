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
import GameModal from './GameModal';

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

        <Route path={`${baseURL}/mission`}>
          <GamePlayMission
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

  // Enable initial modal
  useEffect(() => {
    const data = {
      title: 'Welcome to StorySquad!',
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
          Accept The Mission
        </button>

        <button>Trophy Room</button>
      </div>
    </div>
  );
};

export default connect(null, null)(GamePlayMain);
