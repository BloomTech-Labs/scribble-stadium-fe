import React, { useState } from 'react';
import { Modal } from 'antd';

export default function ChangePaymentInfoModal(props) {
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
      footer={null}
      bodyStyle={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <h1 className="payment-Title-Text">Edit Payment Information</h1>
      <form className="payment-Form">
        <label className="input-labels">
          <h4 className="cardholder-Name"> Cardholder Name </h4>
          <input className="name-field" type="text" name="Full Name" />
        </label>
        <label className="input-labels">
          <h4 className="billing-address">Billing Address</h4>
          <input className="address-field" type="text" name="Billing Address" />
        </label>
        <label className="input-labels">
          <h4 className="CCnum">Credit/Debit Card Number</h4>
          <input className="card-number" type="number" />
        </label>
        <label className="input-labels">
          <h4 className="CVV"> Security Code</h4>
          <input className="CVV" type="number" />
        </label>
        <button className="payment-submit">Submit</button>{' '}
      </form>
    </Modal>
  );
}
