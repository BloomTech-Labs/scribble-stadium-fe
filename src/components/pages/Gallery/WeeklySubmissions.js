import React, { useState, useEffect } from 'react';
// import { submissions } from '../../../state/actions';
import { getGallerySubmissionsById } from '../../../api/index';
import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import { Modal, Carousel } from 'antd';

const WeeklySubmissions = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pic, setPic] = useState([]);
  const { authState } = useOktaAuth();
  const [data, setDataInfo] = useState([
    // {
    //   ID: null,
    //   WritingUrl: '',
    //   DrawingUrl: '',
    //   children_id: null,
    // },
  ]);

  // For Modal
  const showModal = link => {
    setIsModalVisible(true);
    setPic(link);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // For Carousel
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  // const contentStyle = {
  //   height: '160px',
  //   color: '#111',
  //   lineHeight: '160px',
  //   textAlign: 'center',
  //   background: '#fff',
  // };

  useEffect(() => {
    //Getting data from backend for gallery
    getGallerySubmissionsById(authState).then(res => {
      setDataInfo(res);

      console.log('this is res: ', res);
    });
  }, [authState]);

  return (
    <>
      <div className="weekly-sub-container">
        <span className="label">
          <h3 className="h3">Week</h3>
          <h3 className="h3"> View Prompt </h3>
        </span>

        {data
          .filter(pic => pic.Name === 'Pinkie (Cohort1)')
          .map(filteredPic => (
            <span className="submissions">
              <div className="sub-container">
                <img
                  className="gallery-submission"
                  src={filteredPic.DrawingUrl}
                  alt="drawing"
                  onClick={() => showModal([filteredPic.DrawingUrl])}
                />
              </div>

              {/* <div className="sub-container">
              <img className="gallery-submission" src={filteredPic.WritingUrl} alt="writing"
                onClick={() => showModal(filteredPic.WritingUrl)} />
            </div> */}

              <div className="sub-container">
                <img
                  className="gallery-submission"
                  src={filteredPic.WritingUrl}
                  alt="writing"
                  onClick={() =>
                    showModal([
                      'https://picsum.photos/800/800?random=1',
                      'https://picsum.photos/800/800?random=2',
                      'https://picsum.photos/800/800?random=3',
                    ])
                  }
                />
              </div>
            </span>
          ))}
        {/* modal pops up when an image is clicked. It contains a larger picture and carousel for multiple pics. */}
        <Modal
          visible={isModalVisible}
          centered
          onCancel={handleCancel}
          footer={null}
        >
          <Carousel afterChange={onChange}>
            {pic.map(p => (
              <div>
                <img
                  style={{ height: '70vh', objectFit: 'contain' }}
                  alt=""
                  src={p}
                />
              </div>
            ))}
          </Carousel>
        </Modal>
      </div>
    </>
  );
};

export default connect(state => ({
  child: state.child,
}))(WeeklySubmissions);
