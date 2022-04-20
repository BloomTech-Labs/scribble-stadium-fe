import React from 'react';
// The following code was commented out to prevent warnings during compilation.
// import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import Weekly from './Weekly';

const WeeklySubmissions = props => {
  // const { user, isAuthenticated } = useAuth0();
  let weeks = props.data.length;

  // Passing state to Week Card. Displaying Week card in descending order.
  return (
    <>
      {props.data.reverse().map((child, i) => {
        return (
          <div className="weekly-submissions" key={i}>
            <span className="label">
              <h3 className="h3">Week {weeks--}</h3>
            </span>
            <Weekly
              sprint={child.ID}
              image={child.image.URL}
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
