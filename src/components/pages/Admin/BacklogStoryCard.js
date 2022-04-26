import { Badge, Card } from 'antd';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router';

const BacklogStoryCard = ({ story }) => {
  /* - Parse needed parameters from story within props (props.story) */
  const {
    storyTitle,
    storyAuthor,
    currentStatus,
    assignedTo,
    timeSubmitted,
    storyId,
  } = story;

  /* - convert receivied timeSubmitted date param from the story (props.story)
       to a date format
  */
  const date = new Date(parseInt(timeSubmitted));

  /* - declare a variable that handles each card's (BacklogStoryCard) status color 
       to be used in css to color the badge of the card
  */
  const statusColor =
    currentStatus === 'Approved'
      ? 'green'
      : currentStatus === 'Pending'
      ? 'orange'
      : 'red';
  /* - declare a history object from React router to be used to change routing with .push method */
  const history = useHistory();

  /* - declare a url string, that gets the existing url and saves it */
  const url = useRouteMatch().url;

  /* - declare a function that change the url so that StoryDetails component 
     can render in place of AdminHistory component*/
  const routeToDetails = e => {
    e.preventDefault();
    history.push(`${url}/${storyId}`);
  };

  /*
    - Render a UI with Ribbon wrapped into a card
    - Ribbon text comes from "currentStatus" parameter within story prop (props.story)
    - Ribbon color is determined by a statusColor variable which conditionally switches between 3 colors
    - Card itself get its title and body contents from story prop
    - Date param in the card body content is displayed as a local date format
    - Card changes the routing url, when clicked to add each story's id (storyId) into the url
  */
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
