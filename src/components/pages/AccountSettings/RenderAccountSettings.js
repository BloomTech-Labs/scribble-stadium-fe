import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import bc from 'bcryptjs';
import { getProfileData } from '../../../api';
import PinInput from 'react-pin-input';
import AccountSettingsForm from '../AccountSettingsForm/AccountSettingsForm';

function RenderAccountSettings() {
  const { user } = useAuth0();
  const [unlock, setUnlock] = useState(true);
  const [error, setError] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  //Grab the parents userInfo so we can validate their information (pin)
  useEffect(() => {
    getProfileData(user).then(res => {
      res.map(user => {
        if (user.type == 'Parent') {
          setUserInfo(user);
        }
      });
    });
  }, [user]);

  //These functions handle's exiting the modal once it is activated
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // this function runs once the user has inputted the correct pin.
  //It toggles the opacity and disabled prop of the editFormsAndButtonsContainer
  // allowing the user to see that they can now access the elements to update their account

  const onFinish = value => {
    setUnlock(!unlock);
    setIsModalVisible(!isModalVisible);
  };
  let pin;

  return (
    <div className="accountSettingsContainer">
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        afterClose={() => pin.clear()}
        centered="true"
        width="25vw"
        bodyStyle={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h4>Enter Pin</h4>
        <Form name="verify" onFinish={onFinish} initialValues="">
          <PinInput
            length={4}
            ref={p => (pin = p)}
            initialValue=""
            secret={true}
            type="numeric"
            inputMode="number"
            focus={true}
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
        <div className="buttonArea">
          <div
            className="unlockButton"
            style={unlock ? null : { display: 'none' }}
          >
            <button
              className="lockUnlockButton"
              onClick={() => setIsModalVisible(true)}
              value="UNLOCK"
            >
              UNLOCK WITH PIN
            </button>
          </div>

          <div
            className="lockButton"
            style={unlock ? { display: 'none' } : null}
          >
            <button
              className="lockUnlockButton"
              onClick={() => setUnlock(!unlock)}
            >
              LOCK
            </button>
          </div>
        </div>
      </div>
      <div
        className="editFormsAndButtonsContainer"
        style={unlock ? { opacity: '.3' } : null}
      >
        <AccountSettingsForm disabled={unlock} />
      </div>
      <div className="settings-buttons-container">
        <button
          className="plainButton"
          style={unlock ? { opacity: '.3' } : null}
          disabled={unlock}
        >
          Edit Credit Card Info
        </button>
        <br />
        <button
          className="plainButton"
          style={unlock ? { opacity: '.3' } : null}
          disabled={unlock}
        >
          Edit Subscription Plan
        </button>
      </div>
    </div>
  );
}

export default RenderAccountSettings;
