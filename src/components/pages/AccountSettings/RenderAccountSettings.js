import React, { useRef, useState } from 'react';
import { Modal, Button, Input, Form } from 'antd';
//import PinForm from './PinForm';

function RenderAccountSettings(props) {
  const [form] = Form.useForm();
  const [unlock, setUnlock] = useState(true);
  const [selected, setSelected] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const formRef = useRef(null);
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleUnlock = () => {
    setUnlock(!unlock);
  };
  const handleInput = e => {
    e.preventDefault();
    const input = e.target;
    //check if data was inputted if so move
    //the cursor to the next box
    if (input.nextElementSibling && input.value) {
      input.nextElementSibling.focus();
    }
  };

  return (
    <div className="accountSettingsContainer">
      <Modal
        visible={isModalVisible}
        okText="Unlock"
        onOk={handleOk}
        okType="default"
        onCancel={handleCancel}
        afterClose={handleUnlock}
        centered="true"
        width="25vw"
        bodyStyle={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h4>Enter Pin</h4>
        <form name="verify">
          <div className="pinFormInputs">
            <input
              type="text"
              name="n1"
              maxlength="1"
              onChange={e => handleInput(e)}
            />
            <input
              type="text"
              name="n2"
              maxlength="1"
              onChange={e => handleInput(e)}
            />
            <input
              type="text"
              name="n3"
              maxlength="1"
              onChange={e => handleInput(e)}
            />
            <input
              type="text"
              name="n4"
              maxlength="1"
              onChange={e => handleInput(e)}
            />
          </div>
        </form>
      </Modal>
      <div className="textAndButtonContainer">
        <div className="editText">
          <h3>Edit Account Settings</h3>
        </div>
        <div
          className="unlockButton"
          style={unlock ? null : { display: 'none' }}
        >
          <Button
            className="lockUnlockButton"
            onClick={() => setIsModalVisible(true)}
          >
            UNLOCK
          </Button>
        </div>

        <div className="lockButton" style={unlock ? { display: 'none' } : null}>
          <Button
            className="lockUnlockButton"
            onClick={() => setUnlock(!unlock)}
          >
            LOCK
          </Button>
        </div>
      </div>
      <div
        className="editFormsAndButtonsContainer"
        style={unlock ? { opacity: '.3' } : null}
      >
        <div className="placeholderInput">
          <input placeholder="INPUT"></input>
          <button>SUBMIT</button>
        </div>
        <div className="placeholderInput">
          <input placeholder="INPUT"></input>
          <button>SUBMIT</button>
        </div>
        <div className="placeholderInput">
          <input placeholder="INPUT"></input>
          <button>SUBMIT</button>
        </div>
        <div className="placeholderInput">
          <input placeholder="INPUT"></input>
          <button>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default RenderAccountSettings;
