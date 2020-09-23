import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';

import 'antd/dist/antd.less';

// Helpers
import { config } from './utils/oktaConfig';

//Components
import { LoadingComponent } from './components/common';
import { AddChild } from './components/pages/AddChild';
import { ChildDashboard } from './components/pages/ChildDashboard';
import { Help } from './components/pages/Help';
import { LandingPage } from './components/pages/LandingPage';
import { MissionControl } from './components/pages/MissionControl';
import { Modal } from './components/pages/Modal';
import { NotFoundPage } from './components/pages/NotFound';
import { ParentDashboard } from './components/pages/ParentDashboard';
import { ParentSettings } from './components/pages/FamilySettings';
import { StoryPrompt } from './components/pages/StoryPrompt';

ReactDOM.render(
  //
  <Router>
    <React.StrictMode>
      <App />
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
      <Switch>
        <Route path="/login" component={LandingPage} />
        <Route path="/implicit/callback" component={LoginCallback} />
        {/* any of the routes you need secured should be registered as SecureRoutes */}
        <SecureRoute
          path="/"
          exact
          component={() => <Modal LoadingComponent={LoadingComponent} />}
        />
        <SecureRoute
          path="/child/story"
          component={() => <StoryPrompt LoadingComponent={LoadingComponent} />}
        />
        <SecureRoute
          path="/child/dashboard"
          component={() => (
            <ChildDashboard LoadingComponent={LoadingComponent} />
          )}
        />
        <SecureRoute
          path="/child/mission-control"
          component={() => (
            <MissionControl LoadingComponent={LoadingComponent} />
          )}
        />

        <SecureRoute
          path="/parent/add-child"
          component={() => <AddChild LoadingComponent={LoadingComponent} />}
        />
        <SecureRoute
          path="/parent/dashboard"
          exact
          component={() => (
            <ParentDashboard LoadingComponent={LoadingComponent} />
          )}
        />
        <SecureRoute
          path="/parent/help"
          exact
          component={() => <Help LoadingComponent={LoadingComponent} />}
        />
        <SecureRoute
          path="/parent/settings"
          exact
          component={() => (
            <ParentSettings LoadingComponent={LoadingComponent} />
          )}
        />

        <Route component={NotFoundPage} />
      </Switch>
    </Security>
  );
}
