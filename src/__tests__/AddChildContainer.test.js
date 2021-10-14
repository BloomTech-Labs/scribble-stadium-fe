import React from 'react';
import { render, cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { ParentLoadingComponent } from '../components/common';
import AddChildContainer from '../components/pages/AddChild/AddChildContainer';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RenderAddChild from '../components/pages/AddChild/RenderAddChild';
import LoadingComponent from '../components/common/ParentLoadingComponent';

const mockStore = configureStore([]);
const store = mockStore();

afterEach(() => {
  cleanup();
});

jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }) => children,
  withAuthenticationRequired: (component, _) => component,
  useAuth0: () => {
    return {
      isAuthenticated: true,
    };
  },
}));

describe('<AddChildContainer /> test suite', () => {
  test('container renders without crashing', async () => {
    const { container, getByText } = render(
      <Router>
        <Provider store={store}>
          <AddChildContainer LoadingComponent={ParentLoadingComponent} />
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
            <AddChildContainer />
          </Provider>
        </Router>
      ).dive();
    });

    it('Find RenderAddChild', () => {
      expect(shallowWrapper.find(RenderAddChild));
    });
    it('Find Loading Component', () => {
      expect(shallowWrapper.find(LoadingComponent));
    });
    it('Find AddChildContainer', () => {
      expect(shallowWrapper).toMatchSnapshot();
    });
  });
});
