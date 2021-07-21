import React, { useState } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Modal, Carousel } from 'antd';

const Weekly = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pageUrl, setpageUrl] = useState([]);

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
          <div className="sub-container">
            <img
              className="gallery-submission"
              src={props.pages.Drawing.Page1}
              alt="drawing submision"
              onClick={() => showModal(props.pages.Drawing)}
            />
          </div>
          <div className="sub-container">
            <img
              className="gallery-submission"
              src={props.pages.Writing.Page1}
              alt="writing submision"
              onClick={() => showModal(props.pages.Writing)}
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
        <Carousel arrows={true}>
          {pageUrl.map(url => (
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
