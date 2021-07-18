import React from 'react';
import { connect } from 'react-redux';
import Weekly from './Weekly';

const WeeklySubmissions = props => {
  console.log('weekly', props.data);

  // Passing state to Week Card. Displaying Week card in descending order.
  return (
    <>
      {props.data.reverse().map((child, i) => {
        return (
          <Weekly
            key={i}
            // childId={child.ID}
            sprint={child.SubmissionId}
            // galleryId={child.GalleryId}
            // sourcestory={child.sprintStory}
            drawingprompt={child.DrawingPrompt}
            writingprompt={child.WritingPrompt}
            pages={child.Pages}
          />
        );
      })}
    </>
  );
};

export default connect(state => ({
  child: state.child,
}))(WeeklySubmissions);
