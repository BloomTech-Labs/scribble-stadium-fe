import React from 'react';
import { Row } from 'antd';
import { connect } from 'react-redux';
import { Header } from '../../common';
import { UploadDocs } from '../../common/';
import { postNewDrawingSub } from '../../../api/index';
import { InstructionsModal } from '../../common/index';
import { modalInstructions } from '../../../utils/helpers';
import { tasks } from '../../../state/actions';

export const RenderDrawingSub = props => {
  return (
    <>
      <Header title="READY, SET ...DRAW!" />
      <InstructionsModal instructions={modalInstructions.drawingSub} />
      <div className="writing-sub-container">
        <Row className="main-row">
          <p>{props.tasks.drawingPrompt}</p>
        </Row>
        <div className="upload">
          <h1 className="upload">Upload</h1>
          <UploadDocs
            submitButtonClassname="orange-submit-button"
            uploadButtonText="Choose files from your device"
            uploadButtonClassname="uploadButton"
            fileName="drawing"
            apiAxios={postNewDrawingSub}
            submissionId={props.tasks.id}
            storyId={props.tasks.story_id}
            setSubmitted={props.setHasDrawn}
            maxLength={1}
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
    setHasDrawn: tasks.setHasDrawn,
  }
)(RenderDrawingSub);
