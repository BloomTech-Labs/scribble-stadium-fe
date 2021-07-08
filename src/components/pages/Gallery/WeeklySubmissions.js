import React from 'react';
import { submissions } from '../../../state/actions';
import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import Weekly from './Weekly';

const WeeklySubmissions = (props) => {
  const { authState } = useOktaAuth();
  
  console.log(`this is props`, props.data);

  // Passing state to Week Card. Displaying Week card in descending order.
  return (
    <>
      {props.data.reverse().map((child, i) => {
        return (
          <Weekly key={i}
            // childId={child.ID}
            sprint={child.sprint}
            // galleryId={child.GalleryId}
            sourcestory={child.sprintStory}
            drawingprompt={child.DrawingPrompt}
            writingprompt={child.WritingPrompt}
            writing={child.WritingUrl}
            pagenum={child.PageNum}
            drawing={child.DrawingUrl}
           />)})}
    </>
  );
};

export default connect(state => ({
  child: state.child,
}))(WeeklySubmissions);