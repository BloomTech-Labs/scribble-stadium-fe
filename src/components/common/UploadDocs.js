import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Form, Button, Upload, Modal } from 'antd';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const UploadDocs = ({
  fileName,
  uploadButtonClassname,
  uploadButtonText,
  submitButtonClassname,
  apiAxios,
  submissionId,
  storyId,
}) => {
  const { authState } = useOktaAuth();

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
    // console.log(values);
    setUploading(true);

    const formData = new FormData();

    fileList.forEach(file => {
      formData.append(fileName, file);
    });
    Object.keys(values).forEach(key => {
      formData.append(key, values[key]);
    });
    formData.append('storyId', storyId);
    apiAxios(authState, formData, submissionId)
      .then(res => {
        console.log(res);
        setUploading(false);
      })
      .catch(err => {
        for (var value of formData.entries()) {
          console.log(value, err);
        }
        setUploading(false);
      });
  };

  const beforeUpload = file => {
    setFileList([...fileList, file]);
    setFilePreviews([...filePreviews, file]);
    return false;
  };

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

  const handleChange = ({ fileList }) => {
    setFilePreviews(fileList);
    // setFileList(fileList);
  };

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
        <Upload
          listType="picture-card"
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
            disabled={fileList.length === 0}
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
