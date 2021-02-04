import React, { useState } from 'react';
import { Row } from 'antd';
import { connect } from 'react-redux';
import { Header } from '../../common';
import { UploadDocs } from '../../common/';
import { postNewDrawingSub } from '../../../api/index';
import { InstructionsModal } from '../../common/index';
import { modalInstructions } from '../../../utils/helpers';
import { tasks } from '../../../state/actions';
import { useHistory } from 'react-router-dom';

export const RenderDrawingSub = props => {
  //Modal state
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');

  const { push } = useHistory();

  const handleSubmit = () => {
    setModalVisible(true);
    setModalText(modalInstructions.submissionComplete);
  };
  return (
    <>
      <Header title="READY, SET ...DRAW!" />
      <InstructionsModal
        modalVisible={modalVisible}
        handleCancel={() => {
          setModalVisible(false);
          if (props.hasDrawn) {
            push('/child/mission-control');
          }
        }}
        handleOk={() => {
          setModalVisible(false);
        }}
        style={{ fontSize: '1.5rem' }}
        instructions={modalText}
      />
      <div className="writing-sub-container">
        <Row className="main-row">
          {/* This will be the topic the user needs to draw. The dummy drawingPrompt data in the seeds are just place holders for now and need to get updated */}
          <p>
            <span>Prompt: </span>
            {props.tasks.story.drawingPrompt}
          </p>
        </Row>
        <p className="writing-sub-instruction">
          {modalInstructions.drawingSub}
        </p>
        <div className="upload">
          <h1>Upload</h1>
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
    hasDrawn: state.tasks.hasDrawn,
  }),
  {
    setHasDrawn: tasks.setHasDrawn,
  }
)(RenderDrawingSub);
