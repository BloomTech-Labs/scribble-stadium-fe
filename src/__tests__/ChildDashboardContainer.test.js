import * as React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import LoadingComponent from '../components/common/ChildLoadingComponent';
import RenderChildDashboard from '../components/pages/ChildDashboard/RenderChildDashboard';
import ChildDashboardContainer from '../components/pages/ChildDashboard/ChildDashboardContainer';
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

describe('<ProfileModalContainer />', () => {
  configure({ adapter: new Adapter() });
  const mockStore = configureStore([]);
  const store = mockStore();

  describe('Render <ProfileModalContainer />', () => {
    let shallowWrapper;
    beforeEach(() => {
      shallowWrapper = shallow(
        <Router>
          <Provider store={store}>
            <ChildDashboardContainer />
          </Provider>
        </Router>
      ).dive();
    });

    it('Find RenderChildDashboard', () => {
      expect(shallowWrapper.find(RenderChildDashboard));
    });
    it('Find Loading Component', () => {
      expect(shallowWrapper.find(LoadingComponent));
    });
    it('Find ChildDashboardContainer', () => {
      expect(shallowWrapper).toMatchSnapshot();
    });
  });
});
