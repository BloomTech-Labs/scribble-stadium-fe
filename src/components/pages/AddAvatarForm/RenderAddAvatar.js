import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { postNewAvatar } from '../../../api';
import { getBase64 } from '../../../utils/helpers';

import { Header } from '../../common';

import { Form, Upload, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal';

const RenderAddAvatar = () => {
  const { user } = useAuth0();

  const [fileList, setFileList] = useState([]);
  const [filePreviews, setFilePreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState({
    visible: false,
    image: '',
    title: '',
  });

  const [form] = Form.useForm();

  const onFinish = values => {
    setUploading(true);

    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('avatars', file);
    });

    Object.keys(values).forEach(key => {
      formData.append(key, values[key]);
    });

    postNewAvatar(user, formData)
      .then(res => {
        setUploading(false);
      })
      .catch(err => {
        console.log(err);
        setUploading(false);
      });
  };

  const beforeUpload = file => {
    setFileList([...fileList, file]);
    setFilePreviews([...filePreviews, file]);
    return false;
  };

  const handleChange = ({ fileList }) => setFilePreviews(fileList);

  const handleCancel = () =>
    setPreview(preview => ({ ...preview, visible: false }));

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreview({
      image: file.url || file.preview,
      visible: true,
      title: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  const onRemove = file => {
    setFileList(curList => {
      const index = curList.indexOf(file);
      const newFileList = curList.slice();
      newFileList.splice(index, 1);
      return newFileList;
    });
  };

  return (
    <>
      <Header />
      <Form form={form} onFinish={onFinish}>
        <Upload
          listType="picture-card"
          beforeUpload={beforeUpload}
          onRemove={onRemove}
          onChange={handleChange}
          onPreview={handlePreview}
          fileList={filePreviews}
        >
          {/* {fileList.length >= 5 ? null : ( */}
          <div>
            <PlusOutlined />
            <div style={{ marginTop: '10px' }}>Upload</div>
          </div>
          {/* )} */}
        </Upload>
        <Modal
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
        </Modal>
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
