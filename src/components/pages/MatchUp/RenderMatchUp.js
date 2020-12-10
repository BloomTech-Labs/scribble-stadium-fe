import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Header } from '../../common';
import { Row, Col, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import FaceoffContent from './FaceoffContent';
import { getGameVotes } from '../../../api';

const RenderMatchUp = props => {
  const [faceoffs, setFaceoffs] = useState([]);
  const [numberOfTimesVoted, setNumberOfTimesVoted] = useState(4);
  const { authState } = useOktaAuth();
  const { push } = useHistory();
  useEffect(() => {
    setFaceoffs(props.squad);
  }, [props]);
  const handleVote = e => {
    e.preventDefault();
    push('/child/squad-vote');
  };
  const backButton = e => {
    e.preventDefault();
    push('/child/dashboard');
  };
  useEffect(() => {
    getGameVotes(authState, props.squad[0].SquadID, props.child.memberId).then(
      res => {
        setNumberOfTimesVoted(res.length);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header displayMenu={true} title="The Matchup" />
      <div className="matchup-container">
        <Row className="toprow">
          <Col className="green-box" xs={24} sm={13}>
            {faceoffs[0] && (
              <FaceoffContent
                content={faceoffs[0]}
                numberOfTimesVoted={numberOfTimesVoted}
                votesNeededToUnlock={4}
              />
            )}
          </Col>
          <Col className="red-box" xs={24} sm={11}>
            {faceoffs[1] && (
              <FaceoffContent
                content={faceoffs[1]}
                numberOfTimesVoted={numberOfTimesVoted}
                votesNeededToUnlock={3}
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
              />
            )}
          </Col>
          <Col className="blue-box" xs={24} sm={13}>
            {faceoffs[3] && (
              <FaceoffContent
                content={faceoffs[3]}
                numberOfTimesVoted={numberOfTimesVoted}
                votesNeededToUnlock={1}
              />
            )}
          </Col>
        </Row>
        <footer>
          <Button className="back-button" onClick={backButton}>
            Back
          </Button>
          <Button className="vote-button" onClick={handleVote}>
            Vote!
          </Button>
        </footer>
      </div>
    </>
  );
};
export default RenderMatchUp;
