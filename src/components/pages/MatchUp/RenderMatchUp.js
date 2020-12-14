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
  const [numberOfTimesVoted, setNumberOfTimesVoted] = useState(4);
  const { authState } = useOktaAuth();
  useEffect(() => {
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

  useEffect(() => {
    getGameVotes(
      authState,
      props.faceoffs[0].SquadID,
      props.child.memberId
    ).then(res => {
      setNumberOfTimesVoted(res.length);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
            {faceoffs[0] && (
              <FaceoffContent
                content={faceoffs[0]}
                numberOfTimesVoted={numberOfTimesVoted}
                votesNeededToUnlock={3}
                dayNeededToUnlock={5}
                hourNeededToUnlock={18}
              />
            )}
          </Col>
          <Col className="red-box" xs={24} sm={11}>
            {faceoffs[1] && (
              <FaceoffContent
                content={faceoffs[1]}
                numberOfTimesVoted={numberOfTimesVoted}
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
                content={faceoffs[2]}
                numberOfTimesVoted={numberOfTimesVoted}
                votesNeededToUnlock={2}
                dayNeededToUnlock={4}
                hourNeededToUnlock={6}
              />
            )}
          </Col>
          <Col className="blue-box" xs={24} sm={13}>
            {faceoffs[3] && (
              <FaceoffContent
                content={faceoffs[3]}
                numberOfTimesVoted={numberOfTimesVoted}
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

        <Button className="vote-button" onClick={handleVote}>
          Vote!
        </Button>
      </div>
    </>
  );
};
export default RenderMatchUp;
