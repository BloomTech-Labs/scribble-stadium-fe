import React, { useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { getAuthHeader, getDSData } from '../../../api';
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

const { Content, Sider } = Layout;
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
  // const { authService } = props;
  const { authState, authService } = useOktaAuth();
  const [newChild, setNewChild] = useState({
    Name: '',
    GradeLevelID: '',
    PIN: '',
    AvatarURL: '',
    isDyslexic: false,
  });
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
  const parentId = localStorage.getItem({
    headers: { Authorization: 'idToken' },
  });
  const onFinish = values => {
    console.log('values', values);
    getDSData(' https://story-squad-b-api.herokuapp.com/child', parentId);
    // axios
    //   .post(' https://story-squad-b-api.herokuapp.com/child', {
    //     ...values,
    //     ParentID: parentId,
    //   })
    //   .then(response => {
    //     console.log('success', response);
    //   })
    //   .catch(error => console.error(error.response));
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

        {/* <Content className="content"> */}
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
              <Select
                placeholder="Select a grade:"
                onChange={onGradeChange}
                allowClear
              >
                <Option value="third">Third</Option>
                <Option value="fourth">Fourth</Option>
                <Option value="fifth">Fifth</Option>
                <Option value="sixth">Sixth</Option>
                <Option value="seven">Seven</Option>
              </Select>
            </Form.Item>
            <Form.Item name="PIN" rules={[{ required: true }]}>
              <Input placeholder="Set PIN" />
            </Form.Item>
            <Form.Item name="AvatarID" rules={[{ required: true }]}>
              <Input placeholder="Set Avatar number:" />
            </Form.Item>
          </Form.Item>
          <Form.Item {...dyslexia}>
            <Form.Item
              name="isDyslexic"
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
