import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';
import { getProfileData } from '../../../api'



import { Modal, Button } from 'antd';

const ChooseModal = props => {
  const { authState, authService } = useOktaAuth();
  const [visible, setVisible] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    getProfileData(authState)
      .then(res => {
        setUserInfo(res)
      })

  }, [authState])

  const handleOk = e => {
    setVisible(true)
  };

  const handleCancel = e => {
    setVisible(true)
  };

  const userSelect = user => {
    console.log("USER HAS BEEN SELECTED", {user})
    setSelected(user)
  }

  return (
    <>

      {<Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {!selected ? userInfo.map(user => {
          return (
            <>
              <Button onClick={(e) => userSelect(user)}>{user.Name}</Button>
            </>
          )
        }) : <p>{selected.Name}, {selected.PIN}</p>}

      </Modal>}

    </>
  );
}


export default ChooseModal;