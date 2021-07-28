import React from 'react';
import { UpCircleFilled, DownCircleFilled } from '@ant-design/icons';

const DrawingPrompt = props => {
  const dpVisible = () => {
    props.setDrawingVisible(
      props.drawingVisible == 'invisible' ? 'visible' : 'invisible'
    );
    props.setDrawingArrows(
      props.drawingVisible == 'invisible' ? (
        <UpCircleFilled />
      ) : (
        <DownCircleFilled />
      )
    );
    props.setCloseDrawing('');

    props.setWritingVisible('invisible');
    props.setWritingArrows(<DownCircleFilled />);
    props.setCloseWriting(props.closeWriting == '' ? 'close-prompt' : '');
  };

  return (
    <div className="prompt-container">
      <div className={`prompt-border ${props.closeDrawing}`}>
        <div className="prompt-btn">
          <p onClick={dpVisible}>
            Prompt <span>{props.drawingArrows}</span>
          </p>
          <div className="viewable-prompts">
            <p className={`${props.drawingVisible}`}>{props.drawingprompt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawingPrompt;
