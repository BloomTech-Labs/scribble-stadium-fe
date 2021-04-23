import React, { useState } from 'react';
import { Header } from '../../common';
import { Modal } from 'antd';

function SupportPageContainer(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Header title="Support" displayMenu={true} />

      <Modal
        className="Contact-modal"
        visible={modalVisible}
        keyboard={true}
        width={'70%'}
        onCancel={() => setModalVisible(false)}
        zIndex={2000}
        cancelButtonProps={{ disabled: true }}
        //contact us via our social here
        footer="Information on Socials"
        closeIcon="X"
      >
        <p>Contact Us</p>
        {/* <ContactForm /> */}
      </Modal>

      <div className="container">
        <button className="FAQ">
          <h3>FAQ</h3>
        </button>
        <button className="contact" onClick={() => setModalVisible(true)}>
          <h3>Contact Us</h3>
        </button>
      </div>
    </>
  );
}

export default SupportPageContainer;
