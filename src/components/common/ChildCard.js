import React, { useState } from 'react';
import { Card, Button, Layout, Modal } from 'antd';

import { SquadScoreIS, SquadScoreIsNOT } from '../../utils/helpers';

const ChildCard = props => {
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
  };

  return (
    <Card className="child-card">
      <Layout className="child-info">
        <img src={props.AvatarURL} alt="avatar" />
        <h2
          style={{
            fontFamily: 'Nunito, sans-serif',
            color: 'black',
            fontSize: '1.5rem',
          }}
        >
          {props.name}
        </h2>
      </Layout>
      <Button
        type="primary"
        size="large"
        htmlType="submit"
        onClick={() => setVisible(true)}
      >
        {props.name.toUpperCase()}'S {props.update}
      </Button>
      <Modal
        visible={visible}
        width="90%"
        onCancel={handleCancel}
        onOk={handleCancel}
        cancelButtonProps={{ disabled: true }}
        title={`${props.name.toUpperCase()}'s ${props.update}`}
      >
        <h2>Welcome to the Progress Page!</h2>
        <h3>
          Below you will see some graphs representing what we at Story Squad
          call our "Squad Score". What exactly is a Squad Score? We're glad you
          asked!
        </h3>
        <h4>
          What Squad Score <em>is</em>:
        </h4>
        {SquadScoreIS.map(is => (
          <ul>
            <li>{is}</li>
          </ul>
        ))}
        <h4>
          What Squad Score is <em>not</em>:
        </h4>
        {SquadScoreIsNOT.map(isNot => (
          <ul>
            <li>{isNot}</li>
          </ul>
        ))}
        <h3>
          We provide you with these visualizations so you can be involved and
          engaged in your child's Story Squad experience. Feel free to check
          this page regularly, because we'll update it weekly with every new
          submission!
        </h3>
      </Modal>
    </Card>
  );
};

export default ChildCard;
