import React, { useState } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Modal, Carousel } from 'antd';
import PDFViewer from './SourceMaterial/PDFViewer';

const Weekly = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imgUrl, setImgUrl] = useState([]);
  const [isPdfVisible, setIsPdfVisible] = useState(false);

  // PDF Modal Functions
  const showPdfModal = () => {
    setIsPdfVisible(true);
  };

  const handlePdfOk = () => {
    setIsPdfVisible(false);
  };

  const handlePdfCancel = () => {
    setIsPdfVisible(false);
  };

  // Carousel Modal Functions
  const showModal = link => {
    setIsModalVisible(true);
    setImgUrl(link);
    console.log('clicked: ', link);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

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
            onOk={handlePdfOk}
            onCancel={handlePdfCancel}
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
              onClick={() => showModal([props.drawing])}
            />
          </div>
          <div className="sub-container">
            <img
              className="gallery-submission"
              src={props.writing}
              alt="writing submision"
              onClick={() => showModal([props.writing])}
            />
          </div>
        </span>
      </div>
      <Modal
        visible={isModalVisible}
        centered
        onCancel={handleCancel}
        footer={null}
      >
        <Carousel afterChange={onChange} arrows={true}>
          {imgUrl.map(url => (
            <div>
              <img
                style={{ height: '72vh', objectFit: 'contain' }}
                alt=""
                src={url}
              />
            </div>
          ))}
        </Carousel>
      </Modal>
    </>
  );
};

export default connect(state => ({
  child: state.child,
}))(Weekly);
