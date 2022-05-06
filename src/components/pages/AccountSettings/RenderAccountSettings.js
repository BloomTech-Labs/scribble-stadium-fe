import React, { useState, useEffect } from 'react';
<<<<<<< refs/remotes/origin/main
import { Modal, Form } from 'antd';
=======
import { Modal,  Form } from 'antd';
>>>>>>> no-unused-vars
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
      const parent = res.find(user => user.type === 'Parent');
      if (parent !== null) {
        setUserInfo(parent);
      }
    });
  }, [user]);

  //These functions handle's exiting the modal once it is activated
  const handleModal = () => {
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
        onCancel={handleModal}
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
              if (x === true) {
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
      </div>
      <div
        className="editFormsAndButtonsContainer"
        style={unlock ? { opacity: '.6' } : null}
      >
        <AccountSettingsForm disabled={unlock} />
      </div>
      <div className="settings-buttons-container">
        <button
          className="plainButton"
          style={unlock ? { opacity: '.6' } : null}
          disabled={unlock}
        >
          Edit Credit Card Info
        </button>
        <br />
        <button
          className="plainButton"
          style={unlock ? { opacity: '.6' } : null}
          disabled={unlock}
        >
          Edit Subscription Plan
        </button>
      </div>
    </div>
  );
}

export default RenderAccountSettings;
