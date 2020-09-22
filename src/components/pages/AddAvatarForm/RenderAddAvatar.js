import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import { postNewAvatar } from '../../../api';
import { getBase64 } from '../../../utils/helpers';

import { Header } from '../../common';
import { Form, Input, Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal';

const RenderAddAvatar = props => {
  const { authState } = useOktaAuth();

  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  // const [preview, setPreview] = useState({
  //   visible: false,
  //   image: '',
  //   title: '',
  // });

  const [form] = Form.useForm();

  const onFinish = values => {
    setUploading(true);

    const formData = new FormData();
    // formData.append('files', fileList[0]);
    fileList.forEach(file => {
      formData.append('files', file);
    });

    Object.keys(values).forEach(key => {
      formData.append(key, values[key]);
    });

    postNewAvatar(authState, formData)
      .then(res => {
        console.log(res);
        setUploading(false);
      })
      .catch(err => {
        console.log(err);
        setUploading(false);
      });
  };

  const beforeUpload = file => {
    setFileList([...fileList, file]);
    return false;
  };

  // const handleChange = ({ fileList }) => setFileList(fileList);

  // const handleCancel = () =>
  //   setPreview(preview => ({ ...preview, visible: false }));

  // const handlePreview = async file => {
  //   if (!file.url && !file.preview) {
  //     file.preview = await getBase64(file.originFileObj);
  //   }
  //   setPreview({
  //     image: file.url || file.preview,
  //     visible: true,
  //     title: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
  //   });
  // };

  const onRemove = file => {
    setFileList(curList => {
      const index = curList.indexOf(file);
      const newFileList = curList.slice();
      newFileList.splice(index, 1);
      return newFileList;
    });
  };

  useEffect(() => {
    console.log(fileList);
  }, [fileList]);

  return (
    <>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="text">
          <Input />
        </Form.Item>
        <Upload
          // onChange={handleChange}
          beforeUpload={beforeUpload}
          onRemove={onRemove}
          fileList={fileList}
        >
          <Button icon={<UploadOutlined />}>Select File(s)</Button>
        </Upload>
        {/* <Modal
          visible={preview.visible}
          title={preview.title}
          footer={null}
          onCancel={handleCancel}
        >
          <img
            alt="Preview of upload"
            style={{ width: '100%' }}
            src={preview.image}
          />
        </Modal> */}
        <Button
          type="primary"
          htmlType="submit"
          disabled={fileList.length === 0}
          loading={uploading}
        >
          {uploading ? 'Uploading...' : 'Submit'}
        </Button>
      </Form>
    </>
  );
};

export default RenderAddAvatar;
