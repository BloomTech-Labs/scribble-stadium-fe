import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup } from '@testing-library/react';
import { Button, Form, Radio } from 'antd';

import { VotingForm } from '../components/common';

configure({ adapter: new Adapter() });

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

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

afterEach(() => {
  cleanup();
});

describe('<VotingForm />', () => {
  let wrapper;

  it('Should render a Form', () => {
    wrapper = shallow(<VotingForm />);
    expect(wrapper.find(Form)).toHaveLength(1);
  });

  it('should render a Button in the antD form', () => {
    wrapper = shallow(<VotingForm />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });
  it('should render a Radio in the antD form', () => {
    wrapper = shallow(<VotingForm />);
    expect(wrapper.find(Radio)).toHaveLength(2);
  });
});
