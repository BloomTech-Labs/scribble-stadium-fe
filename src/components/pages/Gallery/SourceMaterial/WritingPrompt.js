import React from 'react';
import { UpCircleFilled, DownCircleFilled } from '@ant-design/icons';

const WritingPrompt = props => {
  const wpVisible = () => {
    props.setWritingVisible(
      props.writingVisible == 'invisible' ? 'visible' : 'invisible'
    );
    props.setWritingArrows(
      props.writingVisible == 'invisible' ? (
        <UpCircleFilled />
      ) : (
        <DownCircleFilled />
      )
    );
    props.setCloseWriting('');

    props.setDrawingVisible('invisible');
    props.setDrawingArrows(<DownCircleFilled />);
    props.setCloseDrawing(props.closeDrawing == '' ? 'close-prompt' : '');
  };

  return (
    <div className="prompt-container">
      <div className={`prompt-border ${props.closeWriting}`}>
        <div className="prompt-btn">
          <p onClick={wpVisible}>
            Prompt <span>{props.writingArrows}</span>
          </p>
          <div className="viewable-prompts">
            <p className={`${props.writingVisible}`}>{props.writingprompt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingPrompt;
