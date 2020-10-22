import React, { useState } from 'react';
import { Card, Button, Layout } from 'antd';

import LargeModal from './LargeModal';

const ChildCard = props => {
  const [visible, setVisible] = useState(false);

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
      <LargeModal
        visible={visible}
        setVisible={setVisible}
        title={`${props.name.toUpperCase()}'s ${props.update} `}
        modalType="progress"
        id={props.id}
      />
    </Card>
  );
};

export default ChildCard;
