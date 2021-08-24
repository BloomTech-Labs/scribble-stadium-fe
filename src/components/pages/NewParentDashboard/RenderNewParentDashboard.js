import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { useAuth0 } from '@auth0/auth0-react'; //replaces okta
import { getProfileData } from '../../../api';
import ParentNavTopBar from '../../common/ParentNavTopBar';
import NewProgressCharts from '../../common/NewProgressCharts';
import NewChildCard from '../../common/NewChildCard';
import AccountSettings from '../AccountSettings/AccountSettingsContainer';
import { connect } from 'react-redux';
import { setParent } from '../../../state/actions/parentActions';

const RenderNewParentDashboard = props => {
  const { user } = useAuth0();
  const { setParent } = props;

  useEffect(() => {
    getProfileData(user).then(res => {
      setParent({
        ...res[0],
        children: res.filter(user => user.type !== 'Parent'),
      });
    });
  }, [setParent, user]);
  return (
    <div>
      <Layout className="newparent-dashboard">
        <ParentNavTopBar />

        <Layout>
          <div className="progress-container">
            <NewProgressCharts />
          </div>
          <div className="child-container">
            <NewChildCard props={props} />
          </div>
          <div>
            <AccountSettings />
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default connect(null, { setParent: setParent })(
  RenderNewParentDashboard
);
