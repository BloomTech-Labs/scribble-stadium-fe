import React, { useEffect } from 'react';
import { Header } from '../../common';
import { Col, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Squadup from '../../../assets/images/Squadup.svg';
import wordBubble from '../../../assets/images/match_up_images/wordbubble.svg';
import wordBubbleright from '../../../assets/images/match_up_images/wordBubbleright.svg';
import { getChildTeam } from '../../../api';
import { connect } from 'react-redux';
import { child } from '../../../state/actions';

const RenderJoinTheSquad = props => {
  const { push } = useHistory();
  const { user } = useAuth0();

  useEffect(() => {
    getChildTeam(user, props.child.id).then(res => {
      props.setMemberId(res[props.child.id]);
      props.setTeamSubmissions(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const teamVote = e => {
    push('/child/point-share');
  };
  const home = e => {
    push('/child/dashboard');
  };

  return (
    <>
      <Header title="JOIN THE SQUAD" displayMenu={true} />
      <div className="JoinSquadContainer">
        <Col className="joinSquad1" xs={24} sm={12}>
          <div className="imgContain1">
            <p className="text">
              Hi! <br></br>My name is {props.team.child1.ChildName}!
            </p>
            <img
              className="wordBubble"
              src={wordBubbleright}
              alt="word bubble"
            />
            <img
              className="star"
              src={Squadup}
              alt="Blast Character Background"
            />

            <img
              className="child1-avatar"
              src={props.team.child1.AvatarURL}
              alt="Child 1 Avatar"
            />
          </div>
          <Button className="back-button" onClick={home}>
            Back
          </Button>
        </Col>
        <Col className="joinSquad2" xs={24} sm={12}>
          <div className="imgContain2">
            <p className="text2">
              Hi! <br></br>My name is {props.team.child2.ChildName}!
            </p>
            <img className="wordBubble2" src={wordBubble} alt="word bubble" />
            <img
              className="star"
              src={Squadup}
              alt="Blast Character Background"
            />
            <img
              className="child2-avatar"
              src={props.team.child2.AvatarURL}
              alt="User's Avatar"
            />
          </div>
          <div className="button">
            <Button
              selection="#eb7d5bbb"
              className="sharePoints"
              type="primary"
              size="large"
              onClick={teamVote}
            >
              Share Points
            </Button>
          </div>
        </Col>
      </div>
    </>
  );
};

export default connect(
  state => ({
    team: state.team,
    child: state.child,
  }),
  {
    setMemberId: child.setMemberId,
  }
)(RenderJoinTheSquad);
