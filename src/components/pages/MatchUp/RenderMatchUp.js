import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Header } from '../../common';
import { Row, Col, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import FaceoffContent from './FaceoffContent';
import { InstructionsModal } from '../../common';
import { modalInstructions } from '../../../utils/helpers';
import { getGameVotes } from '../../../api';

const RenderMatchUp = props => {
  const { push } = useHistory();
  const [faceoffs, setFaceoffs] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);
  const { authState } = useOktaAuth();
  useEffect(() => {
    if (!props.canVote) {
      setModalVisible(false);
    }
    setFaceoffs(props.faceoffs);
  }, [props]);
  const handleVote = e => {
    e.preventDefault();
    push('/child/squad-vote');
  };
  const back2Dash = e => {
    e.preventDefault();
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
      {modalVisible && (
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
      )}
      <div className="matchup-container">
        <Row className="toprow">
          <Col className="green-box" xs={24} sm={13}>
            {faceoffs[0] && (
              <FaceoffContent
                custom_date={props.custom_date}
                content={faceoffs[0]}
                numberOfTimesVoted={props.numberOfTimesVoted}
                votesNeededToUnlock={3}
                dayNeededToUnlock={5}
                hourNeededToUnlock={18}
              />
            )}
          </Col>
          <Col className="red-box" xs={24} sm={11}>
            {faceoffs[1] && (
              <FaceoffContent
                custom_date={props.custom_date}
                content={faceoffs[1]}
                numberOfTimesVoted={props.numberOfTimesVoted}
                votesNeededToUnlock={3}
                dayNeededToUnlock={4}
                hourNeededToUnlock={6}
              />
            )}
          </Col>
        </Row>
        <Row className="bottomrow">
          <Col className="yellow-box" xs={24} sm={11}>
            {faceoffs[2] && (
              <FaceoffContent
                custom_date={props.custom_date}
                content={faceoffs[2]}
                numberOfTimesVoted={props.numberOfTimesVoted}
                votesNeededToUnlock={2}
                dayNeededToUnlock={4}
                hourNeededToUnlock={6}
              />
            )}
          </Col>
          <Col className="blue-box" xs={24} sm={13}>
            {faceoffs[3] && (
              <FaceoffContent
                custom_date={props.custom_date}
                content={faceoffs[3]}
                numberOfTimesVoted={props.numberOfTimesVoted}
                votesNeededToUnlock={1}
                dayNeededToUnlock={4}
                hourNeededToUnlock={6}
              />
            )}
          </Col>
        </Row>
        <Button className="back-button" onClick={back2Dash}>
          Back
        </Button>

        <Button
          className={'vote-button ' + (props.canVote ? '' : 'disabled')}
          onClick={handleVote}
          disabled={props.canVote ? false : true}
        >
          Vote!
        </Button>
      </div>
    </>
  );
};
export default RenderMatchUp;
