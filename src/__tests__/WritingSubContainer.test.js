import * as React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup } from '@testing-library/react';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import LoadingComponent from '../components/common/ParentLoadingComponent';
import RenderWritingSub from '../components/pages/WritingSub/RenderWritingSub';
import WritingSubContainer from '../components/pages/WritingSub/WritingSubContainer';

afterEach(() => {
  cleanup();
});

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
            <WritingSubContainer />
          </Provider>
        </Router>
      ).dive();
    });

    it('Find WritingSub', () => {
      expect(shallowWrapper.find(RenderWritingSub));
    });
    it('Find Loading Component', () => {
      expect(shallowWrapper.find(LoadingComponent));
    });
    it('Find WritingSubContainer', () => {
      expect(shallowWrapper).toMatchSnapshot();
    });
  });
});
