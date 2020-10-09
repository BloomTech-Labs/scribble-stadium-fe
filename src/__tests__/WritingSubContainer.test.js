import * as React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import WritingSubContainer from '../components/pages/WritingSub/WritingSubContainer';
import LoadingComponent from '../components/common/ParentLoadingComponent';
import RenderWritingSub from '../components/pages/WritingSub/RenderWritingSub';

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

describe('<WritingSubContainer />', () => {
  configure({ adapter: new Adapter() });
  const mockStore = configureStore([]);
  const store = mockStore();

  describe('Render WritingSubContainer', () => {
    let shallowWrapper = ShallowWrapper;
    beforeEach(() => {
      shallowWrapper = shallow(
        <Router>
          <Provider store={store}>
            <WritingSubContainer />
          </Provider>
        </Router>
      );
    });

    it('Find Loading Component', () => {
      expect(shallowWrapper.find(LoadingComponent));
    });
    it('Find RenderWritingSub', () => {
      expect(shallowWrapper.find(RenderWritingSub).length).toBe(0);
    });
  });
});
