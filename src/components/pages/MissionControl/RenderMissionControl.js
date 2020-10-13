import React, { useEffect } from 'react';
import { Header } from '../../common';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import draw_icon from '../../../assets/icons/draw_icon.svg';
import read_icon from '../../../assets/icons/read_icon.svg';
import write_icon from '../../../assets/icons/write_icon.svg';
import Checkbox from './Checkbox';

import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import { getChildTasks, getStory } from '../../../api';

const RenderMissionControl = props => {
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
  }, [authState]);

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
    push('/child/writing-sub');
  };
  const handleDraw = e => {
    e.stopPropagation();
    push('/child/drawing-sub');
  };

  return (
    <>
      <Header title="MISSION" />
      <div className="mission-container">
        <Row className="main-row">
          <Col className="read" xs={24} sm={12} onClick={handleReadStory}>
            <Checkbox
              className="checking-box"
              defaultChecked={false}
              onChange={handleChecked}
              isCompleted={props.tasks.hasRead}
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
                isCompleted={props.tasks.hasWritten}
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
                isCompleted={props.tasks.hasDrawn}
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
  }),
  {}
)(RenderMissionControl);
