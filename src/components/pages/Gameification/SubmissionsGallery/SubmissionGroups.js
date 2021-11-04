import React, { useEffect, useState } from 'react';

//** Temp Assets */
import tempStory from '../../../../assets/images/gamemodeimg/placeholder-story.png';
import SubmissionWriting from './SubmissionWriting';

export default function SubmissionGroups(props) {
  // Get the props
  const { submission } = props;

  // This state will hold ALL the story submissions
  const [writings, setWritings] = useState([]);

  // This state will hold ALL drawing submissions
  const [drawings, setDrawings] = useState([]);

  useEffect(() => {
    // For now, just load temp data
    const tempWritings = [
      {
        ID: 1,
        URL: tempStory,
      },
    ];

    const tempDrawings = [
      {
        drawingID: 1,
        drawingImg: tempStory,
      },
    ];

    setWritings(tempWritings);
    setDrawings(tempDrawings);
  }, []);

  return (
    <div className="submission-group">
      <h3>Story Name - Episode {submission.ID}</h3>

      {writings.map(writing => {
        return <SubmissionWriting key={writing.ID} writing={writing} />;
      })}
    </div>
  );
}
