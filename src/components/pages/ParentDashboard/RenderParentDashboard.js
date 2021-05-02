import React from 'react';
import { Layout, Typography, Card } from 'antd';
import { Link } from 'react-router-dom';

import { PlusCircleFilled } from '@ant-design/icons';
import ChildCard from '../../common/ChildCard';
import ParentNavSider from '../../common/ParentNavSider';

const { Title } = Typography;

const ParentDashboard = props => {
  return (
    <>
      <Layout className="parent-dashboard">
        <Layout>
          <header
            style={{
              backgroundColor: '#9BE1DF',
              display: 'flex',
              justifyContent: 'flexEnd',
            }}
          >
            <Title className="title" style={{ color: 'white' }} level={1}>
              STORY SQUAD
            </Title>
            <h2>Welcome Back </h2>
          </header>
          <div className="children-container">
            <Layout className="children" style={{ flexFlow: 'row wrap' }}>
              {props.parent.children.map((child, i) => (
                <ChildCard
                  key={child.ID}
                  id={child.ID}
                  name={child.Name}
                  AvatarURL={child.AvatarURL}
                  update="PROGRESS"
                />
              ))}
              <Card>
                <h2>
                  <Link to="/parent/add-child">
                    <PlusCircleFilled /> Add a Child
                  </Link>
                </h2>
              </Card>
            </Layout>
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default ParentDashboard;
