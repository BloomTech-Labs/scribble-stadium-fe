import React, { useState } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.min.css';
import { Modal, Carousel } from 'antd';
import { DownCircleFilled } from '@ant-design/icons';
import WritingPrompt from '../StoryPrompt/SourceMaterial/WritingPrompt';
import DrawingPrompt from '../StoryPrompt/SourceMaterial/DrawingPrompt';
// import PromptButtons from './SourceMaterial/PromptButtons';
// import PDFViewer from './SourceMaterial/PDFViewer';

const Weekly = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pageUrl, setpageUrl] = useState([]);
  const [closeWriting, setCloseWriting] = useState('');
  const [closeDrawing, setCloseDrawing] = useState('');
  const [writingVisible, setWritingVisible] = useState('invisible');
  const [drawingVisible, setDrawingVisible] = useState('invisible');
  const [writingArrows, setWritingArrows] = useState(<DownCircleFilled />);
  const [drawingArrows, setDrawingArrows] = useState(<DownCircleFilled />);

  // Carousel Modal Functions
  const showModal = pages => {
    setIsModalVisible(true);
    let values = Object.keys(pages).map(function (key) {
      return pages[key];
    });
    setpageUrl(values);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="weekly-sub-container">
        <span className="submissions">
          <div className="sub-prompt">
            <div className="sub-container">
              <img
                className="gallery-submission"
                src={props.image}
                alt="writing submission"
                onClick={() => showModal(props.pages.Writing)}
              />
            </div>
            <WritingPrompt
              writingprompt={props.writingprompt}
              writingVisible={writingVisible}
              setWritingVisible={setWritingVisible}
              setDrawingVisible={setDrawingVisible}
              setCloseWriting={setCloseWriting}
              closeDrawing={closeDrawing}
              setCloseDrawing={setCloseDrawing}
              setWritingArrows={setWritingArrows}
              setDrawingArrows={setDrawingArrows}
              writingArrows={writingArrows}
            />
          </div>
          <div className="sub-prompt">
            <div className="sub-container">
              <img
                className="gallery-submission"
                src={props.image}
                alt="drawing submision"
                onClick={() => showModal(props.pages.Drawing)}
              />
            </div>
            <DrawingPrompt
              drawingprompt={props.drawingprompt}
              drawingVisible={drawingVisible}
              setDrawingVisible={setDrawingVisible}
              setWritingVisible={setWritingVisible}
              setCloseDrawing={setCloseDrawing}
              closeWriting={closeWriting}
              setCloseWriting={setCloseWriting}
              setDrawingArrows={setDrawingArrows}
              setWritingArrows={setWritingArrows}
              drawingArrows={drawingArrows}
            />
          </div>
          <Modal
            visible={isModalVisible}
            centered
            onCancel={handleCancel}
            footer={null}
          >
            <Carousel arrows={true}>
              {pageUrl.map(url => (
                <div key={pageUrl}>
                  <img
                    style={{ height: '65vh', objectFit: 'contain' }}
                    alt=""
                    src={url}
                  />
                </div>
              ))}
            </Carousel>
          </Modal>
        </span>
      </div>
    </>
  );
};

export default connect(state => ({
  child: state.child,
}))(Weekly);
