//** Import Modules */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { gsap } from 'gsap';
import { Button } from 'antd';

//** Import Components */
import UploadDocs from '../../common/UploadDocs';

//** Import Assets */
import boyImg from '../../../assets/images/gamemodeimg/LightingKid.png';

export default function GameDrawStep(props) {
  // Get the history object
  const history = useHistory();

  // In this state, I save the amount of files we have ready to upload
  const [fileList, setFileList] = useState([]);

  // State to help when uploading
  const [isUploading, setIsUploading] = useState(false);

  // This handles what happens when a picture is added/removed
  const handleChange = data => {
    setFileList(data);
  };

  // This handles what happens when the files are uploaded and ready for submission
  const handleSubmit = () => {
    setIsUploading(true);

    // Timer used to allow a slight delay before the submit functions trigger.
    const triggerSubmitTimer = 1500;

    setTimeout(() => {
      props.updateSubmissionData('HasDrawn', true);
      props.updateFileSubmissionData('drawings', fileList);
      props.updateCurStep('write');

      // Enable the modal window
      if (!props.modalClosed.draw) {
        const modalData = {
          title: 'Scribble a side quest!',
          description:
            'Grab your favorite pencil and some loose leaf sheets of paper. Based on the prompt at the end of the reading, scribble down a side quest by hand. When your story is complete, snap a photo of your pages and upload them.',
          buttonTxt: "Let's Go!",
        };

        props.enableModalWindow(modalData);
        props.updateModalStatus('draw', true);
      }

      history.push(`${props.baseURL}/write`);
    }, triggerSubmitTimer);
  };

  // This handles when we skip the drawing phase
  const handleSkip = () => {
    props.updateSubmissionData('HasDrawn', false);
    props.updateFileSubmissionData('drawings', []);

    props.updateCurStep('write');

    // Enable the modal window
    if (!props.modalClosed.draw) {
      const modalData = {
        title: 'Scribble a side quest!',
        description:
          'Grab your favorite pencil and some loose leaf sheets of paper. Based on the prompt at the end of the reading, scribble down a side quest by hand. When your story is complete, snap a photo of your pages and upload them.',
        buttonTxt: "Let's Go!",
      };

      props.enableModalWindow(modalData);
      props.updateModalStatus('draw', true);
    }

    if (props.fileSubmissionData.writings.length === 0) {
      props.updateBattleReady(false);
    }

    history.push(`${props.baseURL}/write`);
  };

  // Add some animation
  useEffect(() => {
    gsap.from('#draw-step', {
      opacity: 0,
      y: 200,
      duration: 1,
    });

    gsap.from('.boy-img', {
      opacity: 0,
      x: -200,
      duration: 1,
      delay: 1,
    });

    setFileList(props.fileSubmissionData.drawings);
  }, []);

  return (
    <div id="draw-step">
      <div id="draw" className="gameification-content">
        <div className="inner-container">
          <img src={boyImg} alt="Boy Image" className="boy-img" />

          <div className="step-description">
            <h3>Don’t forget!</h3>

            {fileList.length === 0 ? (
              <p>
                When you’re finished drawing, snap a photo and upload your
                masterpiece.
              </p>
            ) : (
              <p>Double check that you’re uploading the right photo!</p>
            )}

            <UploadDocs
              listType="picture"
              uploadButtonClassname="upload-picture"
              uploadButtonText="Upload Your Drawing"
              handleChangeExtra={handleChange}
              handleSubmit={handleSubmit}
              alternateHandleSubmission={true}
              savedFileList={fileList}
            />

            {fileList.length > 0 && (
              <Button
                className="submit-btn"
                disabled={isUploading}
                onClick={handleSubmit}
                loading={isUploading}
              >
                {isUploading ? 'Uploading...' : 'Save'}
              </Button>
            )}

            <button className="skip-btn" onClick={handleSkip}>
              I’d rather write
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
