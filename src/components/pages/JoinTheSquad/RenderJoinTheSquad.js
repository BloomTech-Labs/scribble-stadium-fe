import React, { useEffect, useState } from 'react';
import { Header } from '../../common';
import { Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';


const RenderJoinTheSquad = props => {
  const { push } = useHistory();
  const { authState } = useOktaAuth();
  const [userInfo, setUserInfo] = useState([]);
  

  return (
    <>
      <Header title="JOIN THE SQUAD" />
      <div className="JoinSquadContainer">
        <Row className="main-row">
         <p>HHhjjjsjjsajdjsafjsajfsafadsfjsafa</p>
         
        
        </Row>
      </div>
    </>
  );
};

export default RenderJoinTheSquad;