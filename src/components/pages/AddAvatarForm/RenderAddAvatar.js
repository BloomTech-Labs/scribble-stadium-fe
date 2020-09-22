import React, { useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import { useHistory } from 'react-router-dom';
import { getChildFormValues } from '../../../api';

import { postNewAvatar } from '../../../api';

import { Link } from 'react-router-dom';
import { Header } from '../../common';
import { Form, Input, Upload, message } from 'antd';

const { Dragger } = Upload;

const RenderAddAvatar = props => {
  const { authState } = useOktaAuth();

  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [form] = Form.useForm();

  const onFinish = () => {};

  return (
    <>
      <Header />
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="text">
          <Input />
        </Form.Item>
      </Form>
    </>
  );
};

export default RenderAddAvatar;
