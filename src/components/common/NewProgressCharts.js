import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';

//trouble getting the childs progress data into the progress charts from NewChildCard.js, TypeError cannot read undefined ( see '>>')

function NewProgressCharts(props) {
  /*const MockDataWins = 5;
  const MockDataLosses = 10;
  const MockDataTotalPoints = 309;
  let noChildren = false;
  
  >>if (props.props.parent.children.length < 1) {
    noChildren = true;
  }*/
  return (
    <div className="ProgressContainer">
      <div className="ProgressHeader">
        <h2>Progress Charts</h2>
      </div>
      <div className="ProgressBoxContainer">
        <div className="ProgressBox">
          {/*Child stats: Missions Completed, total words, total points
           */}
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
