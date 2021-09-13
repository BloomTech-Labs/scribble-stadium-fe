import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup } from '@testing-library/react';
import { Modal } from 'antd';

import InstructionsModal from '../components/common/InstructionsModal';

configure({ adapter: new Adapter() });

afterEach(() => {
  cleanup();
});

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('<InstructionsModal />', () => {
  let wrapper;

  it('should render a Modal in page', () => {
    wrapper = shallow(<InstructionsModal />);
    expect(wrapper.find(Modal)).toHaveLength(1);
  });
  it('should render a Modal in page', () => {
    wrapper = shallow(<Modal className="instructions-modal" />);
    expect(wrapper.is('.instructions-modal')).toEqual(true);
  });
});
