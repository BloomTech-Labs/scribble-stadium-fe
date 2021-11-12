import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import { Header } from '../../common';
import ChildFooter from '../../common/ChildFooter';
import FaceoffContent from './FaceoffContent';
import { InstructionsModal } from '../../common';
import { modalInstructions } from '../../../utils/helpers';

const RenderMatchUp = props => {
  const { push } = useHistory();
  const [faceoffs, setFaceoffs] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);

  const goToPointShare = () => {
    push('/child/point-share');
  };

  useEffect(() => {
    if (props.child.VotesRemaining <= 9) {
      setModalVisible(false);
    }
    setFaceoffs(props.faceoffs);
  }, [props]);
  const handleVote = e => {
    e.preventDefault();
    push('/child/match-up/squad-vote');
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
        votesRemaining={true}
      />
      {/* REMOVE ONCE DESIGN WORK BEGINS - START */}
      <div className={'under-construction'}>
        <div className={'rectangle-126'} style={{ margin: '3rem' }}>
          <h1>Coming Soon</h1>
        </div>
        <div className={'under-construction-content'}>
          <h1>Under Construction!</h1>
          <h1>Match Up UI Coming Soon!</h1>
        </div>
        <Button
          style={{ margin: '1rem' }}
          className="back-btn"
          onClick={goToPointShare}
        >
          Next to Point Share
        </Button>
      </div>
      {/* REMOVE ONCE DESIGN WORK BEGINS - END */}
      {/* <QuestionCircleOutlined
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
      )} */}
      {/* <div className="matchup-container">
        <Row className="toprow">
          <Col className="green-box" xs={24} sm={13}>
            {faceoffs[0] && (
              <FaceoffContent
                custom_date={props.custom_date}
                content={faceoffs[0]}
                backgroundColor={'#C9E952'}
                votesRemaining={props.votesRemaining}
                votesNeededToUnlock={7}
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
                backgroundColor={'#e97451'}
                votesRemaining={props.votesRemaining}
                votesNeededToUnlock={7}
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
                backgroundColor={'#ffde3b'}
                votesRemaining={props.votesRemaining}
                votesNeededToUnlock={8}
              />
            )}
          </Col>
          <Col className="blue-box" xs={24} sm={13}>
            {faceoffs[3] && (
              <FaceoffContent
                custom_date={props.custom_date}
                content={faceoffs[3]}
                backgroundColor={'#438eac'}
                votesRemaining={props.votesRemaining}
                votesNeededToUnlock={9}
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
          <br />
          {props.VotesRemaining} votes left
        </Button>
      </div> */}
      <ChildFooter />
    </>
  );
};

export default RenderMatchUp;
