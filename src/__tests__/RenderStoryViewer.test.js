import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import RenderStoryViewer from '../components/pages/StoryPrompt/RenderStoryViewer';

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
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

const Component = () => {
  return (
    <Provider store={store}>
      <RenderStoryViewer />
    </Provider>
  );
};

describe('<RenderStoryViewer /> test suite', () => {
  let wrapper;
  it('does not render incorrect text', () => {
    wrapper = shallow(<Component />);
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.contains(<h2>Welcome to React</h2>)).toEqual(false);
  });

  it('should render a className in page', () => {
    wrapper = shallow(<div className="viewer-container" />);
    expect(wrapper.is('.viewer-container')).toEqual(true);
  });
});
