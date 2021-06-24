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
      {/* <div className="weekly-sub-container">

                {data.filter(pic => pic.Name === 'Pinkie (Cohort1)').map(filteredPic => (
                    <span className="submissions">
                        <div className="sub-container">
                            <img className="gallery-submission" src={filteredPic.DrawingUrl} alt="drawing"
                                onClick={() => showModal([filteredPic.DrawingUrl])} />
                        </div>

                        <div className="sub-container">
                            <img className="gallery-submission" src={filteredPic.WritingUrl} alt="writing"
                                onClick={() => showModal([filteredPic.WritingUrl, "https://picsum.photos/800/800?random=2", "https://picsum.photos/800/800?random=3"])} />
                        </div>
                    </span>
                ))} */}

      <Modal
        visible={isModalVisible}
        centered
        onCancel={handleCancel}
        footer={null}
      >
        <Carousel afterChange={onChange} arrows={true}>
          {pic.map(p => (
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
