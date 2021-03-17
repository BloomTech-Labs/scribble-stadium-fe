import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button } from 'antd';
import dayData from './dayData';

const { Header, Footer, Content } = Layout;

const Saturday = props => {
  const { push } = useHistory();

  const adminDash = () => {
    push('/admin');
  };

  return (
    <Layout className="day-div">
      <Header className="ant-page-header">
        <h1>Story Squad</h1>
      </Header>
      {dayData.map(day => {
        return (
          <>
            <h2>{day.dayName}</h2>
            <h3>{day.dayNumber}</h3>
            <h4>{day.dayStage}</h4>
            <Content>
              <p>{day.content}</p>
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

export default Saturday;
