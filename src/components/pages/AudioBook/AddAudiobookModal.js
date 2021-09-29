import React, { useState } from 'react';
import { Modal, Button } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import axios from 'axios';

/*
This component creates a modal popup to add an audiobook file for a user-submitted story
The component should contain a modal styled consistent with the rest of the product
There should be an upload button
User will need to be logged in to add file
The upload button should link to an Axios POST request (possible good resource: https://www.bezkoder.com/react-file-upload-axios/)
**MIGHT need to get with Kyle about whether we need to create secondary functions for accepting uploads PER the above link...
The upload should accept audio files ONLY***
The upload should show the user a progress bar
The modal should disappear after progress bar completes
The audio file should be saved in the child's data and therefore into state?

To-Do:
    [x] assign state variables for modal visibility, loading confirmation and content
    [x] write helper function for changing visibility
        * showModal, setShowModal. Toggles visibility of modal on/off
    [] write modal helper function for onClick
        * This will toggle the visibility of the modal as well as show its content
    [] write helper function for Axios POST
    [] write validation checks for login status and filetype (user MUST be logged in to upload, audio files ONLY)
    [] write onClick function for Upload Button
        * This will trigger the Axios POST request
        * Must write logic to store file to child data for later use
        * Will also trigger a progress bar to show user that file is uploading
        * modal will close on completion
*/
const AddAudiobookModal = props => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
  // const [modalContent, setModalContent] = useState('content of modal');

    const showModal = () => {
    setVisible(true);
    };

    const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
        }, 2000);
    };

  // this function will initiate the axios POST request to upload an audio file and save it to db.
  // const onButtonClick = () => {

  // };

    const handleCancel = () => {
    console.log('clicked cancel button');
    setVisible(false);
    };

    return (
        <>
        <Button type="primary" onClick={showModal}>
            Add AudioBook
        </Button>

        <Modal
            title="AddAudiobook"
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
        >
            {/* <p>{modalContent}</p> */}
        </Modal>
        </>
    );
};

export default AddAudiobookModal;
