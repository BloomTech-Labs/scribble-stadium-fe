import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { tasks } from '../../../state/actions';
// import { useHistory } from 'react-router-dom';
// import { Gamemode } from './index';
// import { Link, Route, useHistory } from 'react-router-dom';
// import Gamebtn from './Gamebtn';
// import { GamemodeCon } from './GamemodeCon';

import { render } from 'react-dom';
import Thrashbar from './Thrashbar';
const UploaderComp = ({ ...props }) => {
  // const { push, location } = useHistory();
  // const [rwd, setsRwd] = useState({
  //   read: false,
  //   write: false,
  //   draw: false,
  //   mode: 'single',
  // });
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
// export default connect()(Gamemode);
