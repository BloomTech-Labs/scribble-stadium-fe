import React, { useEffect, useState } from 'react';
import { Header } from '../../common';
import { Col, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import Squadup from '../../../assets/images/Squadup.svg';



const RenderJoinTheSquad = props => {
  const { push } = useHistory();
  


  return (
    <>
      <Header title="JOIN THE SQUAD" />
      <div className="JoinSquadContainer">
        
          <Col className="joinSquad1" span={12}>
            <div className="imgContain">
            <img src={Squadup} alt="Blast Character Background" />
            </div>
          </Col>
          <Col className="joinSquad2" span={12}>
          <div className="imgContain">
          <img src={Squadup} alt="Blast Character Background" />
          </div>
          <Button className="sharePoints"type="primary">Share Points</Button>

          </Col>
          

        
      </div>
    </>
  );
};

export default RenderJoinTheSquad;