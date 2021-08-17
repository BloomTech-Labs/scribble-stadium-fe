//** Import Modules */
import React, { useState } from 'react';

//** Import Components */
import UploadDocs from '../../common/UploadDocs';

//** Import Assets */
import boyImg from '../../../assets/images/gamemodeimg/LightingKid.png';

export default function GameWriteStep() {
  // In this state, I save the amount of files we have ready to upload
  const [fileList, setFileList] = useState([]);

  // This handles what happens when a picture is added/removed
  const handleChange = data => {
    setFileList(data);
  };

  return (
    <div id="write-step">
      <div id="write" className="gameification-content">
        <div className="inner-container">
          <img src={boyImg} alt="Boy Image" className="boy-img" />

          <div className="step-description">
            <h3>Don’t forget!</h3>

            {fileList.length === 0 ? (
              <p>
                When your story is complete, snap a photo of your pages and
                upload them.
              </p>
            ) : (
              <p>Double check that you’re uploading the right photo!</p>
            )}

            <UploadDocs
              listType="picture"
              uploadButtonClassname="upload-picture"
              uploadButtonText="Upload Your Drawing"
              handleChangeExtra={handleChange}
            />

            {fileList.length === 0 && (
              <button className="skip-btn">I’d rather write</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
