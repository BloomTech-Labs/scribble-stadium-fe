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

import { useAuth0 } from '@auth0/auth0-react';
import { getChildTasks, getStory } from '../../../api';
import { tasks } from '../../../state/actions';

const RenderMissionControl = props => {
  //modal state
  const [instructionText, setInstructionText] = useState('');
  const [modalVisible, setModalVisible] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const { hasRead, hasWritten, hasDrawn } = props;

  const { push } = useHistory();
  const { user } = useAuth0();

  /**
   * On initial render, checks to see if tasks in state (id, hasRead, hasWritten, etc)
   * if not, calls getChildTasks -> getOrInitSubmission on backend
   *    (returns a childs task data)
   * calls getStory
   */
  useEffect(() => {
    if (props.tasks.id === null || props.devMode.isDevModeActive) {
      getChildTasks(user, props.child.id, props.child.cohortId).then(res => {
        props.setTasks(res);
      });

      getStory(user, props.child.cohortId).then(res => {
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

  // directs user to go in order; Read/Draw/Write
  const handleReadStory = e => {
    e.stopPropagation();
    push('/child/story');
  };
  const handleDraw = e => {
    e.stopPropagation();
    if (!hasDrawn && hasRead) {
      push('/child/drawing-sub');
    }
  };
  const handleWrite = e => {
    e.stopPropagation();
    if (!hasWritten && hasRead && hasDrawn) {
      push('/child/writing-sub');
    }
  };

  return (
    <>
      <Header title="MISSION CONTROL" displayMenu={true} />
      <InstructionsModal
        modalVisible={modalVisible}
        handleCancel={() => {
          setModalVisible(false);
        }}
        handleOk={() => {
          setModalVisible(false);
        }}
        instructions={instructionText}
        showOkButton={showButton}
      />
      <div className="mission-container">
        <Row className="main-row">
          <Col className="read" span={24} onClick={handleReadStory}>
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
          <Col className="write-and-draw" span={24}>
            <Row className={hasRead ? 'draw' : 'draw-not'} onClick={handleDraw}>
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
            <Row
              className={hasDrawn ? 'write' : 'write-not'}
              onClick={handleWrite}
            >
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
    devMode: state.devMode,
  }),
  {
    setTasks: tasks.setTasks,
    setSubmissionInformation: tasks.setSubmissionInformation,
  }
)(RenderMissionControl);
