import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';

import { getProfileData } from '../../../api';
import PinInput from 'react-pin-input';
import AccountSettingsForm from '../AccountSettingsForm/AccountSettingsForm';

import ChangePaymentInfoModal from '../AccountSettingsForm/Changepaymentinfo';
import ChangeSubinfoModal from '../AccountSettingsForm/ChangeSubInfo';
// needs account settings modal
function RenderAccountSettings() {
  const { user } = useAuth0();
  const [unlock, setUnlock] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [visible, setVisible] = useState(false);

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
    setVisible(false);
  };

  // this function runs once the user has inputted the correct pin.
  //It toggles the opacity and disabled prop of the editFormsAndButtonsContainer
  // allowing the user to see that they can now access the elements to update their account

  return (
    <div className="accountSettingsContainer">
      <div className="textAndButtonContainer">
        <div className="editText">
          <h3>Edit Account Settings</h3>
        </div>
      </div>
      <div
        className="editFormsAndButtonsContainer"
        style={unlock ? { opacity: '.85' } : null}
      >
        <AccountSettingsForm />
      </div>
      <div className="settings-buttons-container">
        <button
          className="plainButton"
          style={unlock ? { opacity: '.85' } : null}
          //onClick={()=>setVisible(true)}
        >
          Edit Payment Info
        </button>
        {/*<ChangePaymentInfoModal visible={visible} setVisible={setVisible}/>*/}

        <br />
        <button
          className="plainButton"
          style={unlock ? { opacity: '.85' } : null}
          onClick={() => setVisible(true)}
        >
          Edit Subscription Plan
        </button>
        <ChangeSubinfoModal visible={visible} setVisible={setVisible} />
      </div>
    </div>
  );
}

export default RenderAccountSettings;
