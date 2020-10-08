import React, { useEffect } from 'react';
import { Header } from '../../common';
import { Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';


import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';


const RenderJoinTheSquad = props => {
  const { push } = useHistory();
  const { authState } = useOktaAuth();

  useEffect(() => {
    if (props.tasks.id === null) {
      getChildTasks(authState, props.child.id, 10).then(res => {
        props.setTasks(res);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState]);



 
 

  return (
    <>
      <Header title="JOIN THE SQUAD" />
      <div className="JoinSquadContainer">
        <Row className="main-row">
        <p>Hello</p>
        </Row>
      </div>
    </>
  );
};

export default connect(
  state => ({
    child: state.child,
    tasks: state.tasks,
  }),
  {}
)(RenderJoinTheSquad);