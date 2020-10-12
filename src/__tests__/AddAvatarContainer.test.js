import * as React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import LoadingComponent from '../components/common/ParentLoadingComponent';
import RenderAddAvatar from '../components/pages/AddAvatarForm/RenderAddAvatar';
import AddAvatarContainer from '../components/pages/AddAvatarForm/AddAvatarContainer';
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
            <AddAvatarContainer />
          </Provider>
        </Router>
      ).dive();
    });

    it('Find RenderAddAvatar', () => {
      expect(shallowWrapper.find(RenderAddAvatar));
    });
    it('Find Loading Component', () => {
      expect(shallowWrapper.find(LoadingComponent));
    });
    it('Find AddAvatarContainer', () => {
      expect(shallowWrapper).toMatchSnapshot();
    });
  });
});
