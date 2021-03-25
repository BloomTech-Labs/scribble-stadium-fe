import React from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button, Radio } from 'antd';

const { Header, Content, Footer } = Layout;

const Fri = () => {
  const { push } = useHistory();

  const adminDash = () => {
    push('/admin');
  };

  const gameStageUrl = '/child/match-up';

  const handleSim = () => {
    push(`${gameStageUrl}`);
  };

  return (
    <Layout>
      <Header className="ant-page-header">
        <h1>Story Squad</h1>
        <Button onClick={adminDash}>Back to Admin Dashboard</Button>
      </Header>
      <div className="dev-tools-day">
        <h2>Friday</h2>
        <h3>Game Play Day: 7</h3>
        <h4>The Scoreboard Stage</h4>
        <Content>
          <p>Today at 3 PM is the big reveal and the winners are announced.</p>
          <p>Select the game state you would like to see in play:</p>
          <div className="state-buttons">
            <Radio.Group>
              <Radio className="radio-buttons"></Radio>
            </Radio.Group>
            <Button
              className="simulate-button"
              onClick={handleSim}
              disabled={gameStageUrl == null}
            >
              Simulate Game Play
            </Button>
          </div>
        </Content>
      </div>
      <Footer></Footer>
    </Layout>
  );
};

// connect votes and time of day state
export default Fri;
