import React, { useState } from 'react';
import { Modal, Carousel } from 'antd';


const CarouselContainer = props => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pic, setPic] = useState([]);


return (
    <>
        <div className="weekly-sub-container">
            <span className="label">
                <h3 className="h3">Week</h3>
                <h3 className="h3"> View Prompt </h3>
            </span>
            {/* filter based on child_id */}
            {data.filter(pic => pic.Name === 'Pinkie (Cohort1)').map(filteredPic => (
                <span className="submissions">
                    <div className="sub-container">
                        <img className="gallery-submission" src={filteredPic.DrawingUrl} alt="drawing"
                            onClick={() => showModal([filteredPic.DrawingUrl])} />
                    </div>

                    <div className="sub-container">
                        <img className="gallery-submission" src={filteredPic.WritingUrl} alt="writing"
                            onClick={() => showModal(["https://picsum.photos/800/800?random=1", "https://picsum.photos/800/800?random=2", "https://picsum.photos/800/800?random=3"])} />

                    </div>
                </span>
            ))}
            {/* modal pops up when an image is clicked. It contains a larger picture and carousel for multiple pics. */}
            <Modal visible={isModalVisible} centered onCancel={handleCancel} footer={null}
            >
                <Carousel afterChange={onChange}>
                    {pic.map(p => (
                        <div>
                            <img style={{ height: '70vh', objectFit: 'contain' }} alt="" src={p} />
                        </div>
                    ))}
                </Carousel>
            </Modal>

        </div>
    </>
);
};

export default CarouselContainer;