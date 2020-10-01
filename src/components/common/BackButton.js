import React from 'react';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const BackButton = props => {
  const history = useHistory();
  const backButton = () => {
    history.push('/child/mission-control');
  };
  return (
    <Button
      onClick={backButton}
      className="back-button"
      type="default"
      icon={<ArrowLeftOutlined />}
    >
      Go Back
    </Button>
  );
};
export default BackButton;
