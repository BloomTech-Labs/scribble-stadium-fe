import React, { useState } from 'react';
import { Row } from 'antd';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Header } from '../../common';
import { UploadDocs } from '../../common/';
import { postNewWritingSub } from '../../../api/index';
import { InstructionsModal } from '../../common/index';
import { modalInstructions } from '../../../utils/helpers';
import { tasks } from '../../../state/actions';

export const RenderWritingSub = props => {
  const [modalVisible, setModalVisible] = useState(true);
  const [modalText, setModalText] = useState('');

  const { push } = useHistory();

  const handleSubmit = () => {
    console.log('handle submit was called');
    setModalVisible(true);
    setModalText(modalInstructions.submissionComplete);
  };

  // const handleClose = () => {
  //   console.log('handle close was called');
  //   if (props.tasks.hasWritten) {
  //     push('/child/mission-control');
  //   }
  // };

  return (
    <>
      <Header title="PENCILS READY?" />
      <InstructionsModal
        modalVisible={modalVisible}
        instructions={modalText || modalInstructions.writingSub}
        style={{ fontSize: '1.5rem' }}
        // handleClose={handleClose}
      />
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
            handleSubmit={handleSubmit}
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
