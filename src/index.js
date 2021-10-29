// istanbul ignore file
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './state';

import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';

import { Auth0Provider } from '@auth0/auth0-react';

import 'antd/dist/antd.less';
import './styles/less/index.less';

// Helpers
import ProtectedRoute from './components/common/SecureRouteAuth0';

//Components

import {
  ChildLoadingComponent,
  ParentLoadingComponent,
} from './components/common';
import { AddChild } from './components/pages/AddChild';
import { ChildDashboard } from './components/pages/ChildDashboard';
import { DrawingSub } from './components/pages/DrawingSub';
import { Gamemode } from './components/pages/Gamemode';

import { Help } from './components/pages/Help';
import { LandingPage } from './components/pages/LandingPage';
import { MissionControl } from './components/pages/MissionControl';
import { NotFoundPage } from './components/pages/NotFound';

import { ParentFaq } from './components/pages/ParentFaq';
import { ParentContact } from './components/pages/ParentContact';
import { NewParentDashboard } from './components/pages/NewParentDashboard';
import { SupportPage } from './components/pages/SupportPage';
import { ParentSettings } from './components/pages/FamilySettings';
import { EditPlayers } from './components/pages/EditPlayers';
import { StoryPrompt } from './components/pages/StoryPrompt';
import { WritingSub } from './components/pages/WritingSub';
import { Leaderboard } from './components/pages/Leaderboard';
import { ChangeAvatar } from './components/pages/ChangeAvatar';
import FaceoffReveal from './components/pages/Animations/FaceoffReveal';

// GamePlay Components
import { GamePlayMain } from './components/pages/GamePlay/index';
import { NextSteps } from './components/pages/NextSteps';
import { MatchUp } from './components/pages/MatchUp';
import { Scores } from './components/pages/Scores';
import { PointShare } from './components/pages/PointShare';
import { VotingPage } from './components/pages/VotingPage';
import { PlayAgain } from './components/pages/PlayAgain';

// Note: for demo/developer purposes ONLY
import ModerationTest from './components/pages/ModerationTest/ModerationTest';
import AdminDashboard from './components/pages/AdminDashboard';
import SatMon from './components/pages/AdminDashboard/DevTools/DayComponents/01_Sat-Mon';
import Tues from './components/pages/AdminDashboard/DevTools/DayComponents/04_Tues';
import Wed from './components/pages/AdminDashboard/DevTools/DayComponents/05_Wed';
import Thurs from './components/pages/AdminDashboard/DevTools/DayComponents/06_Thurs';
import Fri from './components/pages/AdminDashboard/DevTools/DayComponents/07_Fri';
import DevModeHeader from './components/pages/AdminDashboard/devModeHeader';
import GalleryContainer from './components/pages/Gallery/GalleryContainer';
import { AudioBook } from './components/pages/AudioBook';

// import RenderDayComponent from './components/pages/AdminDashboard/DevTools/RenderDayComponent.js';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  //
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
          >
            <App />
          </Auth0Provider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  const history = useHistory();

  const authHandler = () => {
    // We pass this function to our <Security /> component that wraps our routes.
    // Checks if userToken is available and pushes back to login if not
    history.push('/login');
    console.log('AuthHandler', authHandler);
  };

  return (
    <>
      <DevModeHeader component={DevModeHeader} />
      <Switch>
        {/* NEW path => /gameplay/gamemode NOT for DELETE  */}
        <Route exact path="/gamemode" component={Gamemode} />
        {/* HEAD Route for all gameplay path components DO NOT REMOVE  */}
        <Route path="/gameplay" component={GamePlayMain} />
        <Route path="/login" component={LandingPage} />
        {/* any of the routes you need secured should be registered as ProtectedRoutes */}
        <ProtectedRoute
          exact
          path="/"
          component={() => (
            <NewParentDashboard LoadingComponent={ParentLoadingComponent} />
          )}
        />

        {/* Incomplete and non functional. OK TO DELETE - REPLACED with /gameplay/mission/read */}
        <ProtectedRoute
          path="/child/story"
          component={() => (
            <StoryPrompt LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* TO BE RE-REROUTED to /gameplay/dashboard and connected along the gameplay path  */}
        <ProtectedRoute
          path="/dashboard"
          component={() => (
            <ChildDashboard LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* TO BE MAPPED into flow  PAGE NEEDED SUBMISSION GALLERY HEADER RENDERED  */}
        <ProtectedRoute
          exact
          path="/gallery"
          component={() => (
            <GalleryContainer LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* CONNECTED TO ABOVE /gallery path  */}
        <ProtectedRoute
          exact
          path="/gallery/:id"
          component={() => (
            <GalleryContainer LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* CONNECTED TO ABOVE /gallery path*/}
        <ProtectedRoute
          exact
          path="/gallery/child/:id"
          component={() => (
            <GalleryContainer LoadingComponent={ChildLoadingComponent} />
          )}
        />

        <ProtectedRoute path="/scoreboard" component={FaceoffReveal} />
        {/* INCOMPLETE and NON-OPERATIONAL replaced with /gameplay/mission/read, write, and draw pages OK TO DELETE */}
        <ProtectedRoute
          path="/child/mission-control"
          component={() => (
            <MissionControl LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* INCOMPLETE and OPERATIONAL but NO STYLE / replaced with /gameplay/mission/draw OK to DELETE   */}
        <ProtectedRoute
          path="/child/drawing-sub"
          component={() => (
            <DrawingSub LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* INCOMPLETE and OPERATIONAL but NO STYLE / replaced with /gameplay/mission/write OK to DELETE   */}
        <ProtectedRoute
          path="/child/writing-sub"
          component={() => (
            <WritingSub LoadingComponent={ChildLoadingComponent} />
          )}
        />
        <ProtectedRoute
          path="/parent/add-child"
          component={() => (
            <AddChild LoadingComponent={ParentLoadingComponent} />
          )}
        />
        <ProtectedRoute
          path="/parent/edit-players"
          component={() => (
            <EditPlayers LoadingComponent={ParentLoadingComponent} />
          )}
        />
        <ProtectedRoute
          exact
          path="/parent/dashboard"
          component={() => (
            <NewParentDashboard LoadingComponent={ParentLoadingComponent} />
          )}
        />
        <ProtectedRoute
          exact
          path="/parent/support"
          component={() => (
            <SupportPage LoadingComponent={ParentLoadingComponent} />
          )}
        />

        <ProtectedRoute
          exact
          path="/parent/faq"
          component={() => (
            <ParentFaq LoadingComponent={ParentLoadingComponent} />
          )}
        />
        <ProtectedRoute
          exact
          path="/parent/contact"
          component={() => (
            <ParentContact LoadingComponent={ParentLoadingComponent} />
          )}
        />

        <ProtectedRoute
          exact
          path="/parent/help"
          component={() => <Help LoadingComponent={ParentLoadingComponent} />}
        />
        <ProtectedRoute
          exact
          path="/parent/settings"
          component={() => (
            <ParentSettings LoadingComponent={ParentLoadingComponent} />
          )}
        />
        {/* UNDER CONSTRUCTION HOLDER / New path to point to /gameplay/mission/next-steps NOT for DELETE */}
        <ProtectedRoute
          exact
          path="/next-steps"
          component={() => (
            <NextSteps LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* INCOMPLETE AND BROKEN Can be fixed and repurposed under /gameplay  path when needed STATUS CONFIRMATION NEEDED */}
        <ProtectedRoute
          exact
          path="/child/point-share"
          component={() => (
            <PointShare LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* ROUTE EXISTS / NO PAGE EXISTS OK to DELETE / Will need to be replaced under /gameplay route */}
        <ProtectedRoute
          exact
          path="/child/match-up"
          component={() => <MatchUp LoadingComponent={ChildLoadingComponent} />}
        />
        {/* ROUTE EXISTS OK to DELETE / returns user to /child/dashboard / Will need to be replaced under /gameplay route */}
        <ProtectedRoute
          exact
          path="/child/match-up/squad-vote"
          component={() => (
            <VotingPage LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* UNDER CONSTRUCTION HOLDER / New path to point to /gameplay/mission/play-again NOT for DELETE */}
        <ProtectedRoute
          exact
          path="/play-again"
          component={() => (
            <PlayAgain LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* UNDER CONSTRUCTION HOLDER / New path to point to /gameplay/mission/play-again NOT for DELETE */}
        <ProtectedRoute
          exact
          path="/scores"
          component={() => <Scores LoadingComponent={ChildLoadingComponent} />}
        />
        {/* FOUNDATION CODE exists. NEEDS DATA New path to point to /gameplay/dashboard/leaderboard NOT for DELETE */}
        <ProtectedRoute
          exact
          path="/child/leaderboard"
          component={() => (
            <Leaderboard LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* INCOMPLETE page exists. NEEDS DATA/ STYLE New path to point to /gameplay/dashboard/change-avatar NOT for DELETE */}
        <ProtectedRoute
          path="/child/change-avatar"
          component={() => (
            <ChangeAvatar LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* FOUNDATION CODE exists. NEEDS DATA/ STYLE New path and connection point TBD / JAKE FLOW QUESTION NOT for DELETE */}
        <ProtectedRoute
          exact
          path="/child/audiobook"
          component={() => (
            <AudioBook LoadingComponent={ChildLoadingComponent} />
          )}
        />
        <Route exact path="/moderation" component={ModerationTest} />
        <Route exact path="/admin" component={AdminDashboard} />
        <Route exact path="/dev/day/1-3" component={SatMon} />
        <Route exact path="/dev/day/4" component={Tues} />
        <Route exact path="/dev/day/5" component={Wed} />
        <Route exact path="/dev/day/6" component={Thurs} />
        <Route exact path="/dev/day/7" component={Fri} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
