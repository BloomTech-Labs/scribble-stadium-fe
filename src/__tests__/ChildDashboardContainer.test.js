import React from 'react';
import { render, cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { ChildLoadingComponent } from '../components/common';
import ChildDashboardContainer from '../components/pages/ChildDashboard/ChildDashboardContainer';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RenderChildDashboard from '../components/pages/ChildDashboard/RenderChildDashboard';
import LoadingComponent from '../components/common/ChildLoadingComponent';

const mockStore = configureStore([]);
const store = mockStore();

afterEach(() => {
  cleanup();
});

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {
        isAuthenticated: true,
      },
      authService: {
        getUser: () => Promise.reject(),
      },
    };
  },
}));

describe('<AddChildContainer /> test suite', () => {
  test('container renders without crashing', async () => {
    const { container, getByText } = render(
      <Router>
        <Provider store={store}>
          <ChildDashboardContainer LoadingComponent={ChildLoadingComponent} />
        </Provider>
      </Router>
    );
    expect(container).toBeInTheDocument();
    expect(getByText(/loading/i)).toBeInTheDocument();
  });
});

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
