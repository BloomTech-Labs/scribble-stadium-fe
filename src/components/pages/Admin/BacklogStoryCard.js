import { Badge, Card } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const BacklogStoryCard = ({ story }) => {
  const {
    storyTitle,
    storyAuthor,
    currentStatus,
    assignedTo,
    timeSubmitted,
    storyId,
  } = story;
  const date = new Date(timeSubmitted);

  const [statusColor] = useState(
    currentStatus === 'Approved'
      ? 'green'
      : currentStatus === 'Pending'
      ? 'orange'
      : 'red'
  );

  const history = useHistory();

  //   if (currentStatus === 'Approved') {
  //     setStatusColor('green');
  //   } else if (currentStatus === 'Pending') {
  //     setStatusColor('orange');
  //   } else {
  //     setStatusColor('red');
  //   }
  const routeToDetails = e => {
    e.preventDefault();
    console.log('hi');
    history.push(`/admin/storymanager/${storyId}`);
  };

  return (
    <Badge.Ribbon text={currentStatus} size="small" color={statusColor}>
      <Card
        size="small"
        title={storyTitle}
        // extra={<p style={{ color: statusColor }}>{currentStatus}</p>}
        //   style={{ width: { xs: 8, sm: 16, md: 24, lg: 32 } }
        onClick={routeToDetails}
      >
        <div className="backlog-card-body-statictext">
          <p>Author:</p>
          <p>Assignee:</p>
          <p>Created:</p>
        </div>
        <div className="backlog-card-body-content">
          <p>{storyAuthor}</p>
          <p>{assignedTo}</p>
          <p>{date.toLocaleDateString()}</p>
        </div>
      </Card>
    </Badge.Ribbon>
  );
};

export default BacklogStoryCard;
