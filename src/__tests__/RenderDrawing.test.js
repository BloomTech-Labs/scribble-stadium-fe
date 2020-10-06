import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup } from '@testing-library/react';
import { Button } from 'antd';

import { RenderDrawingSub } from '../components/pages/DrawingSub/RenderDrawingSub';
import SubmissionModal from '../components/common/SubmissionModal';
import Header from '../components/common/Header';

configure({ adapter: new Adapter() });

afterEach(() => {
  cleanup();
});

describe('<RenderDrawingSub />', () => {
  let wrapper;

  it('Should render <SubmissionModal />', () => {
    wrapper = shallow(
      <RenderDrawingSub instructions={() => {}} tasks={() => {}} />
    );
    wrapper.setProps({ instructions: { inst: '' } });
    expect(wrapper.find(SubmissionModal)).toHaveLength(1);
  });
  it('Should render <Header />', () => {
    wrapper = shallow(<RenderDrawingSub title={() => {}} tasks={() => {}} />);
    wrapper.setProps({ title: { title: '' } });
    expect(wrapper.find(Header)).toHaveLength(1);
  });
  it('should render a Button in the antD form', () => {
    wrapper = shallow(<RenderDrawingSub tasks={() => {}} />);
    expect(wrapper.find(Button));
  });
});
