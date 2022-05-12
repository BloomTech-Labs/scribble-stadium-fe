import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
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

  const props = {
    votes: {
      ID: 0,
      Submission1: {
        ImgURL: '',
      },
      Submission2: {
        ImgURL: '',
      },
    },
    child: {
      memberId: 0,
    },
  };
  it('Should render <Header />', () => {
    wrapper = shallow(<RenderVotingPage {...props} />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });
  it('should render a Row in the antD form', () => {
    wrapper = shallow(<RenderVotingPage {...props} />);
    expect(wrapper.find(Row)).toHaveLength(1);
  });
  it('should render a Col in the antD form', () => {
    wrapper = shallow(<RenderVotingPage {...props} />);
    expect(wrapper.find(Col)).toHaveLength(2);
  });
});
