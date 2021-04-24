import React, { useState } from 'react';
import { Header } from '../../common';
import ContactUs from './ContactUsForm';
import { ToastContainer } from 'react-toastify';
import { Modal } from 'antd';
import 'react-toastify/dist/ReactToastify.min.css';

function RenderSupportPage({ success }) {
  const [modalVisible, setModalVisible] = useState(false);
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
        footer={null}
        closeIcon="X"
      >
        <h3>Contact Us</h3>
        <ContactUs success={success} visible={() => setModalVisible(false)} />
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

export default RenderSupportPage;
