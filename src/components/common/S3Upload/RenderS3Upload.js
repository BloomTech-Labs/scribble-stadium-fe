import React from 'react';
import { postNewUpload, postSubmissionPage } from '../../../api';
// import { postNewUpload } from '../../../api';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, message } from 'antd';
import { useState } from 'react';

export default function S3UploadButton() {
  const [file, setFile] = useState('');
  const [uploading, setUploading] = useState(false);
  const beforeUpload = file => {
    console.log('from before', file.file.type);
    const isJpgOrPng =
      file.type === 'image/jpeg/pdf' ||
      file.type === 'image/png/pdf' ||
      file.type === 'application/pdf';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG/PDF file!');
    }
    return isJpgOrPng;
  };

  const fileSelected = fileName => {
    const selectedFile = fileName.file;
    setFile(selectedFile);
    console.log('file', selectedFile);
  };

  const handleUpload = e => {
    e.preventDefault();
    setUploading(true);
    postNewUpload(file)
      .then(res => {
        console.log('response from 1st .then', res);
        postSubmissionPage({ url: res })
          .then(res => {
            console.log('response from uploading url to DB', res);
          })
          .catch(err => {
            console.log('error from uploading url to DB', err);
          });
      })
      .then(() => {
        setFile([]);
        message.success('upload successfully.');
      })
      .catch(() => {
        message.error('upload failed.');
      })
      .finally(() => {
        setUploading(false);
      });
  };

  return (
    <>
      <h2>S3 Upload Button</h2>
      <Upload
        beforeUpload={beforeUpload}
        type="file"
        accept="image/*"
        onChange={fileSelected}
      >
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>

      <Button
        type="primary"
        disabled={file.length === 0}
        loading={uploading}
        onClick={handleUpload}
        style={{
          marginTop: 16,
        }}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
    </>
  );
}
