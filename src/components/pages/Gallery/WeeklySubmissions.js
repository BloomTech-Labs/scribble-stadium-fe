import React, { useState } from 'react';
import { connect } from 'react-redux';

const WeeklySubmissions = () => {
  return (
    <>
      <div>
        <h2>Week</h2>
        <h3>View Prompt</h3>
      </div>
      <img />
      <img />
    </>
  );
};

export default connect(state => ({
  week: state.week,
  drawing: state.drawing,
  writing: state.writing,
}))(WeeklySubmissions);
