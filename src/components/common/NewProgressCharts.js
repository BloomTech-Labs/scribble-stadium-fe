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
          <Row className="player">
            {' '}
            <div className="playerName">SubmarineBoy</div>
            <Col className="week-num">
              <Col className="stats"> 5 </Col>
              Weeks completed
            </Col>
            <Col className="missions">
              <Col className="stats">5</Col>
              Missions Completed
            </Col>
            <Col className="points">
              <Col className="stats"> 50 </Col>
              Total Points
            </Col>
          </Row>

          <Row className="player">
            {' '}
            <div className="playerName">Pinky Winky</div>
            <Col className="week-num">
              <Col className="stats">5</Col>
              Weeks completed
            </Col>
            <Col className="missions">
              <Col className="stats">5</Col>
              Missions Completed
            </Col>
          </Row>

          <Row className="player">
            <div className="playerName">Dad </div>
            <Col className="week-num">
              <Col className="stats">5 </Col>
              Weeks completed
            </Col>
            <Col className="missions">
              <Col className="stats">5</Col>
              Missions Completed
            </Col>
            `
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
