import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { connect } from 'react-redux';
import Weekly from './Weekly';

const WeeklySubmissions = props => {
  const { authState } = useOktaAuth();
  let weeks = props.data.length;

  // Passing state to Week Card. Displaying Week card in descending order.
  return (
    <>
      {props.data.reverse().map((child, i) => {
        return (
          <div className="weekly-submissions">
            <span className="label">
              <h3 className="h3">Week {weeks--}</h3>
            </span>
            <Weekly
              key={i}
              sprint={child.SubmissionId}
              drawingprompt={child.DrawingPrompt}
              writingprompt={child.WritingPrompt}
              pages={child.Pages}
            />
          </div>
        );
      })}
    </>
  );
};

export default connect(state => ({
  child: state.child,
}))(WeeklySubmissions);
