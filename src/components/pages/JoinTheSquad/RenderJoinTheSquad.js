import React, { useEffect, useState } from 'react';
import { Header } from '../../common';
import { Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';


const RenderJoinTheSquad = props => {
  const { push } = useHistory();
  


  return (
    <>
      <Header title="JOIN THE SQUAD" />
      <div className="JoinSquadContainer">
        <Row className="main-row">
          <p>HHhjjjsjjsajdjsafjsajfsafadsfjsafa</p>
          <h1>{props.child.name}</h1>

        </Row>
      </div>
    </>
  );
};

export default RenderJoinTheSquad;