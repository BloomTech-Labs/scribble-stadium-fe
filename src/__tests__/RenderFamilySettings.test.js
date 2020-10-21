import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { cleanup } from '@testing-library/react';
import { Button, Layout } from 'antd';

import RenderFamilySettings from '../components/pages/FamilySettings/RenderFamilySettings';
import ParentNavSider from '../components/common/ParentNavSider';

configure({ adapter: new Adapter() });

afterEach(() => {
  cleanup();
});

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => {
    return {
      authState: {
        isAuthenticated: true,
      },
      AuthService: {},
    };
  },
}));

const mockStore = configureStore([]);
const store = mockStore();

const Component = () => {
  return (
    <Router>
      <Provider store={store}>
        <RenderFamilySettings />
      </Provider>
    </Router>
  );
};

describe('<FamilySettings /> test suite', () => {
  it('should render ParentNavSider', () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.find(ParentNavSider));
  });
  it('should render a Button in the antD form', () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.find(Button));
  });
  it('should render a Layout', () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.find(Layout));
  });
});
