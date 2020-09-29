import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const BackButton = props => {
  console.log('props = ', props);
  return (
    <Link to={props.destination}>
      <Button className="back-button" type="text" icon={<ArrowLeftOutlined />}>
        Go Back
      </Button>
    </Link>
  );
};
export default BackButton;
