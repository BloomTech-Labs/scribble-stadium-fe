import React, { useState } from 'react';
import { Header } from '../../common';
import { Modal, Button } from 'antd';

function SupportPageContainer(props) {
  const [modalVisible, setModalVisible] = useState(false);

  // const SupportModal = props => {
  //   // const {push} = useHistory();
  //   const {
  //     modalVisible,
  //     style,
  //     instructions,
  //     showOkButton = false,
  //     handleCancel,
  //     handleOk,
  //   } = props;

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
        //onOk={handleOk}
        cancelButtonProps={{ disabled: true }}
        footer="Submit"
        closeIcon="X"
      >
        <p>Contact Us</p>

        {/* {showOkButton && (
          <Button onClick={handleCancel} className="send-button">
            I Accept!!!
          </Button>
        )} */}
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
