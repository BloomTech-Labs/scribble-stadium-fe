import React, { useState } from 'react';
import { Button, Card, Alert, Input, Form } from 'antd';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
import {
  fetchStories,
  updateStoryStatus,
} from '../../../state/actions/adminActions';

const StoryDetails = ({ stories, fetchStories, updateStoryStatus, match }) => {
  const { user } = useAuth0();

  const { story_id } = useParams();

  const [imageDialog, setImageIsOpen] = useState({
    isOpen: false,
    selectedImage: '',
  });
  console.log(stories);
  const matchStory = stories.find(story => {
    return story.storyId == story_id;
  });

  const [story, setStory] = useState(matchStory);

  useEffect(() => {
    const newMatchStory = stories.find(story => story.storyId == story_id);
    setStory(newMatchStory);
  }, [match]);

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

  const handleStatusChange = status => {
    console.log(status);
    const updatedStory = { ...story, currentStatus: status };
    console.log(updatedStory);
    const updatedStories = stories.map(story => {
      return story.storyId === updatedStory.storyId ? updatedStory : story;
    });
    console.log(updatedStories);
    updateStoryStatus(updatedStories);
  };

  return (
    <div className="story-details">
      <Card
        title={storyTitle}
        extra={
          <>
            <Form>
              <Input />
              {/* <Button type="link" size='small'>Assign</Button> */}
            </Form>
            <Alert message={currentStatus} type={statusColor} />
          </>
        }
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
                onClick={() => handleStatusChange('Rejected')}
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
                onClick={() => handleStatusChange('Approved')}
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
                onClick={() => handleStatusChange('Rejected')}
              >
                Reject
              </Button>
              <Button
                size="small"
                type="primary"
                className="approve-btn"
                onClick={() => handleStatusChange('Approved')}
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
  };
};

export default connect(mapStateToProps, { fetchStories, updateStoryStatus })(
  StoryDetails
);
