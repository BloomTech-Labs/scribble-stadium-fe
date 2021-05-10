import React, { useState } from 'react';
import { connect } from 'react-redux';

const WeeklySubmissions = () => {
  return (
    <>
      <div className="weekly-sub-container">
        <span className="label">
          <h3 className="h3">Week</h3>
          <h3 className="h3"> View Prompt </h3>
        </span>
        <span className="submissions">
          <div className="sub-container">
            <div></div>
          </div>
          <div className="sub-container">
            <div className="gallery-submission"></div>
          </div>
        </span>
      </div>
    </>
  );
};

export default connect(state => ({
  week: state.week,
  drawing: state.drawing,
  writing: state.writing,
}))(WeeklySubmissions);
