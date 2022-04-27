import React, { useState, useEffect } from 'react';
import { Button, Card, Alert } from 'antd';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

import {
  fetchStories,
  updateStories,
} from '../../../state/actions/adminActions';

const StoryDetails = ({ stories, fetchStories, updateStories, match }) => {
  /*
    - take dynamic param from url
  */
  const { story_id } = useParams();

  /*
    - find the object from "stories" props from global state, 
      matching the dynamic param in the url
    - this is used to set an initial state to our local "story" state 
  */
  const matchStory = stories.find(story => {
    return story.storyId == story_id;
  });
  /*
    - declare a local state with default value of "matchStory"  
  */
  const [story, setStory] = useState(matchStory);
  /*
    - local state for controlling the image dialog that opens when clicked
  */
  const [imageDialog, setImageIsOpen] = useState({
    isOpen: false,
    selectedImage: '',
  });

  /*
    - parse and get required params from "story" state
    - values will be used when rendering UI
  */
  const { storyTitle, storyDescription, currentStatus, storyImages } = story;
  /*
  - Declare statusColor, that is used to determinee color/type for the <Alert> 
*/
  const statusColor =
    currentStatus == 'Approved'
      ? 'success'
      : currentStatus == 'Pending'
      ? 'warning'
      : 'error';
  /*
  - By default fetch stories from global state, one time when component renders
*/
  useEffect(() => {
    fetchStories();
  }, []);
  /*
  - change local state "story" everytime there is a change in "match" prop
  - This is to handle the route change when clicking backlog story, so that 
    story details would be rendered for a story with id that matches in the url
    (if url changes from "/storymanager/1" to "storymanager/3" then StoryDetails is re-rendered for storyId 3)
*/
  useEffect(() => {
    setStory(matchStory);
  }, [match]);
  /*
  - function to handleimage dialog
  - when clicked it opens or closes dialog and changes the img src to a clicked image's src
*/
  const handleImageDialog = e => {
    e.preventDefault();
    setImageIsOpen({
      isOpen: !imageDialog.isOpen,
      selectedImage: e.target.src,
    });
  };
  /*
  - function to update global state, with a new status of a given object
*/
  const handleStoryUpdate = e => {
    /*
      - create a new object that changes "currentStatus" and "lastTimeUpdated" of "story" state
      - as a result story's status changes and lastTimeUpdated changes
      - changes on lastTimeUpdated also reflects on AdminHistory component's "Updated" column
    */
    const updatedStory = {
      ...story,
      [e.currentTarget.name]: e.currentTarget.value,
      lastTimeUpdated: `${Date.now()}`,
    };
    /*
      - Create a new array of stories that reflects the change in status in the selected 
        story object
     */
    const updatedStories = stories.map(story => {
      return story.storyId === updatedStory.storyId ? updatedStory : story;
    });
    /*
      - Call global function with the "updateStories" function and pass in "updatedStories" array 
        to update the global state of "stories" to an updated version of itself with new status 
        for a selected story
    */
    updateStories(updatedStories);
  };

  return (
    <div className="story-details">
      {/* 
        - Display StoryDetails components as a Card from antd library
        - This Card includes title, Alert component (from antd) to display status
          description, images associated with this specific story, 
          and related Approve or Reject button
        - Note: Story with currentStatus of "Approved" is only displayed Reject button,
                Story with currentStatus of "Rejected" is only displayed Approve button,
                Story with currentStatus of "Pending" is  displayed both Reject & Approve button 
      */}
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
        {/*
          - display dialog element when an attached image is clicked
          - close the dialog when the dialog or image is clicked
          - this dialog is controlled by local "imageDialog" state's "isOpen" param
         */}
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

/*
  - declare a variable to get stories from global state via connect
*/
const mapStateToProps = state => {
  return {
    stories: state.admin.stories,
  };
};

/*
  - connect to global state (adminReducer) to pass the state data (stories) to props
  - connect to global action (adminActions) to pass the global action functions 
    (fetchStories and updateStories) to props
*/
export default connect(mapStateToProps, { fetchStories, updateStories })(
  StoryDetails
);
