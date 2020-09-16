import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
// import FormInput from '../../common/FormInput';
// import Button from '../../common/Button';
import './AddChild.less';

const { Content, Sider } = Layout;
const { Title } = Typography;
const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const dislexia = {
  wrapperCol: { offset: 10, span: 6 },
};

const RenderAddChild = () => {
  const [form] = Form.useForm();
  //We can store form data into upper component or Redux or dva by using onFieldsChange ex
  const onGradeChange = value => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        return;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        return;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
        return;
      default:
        return;
    }
  };
  const onFinish = values => {
    console.log('values of form:', values);
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
          <Menu.Item key="dashboard">Dashboard</Menu.Item>
          <Menu.Item key="settings">Parent Settings</Menu.Item>
          <Menu.Item key="help">Help</Menu.Item>
          <Menu.Item key="logout">Log out</Menu.Item>
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
              name="username"
              rules={[
                { required: true, message: 'Please input your Username!' },
              ]}
            >
              <Input placeholder="User Name" />
            </Form.Item>

            <Form.Item name="grade" rules={[{ required: true }]}>
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
            <Form.Item name="pin" rules={[{ required: true }]}>
              <Input placeholder="Set PIN" />
            </Form.Item>
          </Form.Item>
          <Form.Item {...dislexia}>
            <Form.Item name="dislexia" label="Dyslexia" valuePropName="checked">
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
