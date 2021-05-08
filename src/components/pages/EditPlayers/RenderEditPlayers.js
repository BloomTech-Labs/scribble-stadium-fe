import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { Layout, Form, Input, Button, Typography } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

import ParentNavTopBar from '../../common/ParentNavTopBar';
import ChildCard from '../../common/ChildCard';

const { Title } = Typography;

const layoutSettings = {
  labelCol: { span: 12 },
  wrapperCol: { span: 16 },
};

const EditPlayers = props => {
  const { push } = useHistory();

  const handleChange = (value, e) => {
    console.log('this is value', value);
  };

  const [form] = Form.useForm();

  const onFinish = values => {
    push('/parent-dashboard');
  };

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
        <Layout className="children" style={{ flexFlow: 'row wrap' }}>
          {props.parent.children.map(child => (
            <ChildCard
              name={child.Name}
              AvatarURL={child.AvatarURL}
              update="SETTINGS"
            />
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
