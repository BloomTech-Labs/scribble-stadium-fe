import { Button } from 'antd';
import React from 'react';
import UploadEpisode from '../../common/UploadEpisode';

function UploadStoryPopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <Button
          className="close-button"
          onClick={() => props.setTrigger(false)}
          danger
        >
          Close
        </Button>
        <UploadEpisode />
      </div>
    </div>
  ) : (
    ''
  );
}

export default UploadStoryPopup;
