import React from 'react';
import './WordCountContainer.styles.css';
// Documentation: This component is to show the average endpoint for the specified child. This component is rendered & styled on the NewParentDashboard.

const WordCountContainer = () => {
  return (
    <div>
      <div className="word-count-container">
        <p className="word-count-title">
          Average Word Count: <span className="word-count-data">68 words</span>
        </p>
      </div>
    </div>
  );
};
export default WordCountContainer;
