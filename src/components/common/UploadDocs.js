import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Form, Button, Upload, Modal, notification } from 'antd';

import { getBase64 } from '../../utils/helpers';

export const UploadDocs = ({
  fileName,
  uploadButtonClassname,
  uploadButtonText,
  submitButtonClassname,
  apiAxios,
  submissionId,
  storyId,
  setSubmitted,
  maxLength,
  handleSubmit,
  listType,
  handleChangeExtra,
  savedFileList,
}) => {
  const { user } = useAuth0();

  const [uploading, setUploading] = useState(false);
  const [filePreviews, setFilePreviews] = useState([]);
  const [fileList, setFileList] = useState([]);
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
      formData.append(fileName, file);
    });
    Object.keys(values).forEach(key => {
      formData.append(key, values[key]);
    });
    formData.append('storyId', storyId);
    apiAxios(user, formData, submissionId)
      .then(res => {
        setUploading(false);
        setSubmitted(true);
      })
      .then(res => {
        handleSubmit();
      })
      .catch(err => {
        for (var value of formData.entries()) {
          console.log(value, err);
        }
        setUploading(false);
      });
  };

  const beforeUpload = () => false;

  const handleCancel = () => {
    console.log('handleCancel');
    setPreview(preview => ({ ...preview, visible: false }));
  };

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

  const handleChange = ({ fileList, file }) => {
    setFilePreviews(fileList);
    setFileList(fl => {
      console.log({ fl, file }, 'handleChange');
      if (fileList.length > fl.length) {
        return [...fl, file];
      } else {
        return fl;
      }
    });

    if (fileList.length > maxLength) {
      openNotificationWithIcon('warning');
    }

    // This is in case I want to have access to this onChange event outside of this component
    if (handleChangeExtra) {
      handleChangeExtra(fileList);
    }
  };

  const onRemove = file => {
    console.log('onRemove');
    setFileList(curList => {
      const index = filePreviews.indexOf(file);
      console.log(index, 'onRemove');
      const newFileList = curList.slice();
      newFileList.splice(index, 1);
      return newFileList;
    });
  };

  useEffect(() => {
    console.log({ fileList, filePreviews }, 'useEffect');

    // This is in case I have a filelist ready OUTSIDE this component
    if (savedFileList != undefined) {
      setFilePreviews(savedFileList);
      setFileList(savedFileList);
    }
  });

  // For error message warning if there are too many images
  const openNotificationWithIcon = type => {
    notification[type]({
      message: `Please Remove Photo(s)`,
      description: `You are only allowed to have ${maxLength} images.`,
    });
  };

  return (
    <>
      <Form form={form} onFinish={onFinish}>
        <Upload
          listType={listType ? listType : 'picture-card'}
          fileList={filePreviews}
          onRemove={onRemove}
          beforeUpload={beforeUpload}
          onPreview={handlePreview}
          onChange={handleChange}
          multiple={true}
        >
          <Button className={uploadButtonClassname}>{uploadButtonText}</Button>
        </Upload>

        <div className="bottom">
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
            className={submitButtonClassname}
            type="primary"
            htmlType="submit"
            disabled={fileList.length === 0 || fileList.length > maxLength}
            loading={uploading}
          >
            {uploading ? 'Uploading...' : 'Submit'}
          </Button>
        </div>
      </Form>
    </>
  );
};

export default UploadDocs;
