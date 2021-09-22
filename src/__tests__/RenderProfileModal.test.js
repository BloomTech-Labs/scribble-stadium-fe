import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup } from '@testing-library/react';
import { Modal } from 'antd';

import { Header } from '../components/common';
import ProfileRenderModal from '../components/pages/Modal/ProfileRenderModal';

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

describe('<ProfileRenderModal />', () => {
  let wrapper;

  it('should render a Header in page', () => {
    wrapper = shallow(<ProfileRenderModal />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('should render a Modal in page', () => {
    wrapper = shallow(<ProfileRenderModal />);
    expect(wrapper.find(Modal)).toHaveLength(1);
  });

  it('should render a className in page', () => {
    wrapper = shallow(<Modal className="profile-modal" />);
    expect(wrapper.is('.profile-modal')).toEqual(true);
  });
});
