import React from 'react';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const BackButton = props => {
  return (
    <Button className="back-button" type="default" icon={<ArrowLeftOutlined />}>
      Go Back
    </Button>
  );
};
export default BackButton;
