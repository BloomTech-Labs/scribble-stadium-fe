import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup } from '@testing-library/react';
import { Col, Button, Row } from 'antd';

import MatchUp from '../components/pages/MatchUp/RenderMatchUp';
import { Header } from '../components/common';
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

afterEach(() => {
  cleanup();
});

describe('<MatchUp />', () => {
  let wrapper;

  it('Should render Header', () => {
    wrapper = shallow(<MatchUp />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });
  it('Should render a Row from antD', () => {
    wrapper = shallow(<MatchUp />);
    expect(wrapper.find(Row)).toHaveLength(2);
  });

  it('should render a Col from antD', () => {
    wrapper = shallow(<MatchUp />);
    expect(wrapper.find(Col)).toHaveLength(4);
  });
  it('should render a Button in from andtD', () => {
    wrapper = shallow(<MatchUp />);
    expect(wrapper.find(Button)).toHaveLength(2);
  });
});
