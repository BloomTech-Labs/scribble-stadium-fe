import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { Button, Card, Form, Input, Modal } from 'antd';
import Parent_Avatar from '../../assets/icons/parent_avatar.svg';

import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import ImagePicker from 'react-image-picker';

import {
  updateChildData,
  deleteChild,
  postNewChild,
  getChild,
  getChildFormValues,
  // getFieldValue, // needs update
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
  const { user } = useAuth0();
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(() => false);
  const [isSaveBtnDisabled, setIsSaveBtnDisabled] = useState(() => true);
  const [avatars, setAvatars] = useState(() => []);
  const [isError, setIsError] = useState(() => false);
  const [selectedImage, setSelectedImage] = useState(() => {
    return {
      AvatarURL: props.AvatarURL,
      ID: props.AvatarID,
      value: props.AvatarID,
    };
  });

  useEffect(() => {
    // Fetch available avatars from API
    getChildFormValues(user).then(data => {
      setAvatars(() => data[0]);
    });
  }, [user]);

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

    if (props.newChild) {
      postNewChild(user, {
        ...values,
        AvatarID: selectedImage.ID,
        ParentID: props.parent.id,
        GradeLevelID: 1,
        IsDyslexic: false,
        // CohortID should be updated to latest Cohort, eventually
        CohortID: 1,
        Total_Points: 0,
        Wins: 0,
        Losses: 0,
        Ballots: {},
        VotesRemaining: 10,
        Achievements: {},
        Streaks: 0,
      })
        .then(() => {
          form.resetFields();
          setSelectedImage(() => {
            return {
              AvatarURL: null,
            };
          });
        })
        .catch(err => {
          console.log(err.response);
          setIsError(() => true);
        });
    } else {
      // newChild prop not provided--this means that we are updating a child instead

      if (isSaveBtnDisabled) {
        return;
      }

      // IF the PIN has not changed, do not reset it.
      if (changes.PIN === '0000') {
        delete changes.PIN;
      }

      updateChildData(user, { ...values, AvatarID: selectedImage.ID }, props.ID)
        .then(() => {
          setIsSaveBtnDisabled(() => true);

          getChild(user, props.ID).then(child => {
            props.updateChild({ ...child });
          });
        })
        .catch(err => {
          console.log(err);
          setIsError(() => true);
        });
    }
  };

  const onDelete = () => {
    deleteChild(user, props.ID)
      .then(() => {
        props.removeChild(props.ID);
      })
      .catch(err => {
        console.log(err);
        setIsError(() => true);
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
      <div className="card-top">
        <div className="avatar-container">
          <img
            src={selectedImage.AvatarURL || Parent_Avatar}
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
        {!props.newChild && (
          <Button
            icon={<DeleteOutlined />}
            className="delete-btn"
            onClick={onDeleteBtnClick}
          >
            Delete
          </Button>
        )}
      </div>
      <div className="card-center">
        <Form
          form={form}
          initialValues={{
            Name: props.Name || '',
            PIN: '0000',
          }}
          name="control-hooks"
          layout="inline"
          onChange={onChange}
          onFinish={onFinish}
        >
          <div className="col">
            <Form.Item
              name="PIN"
              label="PIN"
              rules={[
                {
                  required: true,
                  // type: "integer",
                  // len: 4
                },
                // DISABLED WHILE WORKING ! check API import

                // ({ getFieldValue }) => ({
                //   validator(_, value) {
                //     if (!isNaN(value) && value.length === 4) {
                //       return Promise.resolve();
                //     }
                //     return Promise.reject(
                //       new Error('The PIN has to be a 4 digit long number')
                //     );
                //   },
                // }),
              ]}
            >
              <Input type="password" className="pin" />
            </Form.Item>
          </div>
          <div className="col">
            <Form.Item
              name="Name"
              label="Name"
              rules={[{ required: true, message: 'Please input your name' }]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="card-bottom">
            {isError && (
              <div>
                <span>There has been an error. Please try again</span>
              </div>
            )}
            <Button
              htmlType="submit"
              className="save-btn"
              disabled={isSaveBtnDisabled}
            >
              {props.newChild ? 'Add Player' : 'Save Changes'}
            </Button>
          </div>
        </Form>
      </div>
    </Card>
  );
}

export default ChildForm;
