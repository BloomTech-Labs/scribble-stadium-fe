import React, { useState } from 'react';
import Weekly from './Weekly';
import { Modal, Carousel } from 'antd';

const CarouselContainer = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pic, setPic] = useState([]);

  const showModal = link => {
    setIsModalVisible(true);
    setPic(link);
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
      <Modal
        visible={isModalVisible}
        centered
        onCancel={handleCancel}
        footer={null}
      >
        <Carousel afterChange={onChange} arrows={true}>
          {props.writing.map(p => (
            <div>
              <img
                style={{ height: '75vh', objectFit: 'contain' }}
                alt=""
                src={p}
              />
            </div>
          ))}
        </Carousel>
      </Modal>
    </>
  );
};

export default CarouselContainer;
