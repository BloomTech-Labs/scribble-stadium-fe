import React, { useState } from 'react';
import RenderSupportPage from './RenderSupportPageModal';
import { toast } from 'react-toastify';

function SupportPageContainer(props) {
  //this function takes care of the success message displayed on the screen
  //when the user hits submit to send the form data to a dedicated email addy

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast',
    });
  };

  return (
    <>
      <RenderSupportPage success={toastifySuccess} />
    </>
  );
}

export default SupportPageContainer;
