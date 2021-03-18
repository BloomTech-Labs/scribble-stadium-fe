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
    <Layout className="day-div">
      <Header className="ant-page-header">
        <h1>Story Squad</h1>
      </Header>
      {dayData.map(day => {
        if (day.dayID == dayID) {
          return <DayComponent day={day} />;
        }
      })}
      <Button style={{ width: '45%' }} onClick={adminDash}>
        Admin Dash
      </Button>
      <Footer></Footer>
    </Layout>
  );
};

export default DayComponentView;
