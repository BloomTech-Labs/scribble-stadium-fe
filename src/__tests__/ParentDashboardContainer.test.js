import * as React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import LoadingComponent from '../components/common/ParentLoadingComponent';
import ParentDashboard from '../components/pages/ParentDashboard/ParentDashboard';
import ParentDashboardContainer from '../components/pages/ParentDashboard/ParentDashboard';
jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {
        isAuthenticated: true,
      },
      authService: {},
    };
  },
}));

configure({ adapter: new Adapter() });

describe('<ParentDashboardContainer />', () => {
  configure({ adapter: new Adapter() });
  const mockStore = configureStore([]);
  const store = mockStore();

  describe('Render <ParentDashboardContainer />', () => {
    let shallowWrapper = ShallowWrapper;
    beforeEach(() => {
      shallowWrapper = shallow(
        <Router>
          <Provider store={store}>
            <ParentDashboardContainer />
          </Provider>
        </Router>
      );
    });

    it('Find ParentDashboard', () => {
      expect(shallowWrapper.find(ParentDashboard).length).toBe(1);
    });
    it('Find Loading Component', () => {
      expect(shallowWrapper.find(LoadingComponent));
    });
  });
});
