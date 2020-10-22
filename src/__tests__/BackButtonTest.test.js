import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup } from '@testing-library/react';
import { Button } from 'antd';

import BackButton from '../components/common/BackButton';

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

afterEach(() => {
  cleanup();
});

describe('<BackButton />', () => {
  let wrapper;

  it('Should render a Button', () => {
    wrapper = shallow(<BackButton />);
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
