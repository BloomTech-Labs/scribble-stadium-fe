import { Badge, Card } from 'antd';
import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router';

const BacklogStoryCard = ({ story }) => {
  const {
    storyTitle,
    storyAuthor,
    currentStatus,
    assignedTo,
    timeSubmitted,
    storyId,
  } = story;

  const date = new Date(parseInt(timeSubmitted));

  const statusColor =
    currentStatus === 'Approved'
      ? 'green'
      : currentStatus === 'Pending'
      ? 'orange'
      : 'red';

  const history = useHistory();
  const url = useRouteMatch().url;

  const routeToDetails = e => {
    e.preventDefault();
    history.push(`${url}/${storyId}`);
  };

  return (
    <Badge.Ribbon text={currentStatus} size="small" color={statusColor}>
      <Card size="small" title={storyTitle} onClick={routeToDetails}>
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
