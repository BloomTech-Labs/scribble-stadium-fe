import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup } from '@testing-library/react';
import { Button } from 'antd';

import { RenderDrawingSub } from '../components/pages/DrawingSub/RenderDrawingSub';
import InstructionsModal from '../components/common/InstructionsModal';
import Header from '../components/common/Header';

configure({ adapter: new Adapter() });

afterEach(() => {
  cleanup();
});

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));
describe('<RenderDrawingSub />', () => {
  let wrapper;

  it('Should render <SubmissionModal />', () => {
    wrapper = shallow(
      <RenderDrawingSub instructions={() => {}} tasks={{ story: {} }} />
    );
    wrapper.setProps({ instructions: { inst: '' } });
    expect(wrapper.find(InstructionsModal)).toHaveLength(1);
  });
  it('Should render <Header />', () => {
    wrapper = shallow(
      <RenderDrawingSub title={() => {}} tasks={{ story: {} }} />
    );
    wrapper.setProps({ title: { title: '' } });
    expect(wrapper.find(Header)).toHaveLength(1);
  });
  it('should render a Button in the antD form', () => {
    wrapper = shallow(<RenderDrawingSub tasks={{ story: {} }} />);
    expect(wrapper.find(Button));
  });
});
