import React, { useEffect } from 'react';
import { Header } from '../../common';
import { Col, Button } from 'antd';
// import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import Squadup from '../../../assets/images/Squadup.svg';
import wordbubble from '../../../assets/images/match_up_images/wordbubble.svg';
import wordBubbleright from '../../../assets/images/match_up_images/wordBubbleright.svg';
import {getChildTeam} from '../../../api';
import { connect } from 'react-redux';


const RenderJoinTheSquad = props => {
  // const { push } = useHistory();
  const {authState} = useOktaAuth();

  useEffect(() => {
    getChildTeam(authState, props.child.id).then(
      res => {
        console.log(res);
        props.setTeamSubmissions(res);
      }
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [authState]);


  return (
    <>
      <Header title="JOIN THE SQUAD" />
      <div className="JoinSquadContainer">
        <Col className="joinSquad1" xs={24} sm={12}>
          <div className="imgContain1">
            <p className="text">
              Hi! <br></br>My name is {props.child.name}.
            </p>
            <img className="wordBubble" src={wordbubble} alt="word bubble" />
            <img
              className="star"
              src={Squadup}
              alt="Blast Character Background"
            />
          </div>
        </Col>
        <Col className="joinSquad2" xs={24} sm={12}>
          <div className="imgContain2">
            <p className="text2">
              Hi! <br></br>My name is WhiteFox.
            </p>
            <img
              className="wordBubble2"
              src={wordBubbleright}
              alt="word bubble"
            />
            <img
              className="star"
              src={Squadup}
              alt="Blast Character Background"
            />
          </div>
          <div className="button">
            <Button
              selection="#eb7d5bbb"
              className="sharePoints"
              type="primary"
              size="large"
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
  }),
  {}
)(RenderJoinTheSquad);