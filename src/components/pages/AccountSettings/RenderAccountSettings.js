import React, { useState, useEffect } from 'react';
import { Modal, Form } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';

import { getProfileData } from '../../../api';
import AccountSettingsForm from '../AccountSettingsForm/AccountSettingsForm';

import ChangePaymentInfoModal from '../AccountSettingsForm/Changepaymentinfo';
import ChangeSubinfoModal from '../AccountSettingsForm/ChangeSubInfo';
// needs account settings modal
function RenderAccountSettings() {
  const { user } = useAuth0();
  const [unlock, setUnlock] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [visible, setVisible] = useState(false);

  const [subModalVisible, setSubModalVisible] = useState(false);

  //Grab the parents userInfo so we can validate their information (pin)
  useEffect(() => {
    getProfileData(user).then(res => {
      const parent = res.find(user => user.type === 'Parent');
      if (parent !== null) {
        setUserInfo(parent);
      }
    });
  }, [user]);


  return (
    <div className="accountSettingsContainer">

      <div className="textAndButtonContainer">
        <div className="editText">
          <h3>Edit Account Settings</h3>
        </div>
      </div>
      <div className="editFormsAndButtonsContainer" style={{ opacity: '.85' }}>
        <AccountSettingsForm />
      </div>
      <div className="settings-buttons-container">
        <button
          className="plainButton"
          style={{ opacity: '.85' }}
          onClick={() => setVisible(true)}
        >
          Edit Payment Info
        </button>
        <ChangePaymentInfoModal visible={visible} setVisible={setVisible} />
        <br />
        <button
          className="plainButton"
          style={{ opacity: '.85' }}
          onClick={() => setSubModalVisible(true)}
        >
          Edit Subscription Plan
        </button>
        <ChangeSubinfoModal
          subModalVisible={subModalVisible}
          setSubModalVisible={setSubModalVisible}
        />
      </div>
    </div>
  );
}

export default RenderAccountSettings;
