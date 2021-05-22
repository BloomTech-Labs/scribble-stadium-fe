import React from 'react';

import { Layout, Typography } from 'antd';

import ParentNavTopBar from '../../common/ParentNavTopBar';
import ParentDashboardBack from '../../common/ParentDashboardBack';
import ChildForm from '../../common/ChildForm';

const { Title } = Typography;

const EditPlayers = props => {
  return (
    <Layout className="edit-players">
      <ParentNavTopBar />
      <Layout className="content">
        <div className="top-section">
          <ParentDashboardBack />
          <Title className="title" level={2}>
            Edit Players
          </Title>
        </div>
        <Layout className="children">
          {props.parent.children.map(child => (
            <ChildForm {...props} key={child.ID} {...child} />
          ))}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default EditPlayers;
