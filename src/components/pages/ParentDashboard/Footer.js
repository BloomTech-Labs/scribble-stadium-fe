import React from 'react';
import {
  FacebookOutlined,
  GooglePlusOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import SSLogo from '../../../assets/icons/logo.svg';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import { ToastContainer } from 'react-toastify';

function Footer(props) {
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
    <div className="footerContainer">
      <div className="one">
        <AddressDetailsAndNewsletter />
      </div>
      <div className="two">
        <ContactForm success={toastifySuccess} />
      </div>
      <div className="three">
        <Socials />
      </div>
      <ToastContainer />
    </div>
  );
}

function AddressDetailsAndNewsletter(props) {
  return (
    <div className="footer-address-container">
      <div className="address-info">
        <div class="contact-details">
          <p>
            <i class="" aria-hidden="true">
              Story Squad LLC
              <br />
              2100 Sesame Street
              <br />
              Fun City
              <br />
              North Funland
              <br />
              USA
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}

function ContactForm({ success }) {
  //This function takes care of sending the data captured in the
  // form to a dedicated email address.
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    //reset the form values
    e.target.reset();
    //display the success message
    success();
  }

  return (
    <div>
      <form onSubmit={sendEmail}>
        <div class="formContainer">
          <div class="item name">
            <label>
              <p>Sign up for our newsletter</p>
            </label>
          </div>
          <div class="item nameInput">
            <input className="emailInput" type="email" name="email" />
          </div>
          <div class="item contact-button">
            <input
              type="submit"
              value="Send"
              className="footer-contact-form-submit-button"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

function Socials(props) {
  return (
    <div className="socials">
      <p>Find us on your favorite social media platform</p>

      <div className="icons-list">
        <FacebookOutlined className="socialIcons" />
        <GooglePlusOutlined className="socialIcons" />
        <TwitterOutlined className="socialIcons" />
      </div>
    </div>
  );
}

export default Footer;
