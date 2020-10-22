import React, { useEffect } from 'react';
import { Header } from '../../common';
import { Row, Col, Card } from 'antd';
import pdfSample from '../../../assets/images/votingPage/pdfSample.svg';
import pdf2Sample from '../../../assets/images/votingPage/pdf2Sample.svg';
import { VotingForm } from '../../common';
import { useOktaAuth } from '@okta/okta-react';
import { getGameVotes } from '../../../api';

const RenderVotingPage = props => {
  const {authState} = useOktaAuth();

  useEffect(() => {
    console.log(props.squad[0], 'from render voting page');
    for (let key in props.squad){
      console.log(props.squad[key])
    }
    getGameVotes(authState, props.squad[0].SquadID, props.child.memberId).then(res => {
      console.log(res, 'from api call');
    });
  }, []);

  return (
    <>
      <Header title="VOTE FOR YOUR FAVORITE STORY" />

      <div className="voting-container">
        <Row className="main-row">
          <Col className="left-half" xs={24} sm={12}>
            <div className="image-and-check-container">
              <Card className="pdfCard">
                <img
                  className="WritingandDrawingIcon"
                  src={pdfSample}
                  alt="writing submission"
                />
              </Card>
            </div>
          </Col>

          <Col className="right-half" xs={24} sm={12}>
            <div className="image-and-check-container">
              <Card className="pdfCard">
                <img
                  className="WritingandDrawingIcon"
                  src={pdf2Sample}
                  alt="writing submission"
                />
              </Card>
            </div>
            <VotingForm />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default RenderVotingPage;
