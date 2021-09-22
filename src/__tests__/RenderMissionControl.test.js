import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import RenderMissionControl from '../components/pages/MissionControl/RenderMissionControl';

import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const store = mockStore();

configure({ adapter: new Adapter() });

jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }) => children,
  withAuthenticationRequired: (component, _) => component,
  useAuth0: () => {
    return {
      isAuthenticated: true,
    };
  },
}));

const Component = () => {
  return (
    <Provider store={store}>
      <RenderMissionControl />
    </Provider>
  );
};

describe('<RenderMissionControl /> test suite', () => {
  it('does not render incorrect text', () => {
    const wrapper = shallow(<Component />);
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.contains(<h2>Welcome to React</h2>)).toEqual(false);
  });
});
