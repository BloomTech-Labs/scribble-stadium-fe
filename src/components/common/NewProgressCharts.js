import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';

//trouble getting the childs progress data into the progress charts from NewChildCard.js, TypeError cannot read undefined ( see '>>')

function NewProgressCharts(props) {
  /*const MockDataMissions = 15;
  const MockDataTotalWords = 100;
  const MockDataTotalPoints = 309;
  let noChildren = false;
  
  >>if (props.props.parent.children.length < 1) {
    noChildren = true;
  }*/

  /*Child stats: Missions Completed, total words, total points
   */

  // FAKE DATA WILL NEED TO BE REPLACED WITH ACCURATE CHILD DATA
  //

  return (
    <div className="ProgressContainer">
      <div className="ProgressHeader">
        <h2>Progress Charts</h2>
      </div>
      <div className="ProgressBoxContainer">
        <div className="ProgressBox">
          {/*  PLAYER 1  */}
          <Row className="player">
            <div className="playerName">SubmarineBoy</div>
            <Col className="total-words">
              <Row className="stats"> 5 </Row>
              Total Words
            </Col>
            <Col className="missions">
              <Row className="stats">500</Row>
              Total Points
            </Col>
            <Col className="points">
              <Row className="stats">500</Row>
              Things Completed
            </Col>
          </Row>
          {/*  PLAYER 2  */}
          <Row className="player">
            <div className="playerName">Pinky Winky</div>
            <Col className="total-words">
              <Row className="stats">5</Row>
              Total Words
            </Col>
            <Col className="missions">
              <Row className="stats">5</Row>
              Missions Completed
            </Col>
            <Col className="points">
              <Row className="stats">500</Row>
              things Completed
            </Col>
          </Row>
          {/*  PLAYER 3  */}
          <Row className="player">
            <div className="playerName">Dad </div>
            <Col className="total-words">
              <Row className="stats">5 </Row>
              Total Words
            </Col>
            <Col className="missions">
              <Row className="stats">5</Row>
              Missions Completed
            </Col>
            <Col className="points">
              <Row className="stats">500</Row>
              things Completed
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(NewProgressCharts);
