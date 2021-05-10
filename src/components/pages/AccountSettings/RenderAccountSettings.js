import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Input, Form } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import bc from 'bcryptjs';
import { getProfileData } from '../../../api';

function RenderAccountSettings({ user }) {
  const { authState } = useOktaAuth();
  const [userInfo, setUserInfo] = useState([]);
  const [form] = Form.useForm();
  const [unlock, setUnlock] = useState(true);
  const [selected, setSelected] = useState(user);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const formRef = useRef(null);

  //Grab the parents userInfo so we can validate their information (pin)
  useEffect(() => {
    getProfileData(authState).then(res => {
      setUserInfo(res);
    });
  }, [authState]);
  const parentInfo = userInfo.filter(user => user.type == 'Parent');

  //These functions handle's exiting the modal once it is activated
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // this function toggles the opacity and disabled prop of the editFormsAndButtonsContainer
  // allowing the user to see that they can now access the elements to update their account

  const handleUnlock = () => {
    setUnlock(!unlock);
  };

  // this function handles the pin form functionality
  const handleInput = e => {
    const input = e.target;
    //check if data was inputted if so move
    //the cursor to the next box
    if (input.nextElementSibling && input.value) {
      input.nextElementSibling.focus();
    }
  };

  const handleFinalInput = () => {
    formRef.current.submit();
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
        <Form name="verify" onFinish={handleFinalInput} ref={formRef}>
          <div className="pinFormInputs">
            <Input
              type="text"
              name="n1"
              maxlength="1"
              onChange={e => handleInput(e)}
            />
            <Input
              type="text"
              name="n2"
              maxlength="1"
              onChange={e => handleInput(e)}
            />
            <Input
              type="text"
              name="n3"
              maxlength="1"
              onChange={e => handleInput(e)}
            />
            <Input type="text" name="n4" maxlength="1" />
          </div>
        </Form>
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
