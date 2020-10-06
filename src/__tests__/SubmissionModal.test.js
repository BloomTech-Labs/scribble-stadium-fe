import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup } from '@testing-library/react';
import { Modal } from 'antd';

import SubmissionModal from '../components/common/SubmissionModal';

configure({ adapter: new Adapter() });

afterEach(() => {
  cleanup();
});

describe('<RenderWritingSub />', () => {
  let wrapper;

  it('should render a Button in the antD form', () => {
    wrapper = shallow(<SubmissionModal />);
    expect(wrapper.find(Modal)).toHaveLength(1);
  });
});
