import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { getProfileData } from '../../../api'


import { Modal, Button } from 'antd';

const ChooseModal = props => {
  const { authState, authService } = useOktaAuth();
  const [visible, setVisible] = useState(true);
  const [userInfo, setUserInfo] = useState([]);


  useEffect(() => {
    getProfileData(authState)
      .then(res => {
        setUserInfo(res)
      })

  }, [authState])



  const showModal = () => {
    setVisible(true)
  };

  const handleOk = e => {
    setVisible(true)
  };

  const handleCancel = e => {
    setVisible(true)
  };


  return (
    <>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {userInfo.map(user => {
          return (
            <>
            <Button>{user.Name}</Button>
            
            </>
          )
        })}

      </Modal>


    </>
  );
}


export default ChooseModal;