import React from 'react';
import { Header } from '../../common';
import { Row } from 'antd';
import { UploadDocs } from '../../common/';
import { postNewDrawingSub } from '../../../api/index';
import { SubmissionModal } from '../../common/index';

const RenderDrawingSub = () => {
  const inst =
    'Once you finish your drawing, please take a picture of all of your pages and upload them. After all pages are uploaded, click submit.';
  const submissionId = 1;

  return (
    <>
      <Header title="READY, SET ...DRAW!" />
      <SubmissionModal instructions={inst} />
      <div className="writing-sub-container">
        <Row className="main-row">
          <p>Draw a picture of your favorite part of the story.</p>
        </Row>
        <div className="upload">
          <h1>Upload</h1>
          <UploadDocs
            submitButtonClassname="orange-submit-button"
            uploadButtonText="Choose files from your device"
            uploadButtonClassname="uploadButton"
            fileName="drawing"
            apiAxios={postNewDrawingSub}
            submissionId={submissionId}
          />
        </div>
      </div>
    </>
  );
};

export default RenderDrawingSub;
