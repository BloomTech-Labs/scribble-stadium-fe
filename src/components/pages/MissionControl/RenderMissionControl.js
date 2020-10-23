import React, { useEffect, useState } from 'react';
import { Header } from '../../common';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { InstructionsModal } from '../../common';
import { getMissionControlText } from '../../../utils/helpers';
import draw_icon from '../../../assets/icons/draw_icon.svg';
import read_icon from '../../../assets/icons/read_icon.svg';
import write_icon from '../../../assets/icons/write_icon.svg';
import Checkbox from './Checkbox';

import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import { getChildTasks, getStory } from '../../../api';
import { tasks } from '../../../state/actions';

const RenderMissionControl = props => {
  //modal state
  const [instructionText, setInstructionText] = useState('');
  const [modalVisible, setModalVisible] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const { hasRead, hasWritten, hasDrawn } = props;

  const { push } = useHistory();
  const { authState } = useOktaAuth();

  useEffect(() => {
    if (props.tasks.id === null) {
      getChildTasks(authState, props.child.id, props.child.cohortId).then(
        res => {
          props.setTasks(res);
        }
      );

      getStory(authState, props.child.cohortId).then(res => {
        props.setSubmissionInformation(res);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setInstructionText(getMissionControlText(hasRead, hasDrawn, hasWritten));
    setShowButton(!hasRead || (hasWritten && hasDrawn));
  }, [hasRead, hasWritten, hasDrawn]);

  // Will be for when we are checking whether or not the child has completed a task
  function handleChecked(e) {
    return `checked=${e.target.checked}`;
  }

  // redirects the user to the pdf of the story
  const handleReadStory = e => {
    e.stopPropagation();
    push('/child/story');
  };
  const handleWrite = e => {
    e.stopPropagation();
    if (!hasWritten && hasRead) {
      push('/child/writing-sub');
    }
  };
  const handleDraw = e => {
    e.stopPropagation();
    if (!hasDrawn && hasRead) {
      push('/child/drawing-sub');
    }
  };

  return (
    <>
      <Header title="MISSION" />
      <InstructionsModal
        modalVisible={modalVisible}
        handleCancel={() => {
          setModalVisible(false);
        }}
        handleOk={() => {
          setModalVisible(false);
        }}
        instructions={instructionText}
        style={{ fontSize: '2rem' }}
        showOkButton={showButton}
      />
      <div className="mission-container">
        <Row className="main-row">
          <Col className="read" xs={24} sm={12} onClick={handleReadStory}>
            <Checkbox
              className="checking-box"
              defaultChecked={false}
              onChange={handleChecked}
              isCompleted={hasRead}
            />

            <Col className="image-and-text-container">
              <img src={read_icon} alt="reading icon" />
              <p className="mission-control-text">Read</p>
            </Col>
          </Col>
          <Col className="write-and-draw" xs={24} sm={12}>
            <Row className="write" onClick={handleWrite}>
              <Checkbox
                className="checking-box"
                defaultChecked={false}
                onChange={handleChecked}
                isCompleted={hasWritten}
              />

              <Col className="image-and-text-container">
                <img
                  className="WritingandDrawingIcon"
                  src={write_icon}
                  alt="writing icon"
                />
                <p className="mission-control-text">Write</p>
              </Col>
            </Row>
            <Row className="draw" onClick={handleDraw}>
              <Checkbox
                className="checking-box"
                defaultChecked={false}
                onChange={handleChecked}
                isCompleted={hasDrawn}
              />
              <Col className="image-and-text-container">
                <img
                  className="WritingandDrawingIcon"
                  src={draw_icon}
                  alt="drawing icon"
                />
                <p className="mission-control-text">Draw</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default connect(
  state => ({
    child: state.child,
    tasks: state.tasks,
    hasRead: state.tasks.hasRead,
    hasWritten: state.tasks.hasWritten,
    hasDrawn: state.tasks.hasDrawn,
  }),
  {
    setTasks: tasks.setTasks,
    setSubmissionInformation: tasks.setSubmissionInformation,
  }
)(RenderMissionControl);
