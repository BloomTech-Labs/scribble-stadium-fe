import React, { useState } from 'react';

const PromptButtons = () => {
  const [writingVisible, setWritingVisible] = useState('invisible');
  const [drawingVisible, setDrawingVisible] = useState('invisible');

  const wpVisibleClass = () => {
    setWritingVisible(writingVisible == 'invisible' ? 'visible' : 'invisible');
    setDrawingVisible('invisible');
  };

  const dpVisibleClass = () => {
    setDrawingVisible(drawingVisible == 'invisible' ? 'visible' : 'invisible');
    setWritingVisible('invisible');
  };

  return (
    <div className="prompt-button-container">
      <div className="prompt-buttons">
        <button className="prompt-btn" onClick={wpVisibleClass}>
          Writing Prompt
        </button>
        <button className="prompt-btn" onClick={dpVisibleClass}>
          Drawing Prompt
        </button>
      </div>
      <div className="viewable-prompts">
        <p className={writingVisible}>{`This week's writing assignment`}</p>
        <p className={drawingVisible}>{`This week's drawing assignment`}</p>
      </div>
    </div>
  );
};

export default PromptButtons;
