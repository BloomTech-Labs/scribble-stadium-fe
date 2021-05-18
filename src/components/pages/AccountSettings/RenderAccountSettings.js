import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Input, Form } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import bc from 'bcryptjs';
import { getProfileData } from '../../../api';
import PinInput from 'react-pin-input';
import AccountSettingsForm from '../../common/AccountSettingsForm.js';

function RenderAccountSettings() {
  const { authState } = useOktaAuth();
  const [form] = Form.useForm();
  const formRef = useRef(null);
  const [unlock, setUnlock] = useState(true);
  const [error, setError] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  //Grab the parents userInfo so we can validate their information (pin)
  useEffect(() => {
    getProfileData(authState).then(res => {
      res.map(user => {
        if (user.type == 'Parent') {
          setUserInfo(user);
        }
      });
    });
  }, [authState]);

  //These functions handle's exiting the modal once it is activated
  const handleOk = () => {
    setIsModalVisible(false);
    form.resetFields();
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // this function runs once the user has inputted the correct pin.
  //It toggles the opacity and disabled prop of the editFormsAndButtonsContainer
  // allowing the user to see that they can now access the elements to update their account

  const onFinish = values => {
    setUnlock(!unlock);
    form.resetFields();
  };

  return (
    <div className="accountSettingsContainer">
      <Modal
        visible={isModalVisible}
        okText="Unlock"
        onOk={unlock ? null : handleOk}
        okType="default"
        onCancel={handleCancel}
        afterClose={form.resetFields()}
        centered="true"
        width="25vw"
        bodyStyle={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h4>Enter Pin</h4>
        <Form name="verify" form={form} onFinish={onFinish} ref={formRef}>
          <PinInput
            length={4}
            initialValue=""
            onChange={(value, index) => {}}
            type="numeric"
            inputMode="number"
            style={{ padding: '10px', borderRadius: '20px' }}
            inputStyle={{ borderRadius: '15px' }}
            inputFocusStyle={{ borderColor: 'blue' }}
            onComplete={(value, index) => {
              const x = bc.compareSync(value, userInfo.PIN);
              if (x == true) {
                onFinish();
              } else {
                setError(true);
              }
            }}
            autoSelect={true}
          />
          <p style={error ? null : { display: 'none' }}>Incorrect PIN!</p>
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
            value="UNLOCK"
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
        <AccountSettingsForm disabled={unlock} />
        <div classname="settings-buttons-cotainer">
          <Button disabled={unlock}>Edit Credit Card Info</Button>
          <Button disabled={unlock}>Edit Subscription Plan</Button>
        </div>
      </div>
    </div>
  );
}

export default RenderAccountSettings;
