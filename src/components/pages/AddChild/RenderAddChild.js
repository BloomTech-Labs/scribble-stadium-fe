import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import ParentNavSider from '../../common/ParentNavSider';

import { useHistory } from 'react-router-dom';
import { getChildFormValues } from '../../../api';
import { postNewChild } from '../../../api';

import { Layout, Form, Input, Button, Select, Switch, Typography } from 'antd';

const { Title } = Typography;
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const dyslexia = {
  wrapperCol: { offset: 10, span: 6 },
};

const RenderAddChild = props => {
  const { authState } = useOktaAuth();

  const [gradeLevels, setGradeLevels] = useState([]);
  const [avatars, setAvatars] = useState([]);
  const [form] = Form.useForm();
  const { push } = useHistory();

  useEffect(() => {
    getChildFormValues(authState).then(data => {
      setAvatars(() => data[0]);
      setGradeLevels(() => data[1]);
    });
  }, [authState]);

  const onFinish = values => {
    console.log('values', values);

    postNewChild(authState, { ...values, ParentID: 1 });
    push('/parent-dashboard');
  };

  return (
    <Layout className="add-child">
      <ParentNavSider selected="dashboard" />

      <Layout className="content">
        <Title className="title" style={{ color: '#0267C1' }} level={1}>
          Settings
        </Title>

        <Form {...layout} form={form} name="add-child" onFinish={onFinish}>
          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Form.Item
              name="Name"
              rules={[
                { required: true, message: 'Please input your Username!' },
              ]}
            >
              <Input placeholder="User Name" />
            </Form.Item>

            <Form.Item name="GradeLevelID" rules={[{ required: true }]}>
              <Select placeholder="Select a grade:" allowClear>
                {gradeLevels.map(g => {
                  return (
                    <Option key={g.ID} value={g.ID}>
                      {g.GradeLevel}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item name="AvatarID" rules={[{ required: true }]}>
              <Select placeholder="Select an avatar:" allowClear>
                {avatars.map(g => {
                  return (
                    <Option key={g.ID} value={g.ID}>
                      {g.AvatarURL}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item name="PIN" rules={[{ required: true }]}>
              <Input placeholder="Set PIN" />
            </Form.Item>
          </Form.Item>
          <Form.Item {...dyslexia}>
            <Form.Item
              name="IsDyslexic"
              label="Dyslexia"
              valuePropName="checked"
            >
              <Switch style={{ backgroundColor: '#007AFF' }} defaultChecked />
            </Form.Item>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 20, offset: 8 }}>
            <Button
              style={{ backgroundColor: '#007AFF', color: 'white' }}
              type="primary"
              size="large"
              htmlType="submit"
            >
              Add a Child
            </Button>
          </Form.Item>
        </Form>
      </Layout>
    </Layout>
  );
};

export default RenderAddChild;
