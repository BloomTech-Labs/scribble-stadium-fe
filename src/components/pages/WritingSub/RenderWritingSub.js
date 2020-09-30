import React from 'react';
import { Header } from '../../common';
import { Row } from 'antd';
import { UploadDocs } from '../../common';
import { postNewWritingSub } from '../../../api/index';

const RenderWritingSub = () => {
  return (
    <>
      <Header title="PENCILS READY?" />
      <div className="writing-sub-container">
        <Row className="main-row">
          <p>
            A sidekick does something completely out of character, and everyone
            must figure out why.
          </p>
        </Row>
        <div className="upload">
          <h1>Upload</h1>
          <UploadDocs
            submitButtonClassname="orange-submit-button"
            uploadButtonText="Choose files from your device"
            uploadButtonClassname="uploadButton"
            fileName="writingSub"
            apiAxios={postNewWritingSub}
            apiAxiosParams="authState, body, childId"
          />
        </div>
      </div>
    </>
  );
};

export default RenderWritingSub;
