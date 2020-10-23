import React, { useEffect, useState } from 'react'; 
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import { Header } from '../../common';
import { Row, Col, InputNumber, Button, notification } from 'antd';
import { connect } from 'react-redux';
import { submitPoints } from '../../../api/index';

const PointShare = props => {
  const [totalPoints, setTotalPoints] = useState(100);
  const [storyOnePoints, setStoryOnePoints] = useState(0);
  const [storyTwoPoints, setStoryTwoPoints] = useState(0);
  const [illustrationOnePoints, setIllustrationOnePoints] = useState(0);
  const [illustrationTwoPoints, setIllustrationTwoPoints] = useState(0);
  const [teamPoints, setTeamPoints] = useState(null);

  const { authState } = useOktaAuth();

  const formSubmit = () => {
    if (totalPoints < 0) {
      notification.error({
        message: 'You may only allocate 100 points!',
      });
      return;
    }
    setTeamPoints([
      {
        WritingPoints: storyOnePoints,
        DrawingPoints: illustrationOnePoints,
        MemberID: props.child.memberId,
        SubmissionID: props.team.child1.SubmissionID,
      },
      {
        WritingPoints: storyTwoPoints,
        DrawingPoints: illustrationTwoPoints,
        MemberID: props.child.memberId,
        SubmissionID: props.team.child2.SubmissionID,
      },
    ]);
  };

  useEffect(() => {
    if (teamPoints) {
      submitPoints(authState, teamPoints);
    };
  }, [teamPoints, authState]);

  return (
    <>
      {/* Header requires countDown={true}  */}
      <Header
        title="SHARE POINTS"
        pointsRemaining={true}
        points={totalPoints}
      />
      <div className="point-share-container">
        <Row className="team-row">
          <Col className="squad-col" span={6}>
            <Row className="teammate-one">
              <img
                className="teammate-one-avatar"
                src={props.team.child1.AvatarURL}
                alt="Child Avatar"
              />
            </Row>
            <Row className="teammate-two">
              <img
                className="teammate-one-avatar"
                src={props.team.child2.AvatarURL}
                alt="Child Avatar"
              />
            </Row>
          </Col>
          <Col className="points-col" span={18}>
            <Row className="teammate-one-points">
              <div className="submission-container">
                <img className="submission" src={props.team.child1.ImgURL} width={100}alt="Submission" />
                <InputNumber
                  value={storyOnePoints}
                  min={0}
                  step={5}
                  onChange={value => {
                    setStoryOnePoints(value);
                    setTotalPoints(
                      100 -
                        (value +
                          storyTwoPoints +
                          illustrationOnePoints +
                          illustrationTwoPoints)
                    );
                  }}
                />
              </div>
              <div className="submission-container">
                <img className="submission" src={props.team.child1.Pages[0].PageURL} width={100} alt="Submission" />
                <InputNumber
                  value={illustrationOnePoints}
                  min={0}
                  step={5}
                  onChange={value => {
                    setIllustrationOnePoints(value);
                    setTotalPoints(
                      100 -
                        (value +
                          storyTwoPoints +
                          storyOnePoints +
                          illustrationTwoPoints)
                    );
                  }}
                />
              </div>
            </Row>
            <Row className="teammate-two-points">
              <div className="submission-container">
                <img className="submission" src={props.team.child2.ImgURL} width={100} alt="Submission" />
                <InputNumber
                  value={storyTwoPoints}
                  min={0}
                  step={5}
                  onChange={value => {
                    setStoryTwoPoints(value);
                    setTotalPoints(
                      100 -
                        (value +
                          storyOnePoints +
                          illustrationOnePoints +
                          illustrationTwoPoints)
                    );
                  }}
                />
              </div>
              <div className="submission-container">
                <img className="submission" src={props.team.child2.Pages[0].PageURL} width={100} alt="Submission" />
                <InputNumber
                  value={illustrationTwoPoints}
                  min={0}
                  step={5}
                  onChange={value => {
                    setIllustrationTwoPoints(value);
                    setTotalPoints(
                      100 -
                        (value +
                          storyTwoPoints +
                          illustrationOnePoints +
                          storyOnePoints)
                    );
                  }}
                />
              </div>
            </Row>
          </Col>
        </Row>
        <Button
          selection="#eb7d5bbb"
          className="match-up"
          type="primary"
          size="large"
          onClick={formSubmit}
        >
          Match Up!
        </Button>
      </div>
    </>
  );
};

export default connect(
  state => ({
    child: state.child,
    team: state.team,
  }),
  {}
)(PointShare);
