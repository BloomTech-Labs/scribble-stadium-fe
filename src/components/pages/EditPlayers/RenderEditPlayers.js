import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { Layout, Form, Input, Button, Typography } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

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
          <Button icon={<PlusCircleOutlined />}>Add Player</Button>
        </div>
        <Layout className="children">
          {props.parent.children.map(child => (
            <ChildForm name={child.Name} AvatarURL={child.AvatarURL} />
          ))}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default connect(
  state => ({
    parent: state.parent,
  }),
  {}
)(EditPlayers);
