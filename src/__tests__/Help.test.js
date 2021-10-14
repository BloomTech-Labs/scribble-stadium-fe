import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { cleanup } from '@testing-library/react';

import Help from '../components/pages/Help/Help';
import ParentNavSider from '../components/common/ParentNavSider';

configure({ adapter: new Adapter() });

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

const mockStore = configureStore([]);
const store = mockStore();

const Component = () => {
  return (
    <Router>
      <Provider store={store}>
        <Help />
      </Provider>
    </Router>
  );
};

describe('<FamilySettings /> test suite', () => {
  it('should render ParentNavSider', () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.find(ParentNavSider));
  });
});
