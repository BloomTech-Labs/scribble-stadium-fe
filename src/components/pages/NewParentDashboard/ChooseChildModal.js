//** Import Modules */
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from 'antd';
import { refresh } from 'less';
export default function ChooseChildModal(props) {
  // Get the data to display
  const { childrenAccounts, handleCharacterClick } = props;

  // // Timeout timer before the modal is removed from the DOM(in ms)
  // const removeModalTimer = 1000;
  const [modalVisible, setModalVisible] = useState(false);
  // Function to close the modal
  const closeModal = () => {
    gsap.to('.modal-container', { y: '100vh', duration: 0.5 });
    gsap.to('#notification-modal', { opacity: 0, duration: 0.5, delay: 0.5 });
    gsap.to('#notification-modal', {
      display: 'none',
      duration: 0.1,
      delay: 1,
    });

    // setTimeout(() => {
    //   props.disableModalWindow();
    // }, removeModalTimer);
  };
  // Add some animation effects when component loads
  useEffect(() => {
    gsap.to('#notification-modal', {
      display: 'flex',
      duration: 0.1,
    });
    gsap.to('#notification-modal', { opacity: 1, duration: 0.5, delay: 0.5 });
    gsap.to('.modal-container', { y: 0, duration: 0.5, delay: 1 });
  });

  return (
    <div id="notification-modal">
      <div className="modal-container">
        <div className="modal-content" style={{ width: '70%' }}>
          <nav>
            <Button
              className="exit-button"
              onClick={evt => {
                closeModal(evt);
                setModalVisible(false);
              }}
            >
              X
            </Button>
          </nav>
          <h2
            style={{
              textAlign: 'center',
              fontSize: '3rem',
              fontStyle: 'italic',
            }}
          >
            CHOOSE CHILD
          </h2>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            {childrenAccounts.map(child => {
              const { ID, Name, AvatarURL } = child;
              return (
                <div
                  key={`${Name}`}
                  style={{ display: 'flexbox', flexDirection: 'column' }}
                >
                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '100%',
                      width: '111.54px',
                      height: '111.54px',
                      display: 'flex',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      justifyContent: 'center',
                    }}
                    onClick={evt => {
                      handleCharacterClick(evt, ID);
                      closeModal();
                    }}
                  >
                    <img src={AvatarURL} alt={`child ${Name} hero image`} />
                  </div>
                  <span style={{ fontSize: '1.2rem' }}>
                    {Name.toUpperCase()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
