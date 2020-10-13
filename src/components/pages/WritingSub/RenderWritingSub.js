import React from 'react';
import { Row } from 'antd';
import { connect } from 'react-redux';

import { Header } from '../../common';
import { UploadDocs } from '../../common/';
import { postNewWritingSub } from '../../../api/index';
import { SubmissionModal } from '../../common/index';
import { tasks } from '../../../state/actions';

export const RenderWritingSub = props => {
  const inst =
    'Once you finish writing your story, please take a picture of all your pages and upload them. After all pages are uploaded, click submit.';

  return (
    <>
      <Header title="PENCILS READY?" />
      <SubmissionModal instructions={inst} />
      <div className="writing-sub-container">
        <Row className="main-row">
          <p>{props.tasks.writingPrompt}</p>
        </Row>
        <div className="upload">
          <h1>Upload</h1>
          <UploadDocs
            submitButtonClassname="orange-submit-button"
            uploadButtonText="Choose files from your device"
            uploadButtonClassname="uploadButton"
            fileName="pages"
            apiAxios={postNewWritingSub}
            submissionId={props.tasks.id}
            storyId={props.tasks.story_id}
            setSubmitted={props.setHasWritten}
            maxLength={5}
          />
        </div>
      </div>
    </>
  );
};

export default connect(
  state => ({
    tasks: state.tasks,
  }),
  {
    setHasWritten: tasks.setHasWritten,
  }
)(RenderWritingSub);
