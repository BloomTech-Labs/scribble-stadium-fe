import React from 'react';
import { postNewUpload, postSubmissionPage } from '../../../api';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, message } from 'antd';
import { useState } from 'react';

export default function S3UploadButton() {
  const [file, setFile] = useState([]);
  const [uploading, setUploading] = useState(false);

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
      <Upload type="file" accept="image/*" onChange={fileSelected}>
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
