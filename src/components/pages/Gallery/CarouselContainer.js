import React, { useState, useEffect } from 'react';
import { getGallerySubmissionsById } from '../../../api/index';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import { Modal, Carousel } from 'antd';


const CarouselContainer = props => {
    const { authState } = useOktaAuth();
    const [data, setDataInfo] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pic, setPic] = useState([]);

    useEffect(() => {
        //Getting data from backend for gallery
        getGallerySubmissionsById(authState).then(res => {
            setDataInfo(res);

            console.log('this is res: ', res);
        });
    }, [authState]);

    const showModal = (link) => {
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
            <div className="weekly-sub-container">
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
                    <Carousel afterChange={onChange} arrows>
                        {pic.map(p => (
                            <div>
                                <img  alt="" src={p} />
                            </div>
                        ))}
                    </Carousel>
                </Modal>

            </div>
        </>
    );
};

export default CarouselContainer;