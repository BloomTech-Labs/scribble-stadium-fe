import React from 'react'
import { Modal, Button } from 'antd';

const optionModal = () => {
  const state = { visible: true };

  const showModal = () => {
    this.setState({
      visible: true,
    });
  };

  const handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  const handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  
    return (
      <>
        <Modal
          title="Basic Modal" 
          onOk={this.handleOk}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }


export default optionModal;