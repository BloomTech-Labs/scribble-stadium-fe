import React, { useState } from 'react';
import { Modal } from 'antd';

export default function ChangeCCinfoModal(props) {
  const [visible, setVisible] = useState(false);
  const handleExit = () => {
    props.setVisible(false);
    setVisible(true);
  };

  const cancel = () => {
    props.setVisible(false);
  };

  return (
    <Modal
      className="CCinfoModal"
      visible={props.visible}
      width={'99%'}
      onCancel={cancel}
      onOk={handleExit}
      bodyStyle={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <h1 className="Title-Text">Edit Payment Information</h1>
      <form className="payment-Form">
        <label>
          <h3 className="cardholder-Name"> Cardholder Name </h3>
        </label>
        <input className="name-field" type="text" name="Full Name" />
        <h3 className="billing-address">Billing Address</h3>
        <input className="address-field" type="text" name="Billing Address" />
        <h3 className="CCnum">Credit/Debit Card Number</h3>
        <input className="card-number" type="number" />
      </form>
    </Modal>
  );
}
