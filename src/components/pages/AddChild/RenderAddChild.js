import React from 'react';
import { connect } from 'react-redux';

import { Layout, Typography } from 'antd';

import ParentNavTopBar from '../../common/ParentNavTopBar';
import ParentDashboardBack from '../../common/ParentDashboardBack';
import ChildForm from '../../common/ChildForm';
import ParentFooter from '../../common/ParentFooter';

const { Title } = Typography;

const RenderAddChild = props => {
  return (
    <>
      <Layout className="edit-players">
        <ParentNavTopBar />
        <Layout className="content">
          <div className="top-section">
            <ParentDashboardBack />
            <Title className="title" level={2}>
              Add Player
            </Title>
          </div>
          <Layout className="children">
            <ChildForm {...props} newChild={true} />
          </Layout>
        </Layout>
      <ParentFooter layoutContainerCheck={'no-scroll'} />
    </>
  );
};

export default connect(
  state => ({
    parent: state.parent,
  }),
  {}
)(RenderAddChild);
