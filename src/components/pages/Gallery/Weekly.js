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
    let vals = Object.keys(pages).map(function (key) {
      return pages[key];
    });
    setpageUrl(vals);
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
        <span className="">
          <h3 className="h3">Week {props.sprint}</h3>
        </span>
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
        <Carousel afterChange={onChange} arrows={true}>
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
