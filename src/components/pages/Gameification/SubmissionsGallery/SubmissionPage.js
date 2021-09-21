import React, { useEffect, useState } from 'react';
import SubmissionGroups from './SubmissionGroups';

export default function SubmissionPage() {
  // This will get all the submissions per episode
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Use temp data for now
    const tempSubmissions = [
      {
        ID: 1,
        storyID: 1,
      },
      {
        ID: 2,
        storyID: 2,
      },
    ];

    setSubmissions(tempSubmissions);
  }, []);

  return (
    <div id="submission-gallery">
      <div className="inner-container">
        <div className="heading">
          <h2>Submission Gallery</h2>
        </div>

        <div className="gallery">
          {submissions.map(submission => {
            return (
              <SubmissionGroups key={submission.ID} submission={submission} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
