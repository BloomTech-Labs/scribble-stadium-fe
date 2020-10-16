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

        <Col className="joinSquad1" xs={24} sm={12}>
          <div className="imgContain1">
            <img src={Squadup} alt="Blast Character Background" />
          </div>
        </Col>
        <Col className="joinSquad2"xs={24} sm ={12}>
          <div className="imgContain2">
            <img className='star'src={Squadup} alt="Blast Character Background" />
          </div>
          <div className="button">
          <Button selection="#eb7d5bbb" className="sharePoints" type="primary" size="large">Share Points</Button>
          </div>
        </Col>
      </div>
    </>
  );
};

export default RenderJoinTheSquad;