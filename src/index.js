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

import { Security } from '@okta/okta-react';

import 'antd/dist/antd.less';
import './styles/less/index.less';

// Helpers
import { config } from './utils/oktaConfig';
import SecureRoute from './components/common/SecureRoute';

//Components
import {
  ChildLoadingComponent,
  ParentLoadingComponent,
} from './components/common';
import { AddChild } from './components/pages/AddChild';
import { ChildDashboard } from './components/pages/ChildDashboard';
import { DrawingSub } from './components/pages/DrawingSub';
import { Help } from './components/pages/Help';
import { LandingPage } from './components/pages/LandingPage';
import { MissionControl } from './components/pages/MissionControl';
import { Modal } from './components/pages/Modal';
import { NotFoundPage } from './components/pages/NotFound';
import { ParentDashboard } from './components/pages/ParentDashboard';
import { ParentDashFaq } from './components/pages/ParentDashFaq';
import { SupportPage } from './components/pages/SupportPage';
import { ParentSettings } from './components/pages/FamilySettings';
import { StoryPrompt } from './components/pages/StoryPrompt';
import { WritingSub } from './components/pages/WritingSub';
import LoginCallbackLoader from './components/common/LoginCallbackLoader';
import { TrophyRoom } from './components/pages/TrophyRoom';
import FaceoffReveal from './components/pages/Animations/FaceoffReveal';

// Gameification Components
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

// import RenderDayComponent from './components/pages/AdminDashboard/DevTools/RenderDayComponent.js';

ReactDOM.render(
  //
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
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
    <Security {...config} onAuthRequired={authHandler}>
      <DevModeHeader component={DevModeHeader} />
      <Switch>
        <Route path="/login" component={LandingPage} />
        <Route path="/implicit/callback" component={LoginCallbackLoader} />
        {/* any of the routes you need secured should be registered as SecureRoutes */}
        <SecureRoute
          path="/"
          exact
          component={() => <Modal LoadingComponent={ChildLoadingComponent} />}
        />
        <SecureRoute
          path="/child/story"
          component={() => (
            <StoryPrompt LoadingComponent={ChildLoadingComponent} />
          )}
        />

        <SecureRoute
          path="/child/dashboard"
          component={() => (
            <ChildDashboard LoadingComponent={ChildLoadingComponent} />
          )}
        />

        <SecureRoute path="/scoreboard" component={FaceoffReveal} />

        <SecureRoute
          path="/child/mission-control"
          component={() => (
            <MissionControl LoadingComponent={ChildLoadingComponent} />
          )}
        />
        <SecureRoute
          path="/child/drawing-sub"
          component={() => (
            <DrawingSub LoadingComponent={ChildLoadingComponent} />
          )}
        />
        <SecureRoute
          path="/child/writing-sub"
          component={() => (
            <WritingSub LoadingComponent={ChildLoadingComponent} />
          )}
        />
        <SecureRoute
          path="/parent/add-child"
          component={() => (
            <AddChild LoadingComponent={ParentLoadingComponent} />
          )}
        />
        <SecureRoute
          path="/parent/dashboard"
          exact
          component={() => (
            <ParentDashboard LoadingComponent={ParentLoadingComponent} />
          )}
        />

        <SecureRoute
          path="/parent/dashboard-faq"
          exact
          component={() => (
            <ParentDashFaq LoadingComponent={ParentLoadingComponent} />
          )}
          path="/parent/support"
          exact
          component={() => (
            <SupportPage LoadingComponent={ParentLoadingComponent} />
          )}
        />

        <SecureRoute
          path="/parent/help"
          exact
          component={() => <Help LoadingComponent={ParentLoadingComponent} />}
        />
        <SecureRoute
          path="/parent/settings"
          exact
          component={() => (
            <ParentSettings LoadingComponent={ParentLoadingComponent} />
          )}
        />
        <SecureRoute
          path="/child/join"
          exact
          component={() => (
            <JoinTheSquad LoadingComponent={ChildLoadingComponent} />
          )}
        />
        <SecureRoute
          path="/child/point-share"
          exact
          component={() => (
            <PointShare LoadingComponent={ChildLoadingComponent} />
          )}
        />
        <SecureRoute
          path="/child/match-up"
          exact
          component={() => <MatchUp LoadingComponent={ChildLoadingComponent} />}
        />
        <SecureRoute
          path="/child/match-up/squad-vote"
          exact
          component={() => (
            <VotingPage LoadingComponent={ChildLoadingComponent} />
          )}
        />
        <SecureRoute
          path="/child/trophyroom"
          exact
          component={() => (
            <TrophyRoom LoadingComponent={ChildLoadingComponent} />
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
    </Security>
  );
}
