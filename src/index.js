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
import { Gamemode, GamemodeButton } from './components/pages/Gamemode';

import { Help } from './components/pages/Help';
import { LandingPage } from './components/pages/LandingPage';
import { MissionControl } from './components/pages/MissionControl';
import { Modal } from './components/pages/Modal';
import { NotFoundPage } from './components/pages/NotFound';

import { ParentFaq } from './components/pages/ParentFaq';
import { ParentContact } from './components/pages/ParentContact';
import { NewParentDashboard } from './components/pages/NewParentDashboard';
import { ParentDashFaq } from './components/pages/ParentDashFaq';
import { SupportPage } from './components/pages/SupportPage';
import { ParentSettings } from './components/pages/FamilySettings';
import { EditPlayers } from './components/pages/EditPlayers';
import { StoryPrompt } from './components/pages/StoryPrompt';
import { WritingSub } from './components/pages/WritingSub';
import LoginCallbackLoader from './components/common/LoginCallbackLoader';
import { Leaderboard } from './components/pages/Leaderboard';
import FaceoffReveal from './components/pages/Animations/FaceoffReveal';

// Gameification Components
import { GameificationMain } from './components/pages/Gameification';
import { JoinTheSquad } from './components/pages/JoinTheSquad';
import { PointShare } from './components/pages/PointShare';
import { MatchUp } from './components/pages/MatchUp';
import { VotingPage } from './components/pages/VotingPage';

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
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  return (
    <>
      <DevModeHeader component={DevModeHeader} />
      <Switch>
        <Route exact path="/gamemode" component={Gamemode} />
        <Route path="/gameification" component={GameificationMain} />
        <Route path="/gamemode/single" component={GamemodeButton} />
        <Route path="/login" component={LandingPage} />
        <Route path="/implicit/callback" component={LoginCallbackLoader} />
        {/* any of the routes you need secured should be registered as ProtectedRoutes */}
        <ProtectedRoute
          exact
          path="/"
          component={() => (
            <NewParentDashboard LoadingComponent={ParentLoadingComponent} />
          )}
        />
        <ProtectedRoute
          path="/child/story"
          component={() => (
            <StoryPrompt LoadingComponent={ChildLoadingComponent} />
          )}
        />

        <ProtectedRoute
          path="/child/dashboard"
          component={() => (
            <ChildDashboard LoadingComponent={ChildLoadingComponent} />
          )}
        />

        <ProtectedRoute
          exact
          path="/gallery"
          component={() => (
            <GalleryContainer LoadingComponent={ChildLoadingComponent} />
          )}
        />

        <ProtectedRoute
          exact
          path="/gallery/:id"
          component={() => (
            <GalleryContainer LoadingComponent={ChildLoadingComponent} />
          )}
        />

        <ProtectedRoute
          exact
          path="/gallery/child/:id"
          component={() => (
            <GalleryContainer LoadingComponent={ChildLoadingComponent} />
          )}
        />

        <ProtectedRoute path="/scoreboard" component={FaceoffReveal} />

        <ProtectedRoute
          path="/child/mission-control"
          component={() => (
            <MissionControl LoadingComponent={ChildLoadingComponent} />
          )}
        />
        <ProtectedRoute
          path="/child/drawing-sub"
          component={() => (
            <DrawingSub LoadingComponent={ChildLoadingComponent} />
          )}
        />
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
          path="/parent/dashboard-faq"
          component={() => (
            <ParentDashFaq LoadingComponent={ParentLoadingComponent} />
          )}
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
        <ProtectedRoute
          exact
          path="/child/join"
          component={() => (
            <JoinTheSquad LoadingComponent={ChildLoadingComponent} />
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
        <ProtectedRoute
          exact
          path="/child/match-up/squad-vote"
          component={() => (
            <VotingPage LoadingComponent={ChildLoadingComponent} />
          )}
        />
        <ProtectedRoute
          exact
          path="/child/leaderboard"
          component={() => (
            <Leaderboard LoadingComponent={ChildLoadingComponent} />
          )}
        />
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
