import React from 'react';
import { Layout, Typography } from 'antd';

import ParentNavSider from '../../common/ParentNavSider';

const { Title } = Typography;

const Help = props => {
  return (
    <>
      <Layout className="parent-dashboard">
        <ParentNavSider selected="help" />

        <Layout>
          <div className="Contact">
            <Title
              className="help-title"
              style={{ color: '#0267C1' }}
              level={1}
            >
              Help
            </Title>
            <h2>Contact Us</h2>
            <h3>Email us: email@storysquad.com</h3>
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default Help;
