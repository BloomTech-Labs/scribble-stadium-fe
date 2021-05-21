import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';
import { PlusCircleOutlined, EditOutlined } from '@ant-design/icons';
import { useOktaAuth } from '@okta/okta-react';
import { getProfileData } from '../../../api';
import ParentNavTopBar from '../../common/ParentNavTopBar';
import NewProgressCharts from '../../common/NewProgressCharts';
import NewChildCard from '../../common/NewChildCard';
import AccountSettings from '../AccountSettings/AccountSettingsContainer';
import { connect } from 'react-redux';
import { setParent } from '../../../state/actions/parentActions';
import Title from 'antd/lib/typography/Title';

const RenderNewParentDashboard = props => {
  const { authState } = useOktaAuth();
  const { setParent } = props;

  useEffect(() => {
    getProfileData(authState).then(res => {
      setParent({
        ...res[0],
        children: res.filter(user => user.type !== 'Parent'),
      });
    });
  }, [setParent, authState]);

  return (
    <>
      <Layout className="parent-dashboard">
        <ParentNavTopBar />

        <Layout>
          <div className="progress-container">
            <NewProgressCharts />
          </div>
          <div className="heading-section">
            <Title
              className="title"
              level={2}
              style={{ display: 'inline-block' }}
            >
              Players
            </Title>
            <div className="link-container">
              <Link to="/parent/add-child">
                <Button icon={<PlusCircleOutlined />}>Add Player</Button>
              </Link>
              <Link to="/parent/edit-players">
                <Button icon={<EditOutlined />}>Edit Players</Button>
              </Link>
            </div>
          </div>
          <div className="child-container">
            <NewChildCard props={props} />
          </div>
          <div>
            <AccountSettings />
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default connect(null, { setParent: setParent })(
  RenderNewParentDashboard
);
