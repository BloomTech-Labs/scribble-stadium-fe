import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Layout, Button } from 'antd';

import { dayData } from './dayData';
import DayComponent from './DayComponent';

const { Header, Footer } = Layout;

const RenderDayComponent = props => {
  const { push } = useHistory();
  const { dayID } = useParams();

  const adminDash = () => {
    push('/admin');
  };

  return (
    <Layout className="dev-ops-page">
      <Header className="ant-page-header">
        <h1>Story Squad</h1>
        <Button onClick={adminDash}>Back to Admin Dashboard</Button>
      </Header>
      <div>
        {dayData.map(day => {
          if (day.dayID == dayID) {
            return <DayComponent className="dev-tools-day" day={day} />;
          }
        })}
      </div>
      <Footer></Footer>
    </Layout>
  );
};

export default RenderDayComponent;
