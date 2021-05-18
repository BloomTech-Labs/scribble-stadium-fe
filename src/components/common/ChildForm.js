import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import { Button, Card, Form, Input, Modal } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import ImagePicker from 'react-image-picker';

import {
  updateChildData,
  deleteChild,
  getChild,
  getChildFormValues,
} from '../../api';

const { confirm } = Modal;

function showConfirmDelete(onDelete) {
  confirm({
    title: 'Are you sure?',
    icon: <ExclamationCircleOutlined />,
    content: "Are you sure you want to delete this child's profile?",
    onOk() {
      onDelete();
    },
  });
}

function ChildForm(props) {
  const { authState } = useOktaAuth();
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(() => false);
  const [isSaveBtnDisabled, setIsSaveBtnDisabled] = useState(() => true);
  const [avatars, setAvatars] = useState(() => []);
  const [selectedImage, setSelectedImage] = useState(() => {
    return {
      AvatarURL: props.AvatarURL,
      ID: props.AvatarID,
      value: props.AvatarID,
    };
  });

  useEffect(() => {
    console.log(props);

    // Fetch available avatars from API
    getChildFormValues(authState).then(data => {
      setAvatars(() => data[0]);

      console.log(data[0]);
    });
  }, [authState]);

  const onEditBtnClick = () => {
    setIsModalOpen(() => true);
  };

  const pickHandler = image => {
    setSelectedImage(() => {
      return {
        AvatarURL: image.src,
        ID: image.value,
        value: image.value,
      };
    });
    setIsSaveBtnDisabled(() => false);
  };

  const onChange = () => {
    if (isSaveBtnDisabled) {
      setIsSaveBtnDisabled(() => false);
    }
  };

  const onFinish = values => {
    const changes = values;

    // IF the PIN has not changed, do not reset it.
    if (changes.PIN === '0000') {
      delete changes.PIN;
    }

    updateChildData(
      authState,
      { ...values, AvatarID: selectedImage.ID },
      props.ID
    )
      .then(res => {
        setIsSaveBtnDisabled(() => true);

        getChild(authState, props.ID).then(child => {
          props.updateChild({ ...child });
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onDelete = () => {
    deleteChild(authState, props.ID)
      .then(res => {
        props.removeChild(props.ID);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onDeleteBtnClick = () => {
    showConfirmDelete(onDelete);
  };

  return (
    <Card className="child-card-form" bordered={false}>
      <Modal
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(() => false)}
        onOk={() => setIsModalOpen(() => false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okText="SELECT"
        className="avatar-select-modal"
        width="90%"
        centered={true}
      >
        <ImagePicker
          images={avatars.map(avtr => ({
            src: avtr.AvatarURL,
            value: avtr.ID,
          }))}
          onPick={pickHandler}
        />
      </Modal>
      <Modal></Modal>
      <div className="card-top">
        <div className="avatar-container">
          <img
            src={selectedImage.AvatarURL}
            alt="avatar"
            className="avatar-img"
          />
          {/* This button allows parents to change their kid's avatar */}
          <Button
            icon={<EditOutlined />}
            className="edit-btn"
            onClick={onEditBtnClick}
          />
        </div>
        <Button
          icon={<DeleteOutlined />}
          className="delete-btn"
          onClick={onDeleteBtnClick}
        >
          Delete
        </Button>
      </div>
      <div className="card-center">
        <Form
          form={form}
          initialValues={{
            Name: props.Name,
            CharacterName: props.CharacterName,
            Email: props.Email,
            PIN: '0000',
          }}
          name="control-hooks"
          layout="inline"
          onChange={onChange}
          onFinish={onFinish}
        >
          <div className="col">
            <Form.Item name="CharacterName" label="Character Name">
              <Input />
            </Form.Item>
            <Form.Item name="PIN" label="PIN">
              <Input type="password" className="pin" />
            </Form.Item>
          </div>
          <div className="col">
            <Form.Item name="Name" label="Name">
              <Input />
            </Form.Item>
            <Form.Item name="Email" label="Email Address">
              <Input />
            </Form.Item>
          </div>
          <div className="card-bottom">
            <Button
              htmlType="submit"
              className="save-btn"
              disabled={isSaveBtnDisabled}
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </div>
    </Card>
  );
}

export default ChildForm;
