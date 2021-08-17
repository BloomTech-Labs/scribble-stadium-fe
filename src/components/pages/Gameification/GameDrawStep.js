//** Import Modules */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

//** Import Components */
import UploadDocs from '../../common/UploadDocs';

//** Import Assets */
import boyImg from '../../../assets/images/gamemodeimg/LightingKid.png';

export default function GameDrawStep(props) {
  // Get the history object
  const history = useHistory();

  // In this state, I save the amount of files we have ready to upload
  const [fileList, setFileList] = useState([]);

  // This handles what happens when a picture is added/removed
  const handleChange = data => {
    setFileList(data);
  };

  // This handles what happens when the files are uploaded and ready for submission
  const handleSubmit = () => {
    props.updateCurProgress('draw', 'complete');
  };

  // This handles when we skip the drawing phase
  const handleSkip = () => {
    props.updateCurProgress('draw', 'skipped');

    props.updateCurStep('write');

    history.push(`${props.baseURL}/write`);
  };

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
            />

            {fileList.length === 0 && (
              <button className="skip-btn" onClick={handleSkip}>
                I’d rather write
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
