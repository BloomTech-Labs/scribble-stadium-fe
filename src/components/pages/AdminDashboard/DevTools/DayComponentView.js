import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Layout, Button } from 'antd';
import { dayData } from './dayData';

import DayComponent from './DayComponent';

const { Header, Footer } = Layout;

const DayComponentView = props => {
  const { push } = useHistory();
  const { dayID } = useParams();

  const adminDash = () => {
    push('/admin');
  };

  return (
    <Layout className="moderation-page">
      <Header className="ant-page-header">
        <h1>Story Squad</h1>
        <Button style={{ width: '10%' }} onClick={adminDash}>
          Admin Dash
        </Button>
      </Header>
      {dayData.map(day => {
        if (day.dayID == dayID) {
          return <DayComponent className="dev-tools-day" day={day} />;
        }
      })}
      <Footer></Footer>
    </Layout>
  );
};

export default DayComponentView;
