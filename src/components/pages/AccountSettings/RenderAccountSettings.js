import React, { useState } from 'react';

function RenderAccountSettings(props) {
  const [unlock, setUnlock] = useState(true);

  return (
    <div className="accountSettingsContainer">
      <div className="textAndButtonContainer">
        <div className="editText">
          <h3>Edit Account Settings</h3>
        </div>
        <div
          className="unlockButton"
          style={unlock ? null : { display: 'none' }}
        >
          <button onClick={() => setUnlock(false)}>UNLOCK</button>
        </div>

        <div className="lockButton" style={unlock ? { display: 'none' } : null}>
          <button onClick={() => setUnlock(true)}>LOCK</button>
        </div>
      </div>
      <div
        className="editFormsAndButtonsContainer"
        style={unlock ? { opacity: '.3' } : null}
      >
        <div className="placeholderInput">
          <input placeholder="INPUT"></input>
          <button>SUBMIT</button>
        </div>
        <div className="placeholderInput">
          <input placeholder="INPUT"></input>
          <button>SUBMIT</button>
        </div>
        <div className="placeholderInput">
          <input placeholder="INPUT"></input>
          <button>SUBMIT</button>
        </div>
        <div className="placeholderInput">
          <input placeholder="INPUT"></input>
          <button>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default RenderAccountSettings;
