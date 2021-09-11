import React, { useState, useEffect, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import bc from 'bcryptjs';
import { useHistory } from 'react-router-dom';

import { ArrowLeftOutlined } from '@ant-design/icons';

import { getProfileData } from '../../../api';

import { Modal, Button, Form, Input } from 'antd';
import Header from '../../common/Header';

const titleText = 'Please select your name';

const ProfileRenderModal = props => {
  const { user } = useAuth0();
  const [visible, setVisible] = useState(true);
  const [userInfo, setUserInfo] = useState([]);

  const [selected, setSelected] = useState(null);
  const [title, setTitle] = useState(titleText);
  const formRef = useRef(null);
  const [form] = Form.useForm();
  const history = useHistory();

  // Redux Action Dispatch
  const { setParent, setChild } = props;

  const onFinish = values => {
    if (selected.type === 'Parent') {
      setParent({
        ...selected,
        children: userInfo.filter(user => user.type !== 'Parent'),
      });
      history.push(`parent/dashboard`);
    } else if ((selected.type = 'Child')) {
      setChild(selected);
      history.push(`child/dashboard`);
    } else {
      // error case?
    }
  };

  useEffect(() => {
    getProfileData().then(res => {
      setUserInfo(res);
    });
  }, [user]);

  const handleOk = e => {
    setVisible(true);
  };

  const handleCancel = e => {
    setVisible(true);
  };

  const userSelect = user => {
    setSelected(user);
    setTitle(null);
  };

  const backToProfiles = e => {
    setSelected(!selected);
    setTitle(titleText);
    form.resetFields();
  };

  const blurOnFourChars = e => {
    if (e.target.value.length === 4) {
      formRef.current.submit();
    }
  };

  return (
    <>
      <Header displayMenu={false} />
      {
        <Modal
          className="profile-modal"
          title={title}
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          closable={false}
          centered={true}
          footer={null}
        >
          {!selected ? (
            <div className="button-list">
              {userInfo.map(user => {
                return (
                  <Button
                    type="primary"
                    size="large"
                    key={`${user.type}-${user.ID}`}
                    onClick={e => userSelect(user)}
                  >
                    {user.Name}
                  </Button>
                );
              })}
            </div>
          ) : (
            <Form form={form} onFinish={onFinish} ref={formRef}>
              <p>Enter your PIN</p>
              <Form.Item
                name="pin"
                validateTrigger="onSubmit"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Incorrect PIN!',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      const x = bc.compareSync(value, selected.PIN);
                      if (x) {
                        return Promise.resolve();
                      }
                      return Promise.reject('Incorrect PIN!');
                    },
                  }),
                ]}
              >
                <Input
                  autoFocus={true}
                  className="pin"
                  maxLength={4}
                  onChange={blurOnFourChars}
                  autoComplete="off"
                  size="large"
                />
              </Form.Item>

              <Button
                className="back"
                type="text"
                icon={<ArrowLeftOutlined />}
                onClick={backToProfiles}
              />
            </Form>
          )}
        </Modal>
      }
    </>
  );
};

export default ProfileRenderModal;
