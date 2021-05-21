import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import ParentNavTopBar from '../../common/ParentNavTopBar';
import ParentDashboardBack from '../../common/ParentDashboardBack';
import ChildForm from '../../common/ChildForm';

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
      <ParentNavTopBar />
      <Layout className="content">
        <div className="top-section">
          <ParentDashboardBack />
          <Title className="title" level={2}>
            Add Player
          </Title>
        </div>
        <Layout className="children">
          <ChildForm {...props} newChild={true} />
        </Layout>
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
