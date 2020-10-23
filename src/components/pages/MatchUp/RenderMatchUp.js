import React, { useState, useEffect } from 'react';
import { Header } from '../../common';
import { Row, Col, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import FaceoffContent from './FaceoffContent';


const RenderMatchUp = props => {
  const [faceoffs, setFaceoffs] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    setFaceoffs(props.squad);
  }, [props]);

  const handleVote = e => {
    e.preventDefault();
    push('/child/squad-vote');
  };

  return (
    <>
      <Header displayMenu={true} title="The Matchup" />
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

        <Button className="back-button">Back</Button>

        <Button className="vote-button" onClick={handleVote}>Vote!</Button>
      </div>
    </>
  );
};
export default RenderMatchUp;
