import React, { useState } from 'react';
import { Button, Card, Alert, Typography } from 'antd';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useLocation, useParams, useRouteMatch } from 'react-router';

const StoryDetails = ({ stories, match }) => {
  const { Paragraph, Text } = Typography;
  const { Meta } = Card;
  const { story_id } = useParams();
  const [storyId, setStoryId] = useState(story_id);
  const [story, setStory] = useState(
    stories.find(story => story.storyId == storyId)
  );
  const [imageDialog, setImageIsOpen] = useState({
    isOpen: 'false',
    selectedImage: '',
  });

  const { storyTitle, storyDescription, currentStatus, storyImages } = story;

  const statusColor =
    currentStatus == 'Approved'
      ? 'success'
      : currentStatus == 'Pending'
      ? 'warning'
      : 'error';

  const handleImageDialog = e => {
    e.preventDefault();
    setImageIsOpen({
      isOpen: !imageDialog.isOpen,
      selectedImage: e.target.src,
    });
  };

  useEffect(() => {
    setStoryId(story_id);
    const matchStory = stories.find(story => story.storyId == storyId);
    setStory(matchStory);
  });

  return (
    <div className="story-details">
      <Card
        title={storyTitle}
        extra={<Alert message={currentStatus} type={statusColor} />}
      >
        <Paragraph>{storyDescription}</Paragraph>
        <div className="story-details-images">
          {storyImages.map(pic => {
            return (
              <>
                <img
                  src={pic}
                  alt="Default story image"
                  onClick={handleImageDialog}
                />
              </>
            );
          })}
          {imageDialog.isOpen && (
            <dialog
              className="story-details-image-dialog"
              open
              onClick={handleImageDialog}
            >
              <img
                src={imageDialog.selectedImage}
                alt="Large story image"
                className="story-details-image-dialog"
                onClick={handleImageDialog}
              />
            </dialog>
          )}
        </div>
      </Card>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    stories: state.admin,
  };
};

export default connect(mapStateToProps, {})(StoryDetails);
