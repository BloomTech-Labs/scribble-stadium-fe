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
        <ParentNavSider selected="dashboard" />

        <Layout>
          <Title className="title" style={{ color: '#0267C1' }} level={1}>
            STORY SQUAD
          </Title>
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
