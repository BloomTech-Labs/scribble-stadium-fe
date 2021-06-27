import React from 'react';

import 'antd/dist/antd.css';

import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import { connect } from 'react-redux';
// Refuses to work properly without errors showingup though there are props
const UploaderComp = ({ ...props }) => {
  const { Dragger } = Upload;

  const props1 = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading
        company data or other band files
      </p>
    </Dragger>
  );
};
export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(UploaderComp);
