import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import PDFViewer from './SourceMaterial/PDFViewer';
import { connect } from 'react-redux';

const Weekly = props => {
  const [isPdfVisible, setIsPdfVisible] = useState(false);

  const showPdfModal = () => {
    setIsPdfVisible(true);
  };

  const handleOk = () => {
    setIsPdfVisible(false);
  };

  const handleCancel = () => {
    setIsPdfVisible(false);
  };

  return (
    <>
      <div className="weekly-sub-container">
        <span className="label">
          <h3 className="h3">Week {props.sprint}</h3>
          <h3 className="h3" onClick={showPdfModal}>
            View Prompt
          </h3>
          <Modal
            visible={isPdfVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <PDFViewer
              drawingprompt={props.drawingprompt}
              writingprompt={props.writingprompt}
            />
          </Modal>
        </span>
        <span className="submissions">
          <div className="sub-container">
            <img
              className="gallery-submission"
              src={props.drawing}
              alt="drawing submision"
            />
          </div>
          <div className="sub-container">
            <img
              className="gallery-submission"
              src={props.writing}
              alt="writing submision"
            />
          </div>
        </span>
      </div>
    </>
  );
};

export default connect(state => ({
  child: state.child,
}))(Weekly);
