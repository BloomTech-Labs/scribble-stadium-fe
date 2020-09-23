import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import bc from 'bcryptjs';
import { useHistory } from 'react-router-dom';

import { ArrowLeftOutlined } from '@ant-design/icons';

import { getProfileData } from '../../../api';

import { Modal, Button, Form, Input } from 'antd';

const ProfileRenderModal = props => {
  const { authState } = useOktaAuth();
  const [visible, setVisible] = useState(true);
  const [userInfo, setUserInfo] = useState([]);
  const [selected, setSelected] = useState(null);
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = values => {
    history.push(`${selected.type.toLowerCase()}/dashboard`);
  };

  useEffect(() => {
    getProfileData(authState).then(res => {
      setUserInfo(res);
    });
  }, [authState]);

  const handleOk = e => {
    setVisible(true);
  };

  const handleCancel = e => {
    setVisible(true);
  };

  const userSelect = user => {
    setSelected(user);
  };

  const backToProfiles = e => {
    setSelected(!selected);
  };

  return (
    <>
      {
        <Modal
          title="So we can direct you to the right place, please let us know who you are."
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          {!selected ? (
            userInfo.map(user => {
              return (
                <>
                  <Button
                    key={`${user.type}-${user.ID}`}
                    onClick={e => userSelect(user)}
                  >
                    {user.Name}
                  </Button>
                </>
              );
            })
          ) : (
            <Form form={form} onFinish={onFinish}>
              <p>Enter your PIN</p>
              <p>{selected.Name}</p>
              <Form.Item
                name="pin"
                label="PIN"
                validateTrigger="onSubmit"
                hasFeedback
                validateStatus="null"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your PIN.',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (bc.compareSync(value, selected.PIN)) {
                        return Promise.resolve();
                      }
                      return Promise.reject('Your pin does not match!');
                    },
                  }),
                ]}
              >
                <Input />
              </Form.Item>
              <ArrowLeftOutlined onClick={backToProfiles} />
              <Button type="primary" htmlType="submit">
                Enter
              </Button>
            </Form>
          )}
        </Modal>
      }
    </>
  );
};

export default ProfileRenderModal;
