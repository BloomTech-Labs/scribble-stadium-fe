import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Input, Form } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import bc from 'bcryptjs';
import { getProfileData } from '../../../api';
import { ConsoleSqlOutlined } from '@ant-design/icons';

function RenderAccountSettings() {
  const { authState } = useOktaAuth();
  const [form] = Form.useForm();
  const [unlock, setUnlock] = useState(true);
  const [userInfo, setUserInfo] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const formRef = useRef(null);

  //Grab the parents userInfo so we can validate their information (pin)
  useEffect(() => {
    getProfileData(authState).then(res => {
      res.map(user => {
        if (user.type == 'Parent') {
          setUserInfo(user);
        }
      });
      //   setUserInfo(res.filter(user => user.type == 'Parent'));
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

  const onFinish = values => {
    console.log(values);
  };

  const blurOnFourChars = e => {
    if (e.target.value.length === 1) {
      formRef.current.submit();
    }
    console.log(formRef.current);
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
        {/* <div className="pinFormInputs"> */}
        <Form
          name="verify"
          form={form}
          onFinish={onFinish}
          ref={formRef}
          className="pinFormInputs"
        >
          <Form.Item
            name="pin"
            validateTrigger="onSubmit"
            hasFeedback
            noStyle="true"
            rules={[
              {
                required: true,
                message: 'Incorrect PIN!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  const x = bc.compareSync(value, userInfo.PIN);
                  if (x) {
                    return Promise.resolve();
                  }
                  return Promise.reject('Incorrect PIN!');
                },
              }),
            ]}
          >
            <Input maxLength={1} onChange={e => handleInput(e)} />
            <Input maxLength={1} onChange={e => handleInput(e)} />
            <Input maxLength={1} onChange={e => handleInput(e)} />
            <Input maxLength={1} onChange={blurOnFourChars} />
          </Form.Item>

          {/* <Form.Item
            name="pin"
              noStyle="true"
              validateTrigger="onSubmit"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Incorrect PIN!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    {
                      console.log(value);
                    }
                    
                    const x = bc.compareSync(value, userInfo.PIN);
                    if (x) {
                      return Promise.resolve();
                    }
                    return Promise.reject('Incorrect PIN!');
                  },
                }),
              ]}
            >
              <Input maxLength={1} onChange={e => handleInput(e)} />
              <Input maxLength={1} onChange={e => handleInput(e)} />
              <Input maxLength={1} onChange={e => handleInput(e)} />
              <Input maxLength={1} onChange={blurOnFourChars} />
            </Form.Item> */}
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
