import React from 'react';

import { Button, Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

function ChildForm(props) {
  return (
    <Card className="child-card-form" bordered={false}>
      <div className="card-top">
        <img src={props.AvatarURL} alt="avatar" className="avatar-img" />
        <Button icon={<DeleteOutlined />} className="delete-btn">
          Delete
        </Button>
      </div>
      <div></div>
      <div></div>
    </Card>
  );
}

export default ChildForm;
