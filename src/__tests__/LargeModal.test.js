import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup } from '@testing-library/react';
import { Modal } from 'antd';

import LargeModal from '../components/common/LargeModal';

configure({ adapter: new Adapter() });

afterEach(() => {
  cleanup();
});

describe('<LargeModal />', () => {
  let wrapper;

  it('should render a Modal in page', () => {
    wrapper = shallow(<LargeModal />);
    expect(wrapper.find(Modal)).toHaveLength(1);
  });
});
