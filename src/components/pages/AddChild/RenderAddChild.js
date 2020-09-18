import React, { useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import PropTypes from 'prop-types';

import { useHistory } from 'react-router-dom';
import { postNewChild } from '../../../api';
import { Link } from 'react-router-dom';
import {
  Layout,
  Menu,
  Form,
  Input,
  Button,
  Select,
  Switch,
  Typography,
} from 'antd';

import './AddChild.less';

const { Sider } = Layout;
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
  const { authState, authService } = useOktaAuth();
  const { push } = useHistory();

  const [newChild, setNewChild] = useState({
    Name: '',
    GradeLevelID: '',
    PIN: '',
    AvatarURL: '',
    IsDyslexic: false,
  });

  const handleChange = (value, e) => {
    console.log('this is value', value);
  };

  const [form] = Form.useForm();
  //We can store form data into upper component or Redux or dva by using onFieldsChange ex:
  const onGradeChange = value => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        return;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
        return;
      default:
        return;
    }
  };
  // const addChild = {
  //   Name: ,
  //   GradeLevelID: values.GradeLevelID,
  //   PIN: values.PIN,
  //   AvatarURL: values.AvatarURL,
  //   isDyslexic: values.isDyslexic,
  // };

  const onFinish = values => {
    console.log('values', values);
    // setNewChild({ ...newChild, values });
    postNewChild(authState, { ...values, ParentID: 1 });
    // console.log('token', authState); //displays the tokenID
    push('/parent-dashboard');
  };

  return (
    <Layout className="container">
      <Sider className="sider" theme="light">
        <div className="logo">
          <Title className="welcome" level={4}>
            Welcome Back
          </Title>
        </div>
        <Menu
          className="menu"
          mode="inline"
          defaultSelectedKeys={['dashboard']}
        >
          <Menu.Item key="dashboard">
            <Link to="/parent-dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="settings">
            <Link to="/parent-settings">Parent Settings</Link>
          </Menu.Item>
          <Menu.Item key="help">
            <Link to="/help">Help</Link>
          </Menu.Item>
          <Menu.Item onClick={() => authService.logout()} key="logout">
            Log out
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="content">
        <Title className="title" style={{ color: '#0267C1' }} level={1}>
          Settings
        </Title>

        <Form {...layout} form={form} name="add-child" onFinish={onFinish}>
          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Form.Item
              name="Name"
              onChange={handleChange}
              rules={[
                { required: true, message: 'Please input your Username!' },
              ]}
            >
              <Input placeholder="User Name" />
            </Form.Item>

            <Form.Item name="GradeLevelID" rules={[{ required: true }]}>
              <Select
                placeholder="Select a grade:"
                // onChange={onGradeChange}
                onChange={handleChange}
                allowClear
              >
                <Option value="1">Third</Option>
                <Option value="2">Fourth</Option>
                <Option value="3">Fifth</Option>
                <Option value="4">Sixth</Option>
                <Option value="5">Seven</Option>
              </Select>
            </Form.Item>
            <Form.Item name="AvatarID" rules={[{ required: true }]}>
              <Select
                placeholder="Select an Avatar:"
                // onChange={onGradeChange}
                onChange={handleChange}
                allowClear
              >
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="PIN"
              onChange={handleChange}
              rules={[{ required: true }]}
            >
              <Input placeholder="Set PIN" />
            </Form.Item>
          </Form.Item>
          <Form.Item {...dyslexia}>
            <Form.Item
              name="IsDyslexic"
              onChange={handleChange}
              label="Dyslexia"
              valuePropName="checked"
            >
              <Switch
                // checkedChildren="On"
                // unCheckedChildren="Off"
                style={{ backgroundColor: '#007AFF' }}
                defaultChecked
              />
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
        {/* </Content> */}
      </Layout>
    </Layout>
  );
};

export default RenderAddChild;

// RenderAddChild.PropTypes = {

// }
