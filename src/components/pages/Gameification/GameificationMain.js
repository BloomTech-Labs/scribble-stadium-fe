//** Import Modules */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

//** Import Components */
import { Header } from '../../common';
import { NotFoundPage } from '../NotFound';
import ChildFooter from '../../common/ChildFooter';
import GameificationMission from './GameificationMission';
import GameModal from './GameModal';
import PlayerMatchup from './SinglePlayerBattle/PlayerMatchup';
import SubmissionPage from './SubmissionsGallery/SubmissionPage';

//** Import Helpers */
import { getApiUrl } from '../../../api/index';

export default function GameificationMain(props) {
  // Specify a base URL
  const baseURL = '/gameification';

  // State to enable/disable the modal
  const [enableModal, setEnableModal] = useState(false);

  // Data that the modal will display
  const [modalData, setModalData] = useState({});

  // Data from the current child playing
  const [child, setChild] = useState({});

  //* Function to enable the modal
  const enableModalWindow = data => {
    setEnableModal(true);
    setModalData(data);
  };

  //* Function to disable the modal
  const disableModalWindow = () => {
    setEnableModal(false);
  };

  //* Get the current child info
  useEffect(() => {
    const tempChildID = 1;

    const APIURL = getApiUrl();

    axios
      .get(`${APIURL}children/${tempChildID}`)
      .then(res => {
        setChild(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div id="gameification">
      <Header />

      <Switch>
        <Route path={baseURL} exact>
          <GamemodeBtns
            baseURL={baseURL}
            enableModalWindow={enableModalWindow}
          />
        </Route>

        <Route path={`${baseURL}/mission`}>
          <GameificationMission
            baseURL={baseURL}
            enableModalWindow={enableModalWindow}
            disableModalWindow={disableModalWindow}
          />
        </Route>

        <Route path={`${baseURL}/single-matchup`}>
          <PlayerMatchup baseURL={baseURL} />
        </Route>

        <Route path={`${baseURL}/submissions`}>
          <SubmissionPage />
        </Route>

        <Route component={NotFoundPage} />
      </Switch>

      <ChildFooter />

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

  const accessSubmissions = e => {
    e.preventDefault();

    history.push(`${props.baseURL}/submissions`);
  };

  // Enable initial modal
  useEffect(() => {
    const data = {
      title: 'Welcome to StorySquad!',
      description: ' Accept the mission to start your adventure!',
      buttonTxt: "Let's Go!",
    };

    props.enableModalWindow(data);
  }, [props]);

  return (
    <div className="main-btns">
      <div className="inner-container">
        <button className="mission-btn" onClick={acceptMission}>
          Accept The Mission
        </button>

        <button onClick={accessSubmissions}>Submission Gallery</button>
      </div>
    </div>
  );
};
