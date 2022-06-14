import React from 'react';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const ParentDashboardBack = () => {
  const history = useHistory();
  const backButton = () => {
    history.push('/');
  };
  return (
    <Button
      onClick={backButton}
      className="parent-back-button"
      type="default"
      icon={<ArrowLeftOutlined />}
    >
      Back to Dashboard
    </Button>
  );
};
export default ParentDashboardBack;
