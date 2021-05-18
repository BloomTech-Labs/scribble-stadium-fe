import React from 'react';
import { useHistory } from 'react-router-dom';

import { Layout, Typography } from 'antd';

import ParentNavTopBar from '../../common/ParentNavTopBar';
import ChildForm from '../../common/ChildForm';

const { Title } = Typography;

const EditPlayers = props => {
  const { push } = useHistory();

  return (
    <Layout className="parent-dashboard edit-players">
      <ParentNavTopBar />
      <Layout className="content">
        <div className="top-section">
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
