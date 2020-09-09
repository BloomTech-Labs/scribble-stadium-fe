import React from 'react';
import { Layout } from 'antd';
import { LoginContainer } from '../Login';
import '../../../styles/LandingPage.less';

const LandingPage = () => {
  return (
    <>
      <Layout>
        <Layout.Header>Header Placeholder</Layout.Header>
        <Layout>
          <Layout.Content>
            <p>
              Story Squad is a game where imagination comes to play. It’s where
              generating ideas scores big.
            </p>
            <p>
              Story Squad springs storytellers into action by partnering them up
              to participate in interactive & immersive creative challenges.
            </p>
            <p>
              Become a master of your craft by submitting original drawings &
              handwritten stories, receiving and giving real feedback, sharing
              points in a squad-vs-squad matchup, and finally see if you won.
            </p>
            <p>Ready?</p>
          </Layout.Content>
          <Layout.Sider>
            <LoginContainer />
          </Layout.Sider>
        </Layout>
        <Layout.Footer>footer placeholder</Layout.Footer>
      </Layout>
    </>
  );
};

export default LandingPage;
