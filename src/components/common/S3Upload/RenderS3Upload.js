import React from 'react';
import { postNewUpload, postSubmissionPage } from '../../../api';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, message } from 'antd';
import { useState } from 'react';

export default function S3UploadButton(props) {
  const { submissionPage } = props;
  const [file, setFile] = useState([]);
  const [uploading, setUploading] = useState(false);

  const fileSelected = fileName => {
    const selectedFile = fileName.file;
    setFile(selectedFile);
  };

  const handleUpload = e => {
    e.preventDefault();
    setUploading(true);
    postNewUpload(file)
      .then(res => {
        postSubmissionPage({
          submissionId: submissionPage.submissionId,
          type: submissionPage.type,
          url: res,
          pageNum: submissionPage.pageNum,
        })
          .then(res => {
            if (res.length === 0) {
              message.error('Upload Failed.');
            } else {
              message.success(`${file.name} Uploaded Successfully!`);
            }
          })
          .catch(err => {
            message.error('Upload Failed!' + err);
          });
      })
      .finally(() => {
        setUploading(false);
        setFile([]);
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
