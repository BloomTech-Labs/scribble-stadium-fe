import React, { useState, useEffect, useRef } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';

import closeIcon from '../../../assets/icons/close-x.svg';
import lockIcon from '../../../assets/icons/lock-2.svg';
import lockIconDark from '../../../assets/icons/lock-2-dark.svg';

import { getProfileData } from '../../../api';

import { Form, Input, Card } from 'antd';
import { ChildAvatar } from '../../common';

const RenderProfileSelect = props => {
  const { authState } = useOktaAuth();
  const [userInfo, setUserInfo] = useState([]);
  const [showPinModal, setShowPinModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const formRef = useRef(null);
  const [form] = Form.useForm();
  const history = useHistory();

  // Redux Action Dispatch
  const { setParent, setChild } = props;

  const onFinish = () => {
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
      // error case
    }
  };

  useEffect(() => {
    getProfileData(authState).then(res => {
      setUserInfo(res);
    });
  }, [authState]);

  const userSelect = user => {
    if (user !== undefined) {
      setSelected(user);
      setShowPinModal(true);
    }
  };

  const backToProfiles = () => {
    setShowPinModal(false);
    setSelected(!selected);
    form.resetFields();
  };

  const blurOnFourChars = e => {
    if (e.target.value.length === 4) {
      formRef.current.submit();
    }
  };

  const checkForChild = userInfo.filter(user => user.type === 'Child');

  return (
    <div className="profile-select full-page bg-dark">
      <h2 className="text-light">Choose User</h2>
      <div className="profile-list">
        {checkForChild.length < 6 &&
          checkForChild.map((user, i) => {
            return (
              <Card
                type="primary"
                key={`${user.type}-${user.ID}-${i}`}
                onClick={() => userSelect(user)}
              >
                <ChildAvatar
                  src={user.AvatarURL}
                  name={user.Name}
                  fontColor={'light'}
                />
                <img
                  className="lock-icon"
                  src={lockIcon}
                  alt="lock icon"
                  style={{ display: 'block', margin: '0 auto' }}
                />
              </Card>
            );
          })}
        {checkForChild.length > 6 &&
          checkForChild.map((user, i) => {
            return (
              <Card
                bordered={false}
                style={{ backgroundColor: 'none' }}
                type="primary"
                key={`${user.type}-${user.ID}-${i}`}
                onClick={() => userSelect(user)}
              >
                <ChildAvatar
                  src={user.AvatarURL}
                  name={user.Name}
                  fontColor={'dark'}
                />
                <img
                  className="lock-icon"
                  src={lockIcon}
                  alt="lock icon"
                  style={{ display: 'block', margin: '0 auto' }}
                />
              </Card>
            );
          })}
      </div>
      <div className="center-content">
        <button
          className="button-parent-dashboard secondary small margin-0"
          onClick={() =>
            userSelect(userInfo.filter(user => user.type === 'Parent')[0])
          }
        >
          <div>
            <span>Go to Parent Dashboard</span>
            <img src={lockIconDark} alt="lock icon" />
          </div>
        </button>
      </div>
      {showPinModal && (
        <div className="pin-modal modal-container parent-styles">
          <div className="pin-modal-content modal-inner content-box">
            <Form form={form} onFinish={onFinish} ref={formRef}>
              <h2>Enter PIN</h2>
              <button className="button-close" onClick={backToProfiles}>
                <img src={closeIcon} alt="close" />
              </button>
              <Form.Item
                name="pin"
                validateTrigger="onSubmit"
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Incorrect PIN',
                  },
                  () => ({
                    validator(rule, value) {
                      const x = value === selected.PIN;
                      if (x) {
                        return Promise.resolve();
                      }
                      return Promise.reject('Incorrect PIN');
                    },
                  }),
                ]}
              >
                <Input
                  autoFocus={true}
                  type="password"
                  className="pin"
                  maxLength={4}
                  onChange={blurOnFourChars}
                  autoComplete="off"
                  size="large"
                  placeholder="0000"
                />
              </Form.Item>
              <div className="button-container">
                <button
                  className="button-cancel secondary small"
                  onClick={backToProfiles}
                >
                  Cancel
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RenderProfileSelect;
