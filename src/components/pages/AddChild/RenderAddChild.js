import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import ParentNavSider from '../../common/ParentNavSider';

import { useHistory } from 'react-router-dom';
import { getChildFormValues } from '../../../api';
import { postNewChild, getChild } from '../../../api';

import { Layout, Form, Input, Button, Select, Switch, Typography } from 'antd';

import { connect } from 'react-redux';
import ImagePicker from 'react-image-picker';
import { PlusOutlined } from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal';

const { Title } = Typography;
const { Option } = Select;

const RenderAddChild = props => {
  const { authState } = useOktaAuth();

  const [gradeLevels, setGradeLevels] = useState([]);
  const [avatars, setAvatars] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [form] = Form.useForm();
  const { push } = useHistory();

  useEffect(() => {
    getChildFormValues(authState).then(data => {
      setAvatars(() => data[0]);
      setGradeLevels(() => data[1]);
    });
  }, [authState]);

  const pickHandler = image => {
    setSelectedImage(image);
  };

  /**
   *
   * @param {Object} values fields including Name, PIN, IsDyslexic, CohortID, ParentID, AvatarID, and GradeLevelID
   * @returns {number} the newly created child id is put into the getChild api call
   */
  const onFinish = ({ Name, PIN, GradeLevelID, IsDyslexic }) => {
    postNewChild(authState, {
      Name,
      PIN,
      GradeLevelID,
      IsDyslexic,
      AvatarID: selectedImage.value,
      ParentID: props.parent.id,
      CohortID: 1,
    }).then(res => {
      getChild(authState, res).then(child => {
        props.setChildren({ ...child });
      });
    });
    push('/parent/dashboard');
  };

  return (
    <Layout className="add-child">
      <Modal
        visible={modalIsOpen}
        onCancel={() => setModalIsOpen(false)}
        onOk={() => setModalIsOpen(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        className="avatar-select-modal"
        width="90%"
      >
        <ImagePicker
          images={avatars.map(img => ({ src: img.AvatarURL, value: img.ID }))}
          onPick={pickHandler}
        />
      </Modal>
      <ParentNavSider selected="dashboard" />

      <Layout className="child-content">
        <Title className="title" style={{ color: '#0267C1' }} level={1}>
          Settings
        </Title>

        <Form form={form} name="add-child" onFinish={onFinish}>
          <div className="form-inline">
            <div className="avatar-select">
              <Button
                icon={selectedImage ? null : <PlusOutlined />}
                onClick={() => setModalIsOpen(true)}
              >
                {selectedImage ? (
                  <img src={selectedImage.src} alt="Selected avatar" />
                ) : (
                  'Select Avatar'
                )}
              </Button>
            </div>
            <div className="form-elements">
              <Form.Item
                name="Name"
                rules={[
                  { required: true, message: 'Please input your Username!' },
                ]}
              >
                <Input placeholder="User Name" />
              </Form.Item>
              <Form.Item name="GradeLevelID" rules={[{ required: true }]}>
                <Select placeholder="Select a grade:" allowClear>
                  {gradeLevels.map(g => {
                    return (
                      <Option key={g.ID} value={g.ID}>
                        {g.GradeLevel}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </div>
          </div>
          <Form.Item
            name="PIN"
            rules={[
              { len: 4, message: 'PIN must be 4 digits!' },
              { required: true },
            ]}
          >
            <Input placeholder="Set PIN" autoComplete="off" />
          </Form.Item>
          <Form.Item
            name="ConfirmPIN"
            rules={[
              { required: true, message: 'Please confirm your PIN!' },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('PIN') === value)
                    return Promise.resolve();
                  return Promise.reject('The two PINs must match!');
                },
              }),
            ]}
          >
            <Input placeholder="Confirm PIN" autoComplete="off" />
          </Form.Item>
          <div className="form-inline">
            <Form.Item
              initialValue={false}
              name="IsDyslexic"
              label="Dyslexia"
              valuePropName="checked"
            >
              <Switch checkedChildren="Yes" unCheckedChildren="No" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="large" htmlType="submit">
                Add a Child
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Layout>
    </Layout>
  );
};

export default connect(
  state => ({
    parent: state.parent,
  }),
  {}
)(RenderAddChild);
