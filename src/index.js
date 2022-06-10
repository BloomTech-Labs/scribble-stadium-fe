// istanbul ignore file
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './state';

// The following code was commented out to prevent warnings during compilation.
import {
  BrowserRouter as Router,
  Route,
  // useHistory,
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
import { WinnerPage } from './components/pages/WinnerPage';
import { PlayAgain } from './components/pages/PlayAgain';

import GalleryContainer from './components/pages/Gallery/GalleryContainer';
import { AudioBook } from './components/pages/AudioBook';
import Admin from './components/pages/Admin/Admin';
import Moderator from './components/pages/Admin/Moderator';
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

  // const history = useHistory();

  // const authHandler = () => {
  //   // We pass this function to our <Security /> component that wraps our routes.
  //   // Checks if userToken is available and pushes back to login if not
  //   history.push('/login');
  //   console.log('AuthHandler', authHandler);
  // };

  return (
    <>
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

        {/* Incomplete and non functional. OK TO DELETE - REPLACED with /gameplay/mission/read UPDATED 11-16-21 */}
        <ProtectedRoute
          path="/child/story"
          component={() => (
            <StoryPrompt LoadingComponent={ChildLoadingComponent} />
          )}
        />

        <ProtectedRoute
          path="/dashboard"
          component={() => (
            <ChildDashboard LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* TO BE MAPPED into flow  PAGE NEEDED SUBMISSION GALLERY HEADER RENDERED  UPDATED 11-16-21 */}
        <ProtectedRoute
          exact
          path="/gallery"
          component={() => (
            <GalleryContainer LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* CONNECTED TO ABOVE /gallery path UPDATED 11-16-21 */}
        <ProtectedRoute
          exact
          path="/gallery/:id"
          component={() => (
            <GalleryContainer LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* CONNECTED TO ABOVE /gallery path UPDATED 11-16-21*/}
        <ProtectedRoute
          exact
          path="/gallery/child/:id"
          component={() => (
            <GalleryContainer LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* BROKEN and SHOULD BE REDUNDANT. EXAMINE AGAINST CURRENT PATH. SHOULD BE OK TO DELETE UPDATED 11-16-21 */}
        <ProtectedRoute path="/scoreboard" component={FaceoffReveal} />

        {/* REDUNDANT replaced with /gameplay/mission/read, write, and draw pages OK TO DELETE  UPDATED 11-16-21  */}
        <ProtectedRoute
          path="/child/mission-control"
          component={() => (
            <MissionControl LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* INCOMPLETE and OPERATIONAL but NO STYLE / replaced with /gameplay/mission/draw OK to DELETE UPDATED 11-16-21  */}
        <ProtectedRoute
          path="/child/drawing-sub"
          component={() => (
            <DrawingSub LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* REDUNDANT. OK to delete UPDATED 11-16-21 */}
        <ProtectedRoute
          path="/child/writing-sub"
          component={() => (
            <WritingSub LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* REDUNDANT. OK to delete UPDATED 11-16-21 */}
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

        {/* Obsolete page OK to remove UPDATED 11-16-21 */}
        <ProtectedRoute
          exact
          path="/parent/support"
          component={() => (
            <SupportPage LoadingComponent={ParentLoadingComponent} />
          )}
        />
        {/* WORKING to be updated with real faq's and answers UPDATED 11-16-21 */}
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
        {/* Currently REDUNDANT (/parent/contact-us is current) and not connected to application. Should be ok to remove unless future plans for a help page change UPDATED 11-16-21 */}
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

        <ProtectedRoute
          exact
          path="/child/next-steps"
          component={() => (
            <NextSteps LoadingComponent={ChildLoadingComponent} />
          )}
        />

        <ProtectedRoute
          exact
          path="/child/point-share"
          component={() => (
            <PointShare LoadingComponent={ChildLoadingComponent} />
          )}
        />

        <ProtectedRoute
          exact
          path="/child/match-up"
          component={() => <MatchUp LoadingComponent={ChildLoadingComponent} />}
        />
        {/* REDUNDANT 404 PATH OK to delete  UPDATED 11-16-21 */}
        <ProtectedRoute
          exact
          path="/child/match-up/squad-vote"
          component={() => (
            <VotingPage LoadingComponent={ChildLoadingComponent} />
          )}
        />

        <ProtectedRoute
          exact
          path="/child/play-again"
          component={() => (
            <PlayAgain LoadingComponent={ChildLoadingComponent} />
          )}
        />

        <ProtectedRoute
          exact
          path="/child/scores"
          component={() => <Scores LoadingComponent={ChildLoadingComponent} />}
        />

        <ProtectedRoute
          exact
          path="/child/winner"
          component={() => (
            <WinnerPage LoadingComponent={ChildLoadingComponent} />
          )}
        />
        <ProtectedRoute
          exact
          path="/leaderboard"
          component={() => (
            <Leaderboard LoadingComponent={ChildLoadingComponent} />
          )}
        />

        <ProtectedRoute
          path="/change-avatar"
          component={() => (
            <ChangeAvatar LoadingComponent={ChildLoadingComponent} />
          )}
        />
        {/* FOUNDATION CODE exists. NEEDS DATA/ STYLE New path and connection point TBD / JAKE FLOW QUESTION NOT for DELETE UPDATED 11-16-21*/}
        <ProtectedRoute
          exact
          path="/child/audiobook"
          component={() => (
            <AudioBook LoadingComponent={ChildLoadingComponent} />
          )}
        />
        <ProtectedRoute
          exact
          path="/child/play-again"
          component={() => (
            <PlayAgain LoadingComponent={ChildLoadingComponent} />
          )}
        />
        <Route path="/admin" component={Admin} />
        <Route path="/moderator" component={Moderator} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
