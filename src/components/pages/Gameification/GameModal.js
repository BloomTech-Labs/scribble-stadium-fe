//** Import Modules */
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

export default function GameModal(props) {
  // Get the data to display
  const { title, description, buttonTxt } = props.modalData;

  // Timeout timer before the modal is removed from the DOM(in ms)
  const removeModalTimer = 1000;

  // Functio to close the modal
  const closeModal = () => {
    gsap.to('.modal-container', { y: '100vh', duration: 0.5 });
    gsap.to('#notification-modal', { opacity: 0, duration: 0.5, delay: 0.5 });
    gsap.to('#notification-modal', {
      display: 'none',
      duration: 0.1,
      delay: 1,
    });

    setTimeout(() => {
      props.disableModalWindow();
    }, removeModalTimer);
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
        <div className="modal-content">
          <h3>{title}</h3>

          <p>{description}</p>

          <button onClick={closeModal}>{buttonTxt}</button>
        </div>
      </div>
    </div>
  );
}
