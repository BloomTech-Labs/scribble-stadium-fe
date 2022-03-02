import React from 'react';
import UploadEpisode from '../../common/UploadEpisode';

function UploadStoryPopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-button"
          onClick={() => props.setTrigger(false)}
        >
          Close
        </button>
        <UploadEpisode />
      </div>
    </div>
  ) : (
    ''
  );
}

export default UploadStoryPopup;
