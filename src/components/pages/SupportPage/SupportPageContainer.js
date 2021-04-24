import React, { useState } from 'react';
import { Header } from '../../common';
import ContactUs from './ContactUs';
import { ToastContainer, toast } from 'react-toastify';
import { Modal } from 'antd';
import 'react-toastify/dist/ReactToastify.min.css';

function SupportPageContainer(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const toastifySuccess = () => {
    console.log('works');
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
    });
  };
  return (
    <>
      <Header title="Support" displayMenu={true} />

      <Modal
        className="Contact-modal"
        visible={modalVisible}
        keyboard={true}
        width={'100%'}
        onCancel={() => setModalVisible(false)}
        zIndex={2000}
        cancelButtonProps={{ disabled: true }}
        //contact us via our social here
        footer="Information on Socials"
        closeIcon="X"
      >
        <p>Contact Us</p>
        <ContactUs
          success={toastifySuccess}
          visible={() => setModalVisible(false)}
        />
      </Modal>

      <div className="support-page-container">
        <button className="FAQ-button">
          <h3>FAQ</h3>
        </button>
        <button
          className="contact-button"
          onClick={() => setModalVisible(true)}
        >
          <h3>Contact Us</h3>
        </button>
      </div>
      <ToastContainer />
    </>
  );
}

export default SupportPageContainer;
