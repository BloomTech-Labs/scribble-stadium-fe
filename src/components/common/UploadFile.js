import React from 'react';
import { apiAuthPost } from '../../api';
import { UploadOutlined } from '@ant-design/icons';
import { orangeButtonStyle } from '../../styles/less/variables.less';

/*
    This component adds the capability to allow file uploads. This component will work hand in hand with the AddAudiobookModal
    component and will allow users to upload/save audio files of their childrens' stories.
    Instructions for this component were followed from this resource: https://roytuts.com/upload-file-to-server-using-react/

    Next step will be to refactor into arrow notation in the interest of maintaining convention. 
*/

class UploadFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: '', msg: '' };
  }

  onFileChange = e => {
    this.setState({
      file: e.target.files[0],
    });
  };

  uploadFileData = e => {
    e.preventDefault();
    this.setState({ msg: '' });

    let data = new FormData();
    data.append('file', this.state.file);

    apiAuthPost('/upload', {
      method: 'POST',
      body: data,
    })
      .then(res => {
        this.setState({ msg: 'File Successfully Uploaded' });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  render() {
    return (
      <div className={orangeButtonStyle}>
        <h1></h1>
        <h3></h3>
        <h4>{this.state.msg}</h4>
        <input onChange={this.onFileChange} type="file"></input>
        <UploadOutlined
          disabled={!this.state.file}
          onClick={this.uploadFileData}
        >
          Upload
        </UploadOutlined>
      </div>
    );
  }
}

export default UploadFile;
