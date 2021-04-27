import React from 'react';
import RenderSupportPageAnimate from './RenderSupportPageAnimate';
import RenderSupportPageModal from './RenderSupportPageModal';

import { Header } from '../../common';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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
      <Header title="Support" displayMenu={true} />
      {/* single page with animations */}
      <RenderSupportPageAnimate success={toastifySuccess} />
      <ToastContainer />
      {/* Modal */}
      {/* <RenderSupportPageModal success={toastifySuccess} /> */}
    </>
  );
}

export default SupportPageContainer;
