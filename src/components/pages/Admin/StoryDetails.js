import React, { useState, useEffect } from 'react';
import { Button, Card, Alert, Input, Form, Select } from 'antd';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

import {
  fetchStories,
  updateStories,
} from '../../../state/actions/adminActions';

const StoryDetails = ({ stories, fetchStories, updateStories, match }) => {
  const { story_id } = useParams();
  const matchStory = stories.find(story => {
    return story.storyId == story_id;
  });
  const [story, setStory] = useState(matchStory);
  const [imageDialog, setImageIsOpen] = useState({
    isOpen: false,
    selectedImage: '',
  });
  const {
    storyTitle,
    storyDescription,
    currentStatus,
    storyImages,
    assignedTo,
  } = story;

  const statusColor =
    currentStatus == 'Approved'
      ? 'success'
      : currentStatus == 'Pending'
      ? 'warning'
      : 'error';

  useEffect(() => {
    fetchStories();
  }, []);

  useEffect(() => {
    setStory(matchStory);
  }, [match]);

  const handleImageDialog = e => {
    e.preventDefault();
    setImageIsOpen({
      isOpen: !imageDialog.isOpen,
      selectedImage: e.target.src,
    });
  };

  const handleStoryUpdate = e => {
    const updatedStory = {
      ...story,
      [e.currentTarget.name]: e.currentTarget.value,
    };

    const updatedStories = stories.map(story => {
      return story.storyId === updatedStory.storyId ? updatedStory : story;
    });

    updateStories(updatedStories);
  };

  return (
    <div className="story-details">
      <Card
        title={storyTitle}
        extra={<Alert message={currentStatus} type={statusColor} />}
      >
        <div className="story-details-description">{storyDescription}</div>

        <div className="story-details-bottom">
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
          </div>

          {currentStatus === 'Approved' ? (
            <div className="button">
              <Button
                size="small"
                type="primary"
                className="reject-btn"
                onClick={handleStoryUpdate}
                name="currentStatus"
                value="Rejected"
              >
                Reject
              </Button>
            </div>
          ) : currentStatus === 'Rejected' ? (
            <div className="button">
              <Button
                size="small"
                type="primary"
                className="approve-btn"
                onClick={handleStoryUpdate}
                name="currentStatus"
                value="Approved"
              >
                Approve
              </Button>
            </div>
          ) : (
            <div className="button">
              <Button
                size="small"
                type="primary"
                className="reject-btn"
                onClick={handleStoryUpdate}
                name="currentStatus"
                value="Rejected"
              >
                Reject
              </Button>
              <Button
                size="small"
                type="primary"
                className="approve-btn"
                onClick={handleStoryUpdate}
                name="currentStatus"
                value="Approved"
              >
                Approve
              </Button>
            </div>
          )}
        </div>
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
      </Card>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    stories: state.admin.stories,
    moderators: state.admin.moderators,
  };
};

export default connect(mapStateToProps, { fetchStories, updateStories })(
  StoryDetails
);
