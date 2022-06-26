import React from 'react';
import { postNewUpload } from '../../../api';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { useState } from 'react';

export default function S3UploadButton() {
  const [file, setFile] = useState('');

  const fileSelected = fileName => {
    const selectedFile = fileName.file;
    setFile(selectedFile);
    console.log('file', selectedFile);
  };

  const handleUpload = e => {
    e.preventDefault();
    postNewUpload(file)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        alert('ERROR API Axios' + JSON.stringify(error));
      });
  };

  return (
    <>
      <h2>S3 Upload Button</h2>
      <Upload type="file" accept="image/*" onChange={fileSelected}>
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>

      <Button
        type="primary"
        disabled={file.length === 0}
        onClick={handleUpload}
        style={{
          marginTop: 16,
        }}
      >
        Upload
      </Button>
    </>
  );
}
