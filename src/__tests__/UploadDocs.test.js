import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup } from '@testing-library/react';
import { Button, Modal } from 'antd';

import UploadDocs from '../components/common/UploadDocs';

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

describe('<UploadDocs />', () => {
  let wrapper;

  it('Should render <UploadDocs />', () => {
    wrapper = shallow(<UploadDocs />);
    expect(wrapper.find(Modal)).toHaveLength(1);
  });

  it('should render a Button in the antD form', () => {
    wrapper = shallow(<UploadDocs />);
    expect(wrapper.find(Button)).toHaveLength(2);
  });
});
