import React, { useState } from 'react';
import { connect } from 'react-redux';

const WeeklySubmissions = () => {
  return (
    <>
      <div>
        <h2 className="h3">Week</h2>
        <h3>View Prompt</h3>
      </div>
      <div className="weekly-sub-container">
        <div className="sub-container"></div>
        <div className="sub-container"></div>
      </div>
    </>
  );
};

export default connect(state => ({
  week: state.week,
  drawing: state.drawing,
  writing: state.writing,
}))(WeeklySubmissions);
