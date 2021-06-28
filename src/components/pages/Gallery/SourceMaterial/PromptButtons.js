import React from 'react';

const PromptButtons = props => {
  const wpVisibleClass = () => {
    props.setWritingVisible(
      props.writingVisible == 'invisible' ? 'visible' : 'invisible'
    );
    props.setDrawingVisible('invisible');
  };

  const dpVisibleClass = () => {
    props.setDrawingVisible(
      props.drawingVisible == 'invisible' ? 'visible' : 'invisible'
    );
    props.setWritingVisible('invisible');
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
        <p className={props.writingVisible}>{props.writingprompt}</p>
        <p className={props.drawingVisible}>{props.drawingprompt}</p>
      </div>
    </div>
  );
};

export default PromptButtons;
