import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button } from 'antd';
import { dayData } from './dayData';

const { Header, Footer, Content } = Layout;

const DayComponent = props => {
  const { push } = useHistory();

  const adminDash = () => {
    push('/admin');
  };

  return (
    <Layout className="day-div">
      <Header className="ant-page-header">
        <h1>Story Squad</h1>
      </Header>
      {dayData.map((day, dayID) => {
        // if(dayID == id) {

        // }
        return (
          <>
            <h2 key={dayID}>{day.dayName}</h2>
            <h3 key={dayID}>{day.dayNumber}</h3>
            <h4 key={dayID}>{day.stage}</h4>
            <Content>
              <p key={dayID}>{day.content}</p>
            </Content>
          </>
        );
      })}
      <Button style={{ width: '45%' }}>Simulate Game Play</Button>
      <Button style={{ width: '45%' }} onClick={adminDash}>
        Admin Dash
      </Button>
      <Footer></Footer>
    </Layout>
  );
};

export default DayComponent;
