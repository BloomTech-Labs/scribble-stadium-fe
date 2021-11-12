import React from 'react';

export default function SubmissionWriting(props) {
  const { writing } = props;

  return (
    <div className="submission-story">
      <div className="thumbnail-frame" role="button">
        <div
          className="thumbnail"
          style={{ backgroundImage: `url(${writing.URL})` }}
        ></div>
      </div>
    </div>
  );
}
