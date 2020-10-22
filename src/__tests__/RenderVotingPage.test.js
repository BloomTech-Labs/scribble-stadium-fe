import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { cleanup } from '@testing-library/react';
import { Row, Card, Col } from 'antd';

import RenderVotingPage from '../components/pages/VotingPage/RenderVotingPage';

import Header from '../components/common/Header';

configure({ adapter: new Adapter() });

afterEach(() => {
  cleanup();
});

describe('<RenderVotingPage />', () => {
  let wrapper;

  it('Should render <Header />', () => {
    wrapper = shallow(<RenderVotingPage />);
    wrapper.setProps({ title: { title: '' } });
    expect(wrapper.find(Header)).toHaveLength(1);
  });
  it('should render a Row in the antD form', () => {
    wrapper = shallow(<RenderVotingPage />);
    expect(wrapper.find(Row)).toHaveLength(1);
  });
  it('should render a Card in the antD form', () => {
    wrapper = shallow(<RenderVotingPage />);
    expect(wrapper.find(Card)).toHaveLength(2);
  });
  it('should render a Col in the antD form', () => {
    wrapper = shallow(<RenderVotingPage />);
    expect(wrapper.find(Col)).toHaveLength(2);
  });
});
