import React, { useEffect, useState } from 'react';

import { Col, Modal, Row } from 'antd';

const SubmissionViewerModal = ({ content, showModal, closeModal }) => {
  const [selected, setSelected] = useState(null);
  const [pics, setPics] = useState(null);

  useEffect(() => {
    setPics(content.map(item => ({ src: item.ImgURL || item.PageURL })));
    setSelected(1);
  }, [content, showModal]);

  const imgSelect = i => {
    setSelected(prevIndex => {
      if (prevIndex === i) return null;
      return i;
    });
  };

  return (
    <Modal
      className="submission-viewer"
      closable={false}
      visible={showModal}
      style={{ minWidth: '90%', top: '5vh' }}
      cancelButtonProps={{ style: { display: 'none' } }}
      onOk={() => closeModal()}
      onCancel={() => closeModal()}
      okText="Done"
      maskClosable={true}
      keyboard={true}
    >
      {pics && (
        <>
          <Row className="gallery">
            {pics.map((pic, i) => {
              return (
                <Col
                  className={`img-col${i + 1 === selected ? ' selected' : ''}`}
                  onClick={() => imgSelect(i + 1)}
                >
                  <img {...pic} alt="" />
                </Col>
              );
            })}
          </Row>
          {selected && (
            <div className="selected-viewer">
              <img src={pics[selected - 1].src} alt="" />
            </div>
          )}
        </>
      )}
    </Modal>
  );
};

export default SubmissionViewerModal;
