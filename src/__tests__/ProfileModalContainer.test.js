import * as React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import LoadingComponent from '../components/common/ParentLoadingComponent';
import ProfileRenderModal from '../components/pages/Modal/ProfileRenderModal';
import ProfileModalContainer from '../components/pages/Modal/ProfileModalContainer';
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
    let shallowWrapper = ShallowWrapper;
    beforeEach(() => {
      shallowWrapper = shallow(
        <Router>
          <Provider store={store}>
            <ProfileModalContainer />
          </Provider>
        </Router>
      ).dive();
    });

    it('Find ProfileRenderModal', () => {
      expect(shallowWrapper.find(ProfileRenderModal));
    });
    it('Find Loading Component', () => {
      expect(shallowWrapper.find(LoadingComponent));
    });
    it('Find ProfileModalContainer', () => {
      expect(shallowWrapper).toMatchSnapshot();
    });
  });
});
