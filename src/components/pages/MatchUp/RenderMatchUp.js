import React, { useState, useEffect } from 'react';
import { Header } from '../../common';
import { Row, Col, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import FaceoffContent from './FaceoffContent';
import { InstructionsModal } from '../../common';
import { modalInstructions } from '../../../utils/helpers';

const RenderMatchUp = props => {
  const { push } = useHistory();
  const [faceoffs, setFaceoffs] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    setFaceoffs(props.faceoffs);
  }, [props]);

  const handleVote = e => {
    e.preventDefault();
    push('/child/squad-vote');
  };

  const back2Dash = e => {
    push('/child/dashboard');
  };

  return (
    <>
      <Header
        displayMenu={true}
        title="The Matchup"
        versus={true}
        pointsToWin={true}
      />
      <QuestionCircleOutlined
        className="question-icon"
        onClick={() => {
          setModalVisible(true);
        }}
      />
      <InstructionsModal
        modalVisible={modalVisible}
        handleCancel={() => {
          setModalVisible(false);
        }}
        handleOk={() => {
          setModalVisible(false);
        }}
        instructions={modalInstructions.matchUp}
      />
      <div className="matchup-container">
        <Row className="toprow">
          <Col className="green-box" xs={24} sm={13}>
            {faceoffs[0] && <FaceoffContent content={faceoffs[0]} />}
          </Col>

          <Col className="red-box" xs={24} sm={11}>
            {faceoffs[1] && <FaceoffContent content={faceoffs[1]} />}
          </Col>
        </Row>
        <Row className="bottomrow">
          <Col className="yellow-box" xs={24} sm={11}>
            {faceoffs[2] && <FaceoffContent content={faceoffs[2]} />}
          </Col>

          <Col className="blue-box" xs={24} sm={13}>
            {faceoffs[3] && <FaceoffContent content={faceoffs[3]} />}
          </Col>
        </Row>

        <Button className="back-button" onClick={back2Dash}>
          Back
        </Button>

        <Button className="vote-button" onClick={handleVote}>
          Vote!
        </Button>
      </div>
    </>
  );
};
export default RenderMatchUp;
