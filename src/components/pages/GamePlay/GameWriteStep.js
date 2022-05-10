//** Import Modules */
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';

//** Import Components */
import UploadDocs from '../../common/UploadDocs';

//** Import Assets */
import boyImg from '../../../assets/images/hero_images/hero4.png';

export default function GameWriteStep(props) {
  // Get the history object
  const history = useHistory();

  // In this state, I save the amount of files we have ready to upload
  const [fileList, setFileList] = useState([]);

  // State to help when uploading
  const [isUploading, setIsUploading] = useState(false);

  // Enable the modal window to warn about no draw submittion
  const warnData = {
    title: 'Hold up there partner!',
    description: 'you must submit a drawing in order to battle.',
    buttonTxt: 'back to drawing',
  };

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
      props.updateSubmissionData('HasWritten', true);
      props.updateFileSubmissionData('writings', fileList);
      props.updateBattleReady(true);

      // The following code is commented out to prevent warnings during compilation
      // Enable the modal window
      // const modalData = {
      //   title: 'Get ready for the boss battle!',
      //   description:
      //     'To complete this mission, your work will be put up head-to-head against a boss. If you are ready to fight, submit your work!',
      //   buttonTxt: 'Battle!',
      // };
//      const modalData = {
//        title: 'Get ready for the boss battle!',
//        description:
//          'To complete this mission, your work will be put up head-to-head against a boss. If you are ready to fight, submit your work!',
//        buttonTxt: 'Battle!',
//      };
      //      const modalData = {
      //        title: 'Get ready for the boss battle!',
      //        description:
      //          'To complete this mission, your work will be put up head-to-head against a boss. If you are ready to fight, submit your work!',
      //        buttonTxt: 'Battle!',
      //      };

      //props.enableModalWindow(modalData);

      props.updateFileSubmissionData('writings', []);
      setIsUploading(false);
    }, triggerSubmitTimer);
    if (props.submissionData.HasDrawn) {
      history.push('/child/next-steps');
    } else {
      props.enableModalWindow(warnData);
    }
  };

  // This function handles when we make a full submission of the entire mission(after reading, drawing, and writing)
  // const handleFullSubmission = () => {};

  // This handles when we skip the drawing phase
  const handleSkip = () => {
    props.updateSubmissionData('HasWritten', false);
    props.updateFileSubmissionData('writings', []);

    if (!props.submissionData.HasDrawn) {
      props.updateCurStep('draw');
      props.updateBattleReady(false);

      history.push(`${props.baseURL}/draw`);
    } else {
      props.updateCurStep('write');
      props.updateBattleReady(true);

      // Enable the modal window
      const modalData = {
        title: 'Get ready for the boss battle!',
        description:
          'To complete this mission, your work will be put up head-to-head against a boss. If you are ready to fight, submit your work!',
        buttonTxt: 'Battle!',
      };

      props.enableModalWindow(modalData);
    }
  };

  // Add some animation
  useEffect(() => {
    gsap.from('#write-step', {
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

    const battleBtnAnim = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    battleBtnAnim.to('.battle-btn button', { scale: 0.8, duration: 0.5 });
    battleBtnAnim.to('.battle-btn button', { scale: 1.2, duration: 0.3 });
    battleBtnAnim.to('.battle-btn button', { scale: 1.05, duration: 0.2 });
    battleBtnAnim.to('.battle-btn button', { scale: 1.07, duration: 0.2 });
    battleBtnAnim.to('.battle-btn button', { scale: 1, duration: 0.4 });

    setFileList(props.fileSubmissionData.writings);
  }, [props.fileSubmissionData.writings]);

  return (
    <div id="write-step">
      <div id="write" className="gameplay-content">
        <div className="inner-container">
          <img src={boyImg} alt="A boy" className="boy-img" />

          <div className="step-description">
            <p style={{ fontWeight: '100 !important', width: '350px' }}>
              Make sure you're uploading the right photo.
            </p>
            <UploadDocs
              listType="picture"
              uploadButtonClassname="upload-picture"
              uploadButtonText="Upload your story"
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
                {isUploading ? 'Uploading...' : 'Submit'}
              </Button>
            )}

            <Button className="skip-btn" onClick={handleSkip}>
              {props.submissionData.HasDrawn
                ? 'Just drawing, no story'
                : "I'd rather draw"}
            </Button>

            {/* This button is no longer needed as the page routes to next steps. If in the future a battle mode is implemented, this button will be used. */}
            {/* {props.battleReady && (
              <div className="battle-btn">
                <button>Begin Battle!</button>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
