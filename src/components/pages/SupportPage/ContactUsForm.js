import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactUs({ success, visible, userInfo }) {
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
    // close the modal
    visible();
  }

  return (
    <div>
      <form className="Contact-Form-Container" onSubmit={sendEmail}>
        <label>
          <p>Name</p>
        </label>
        <input
          type="text"
          name="name"
          className="contact-form-inputs"
          // defaultValue={userInfo.name}
        />
        <label>
          <p>Email</p>
        </label>
        <input
          type="email"
          name="email"
          className="contact-form-inputs"
          // defaultValue={userInfo.email}
        />
        <label>
          <p>Subject</p>
        </label>
        <input type="text" name="subject" className="contact-form-inputs" />
        <label>
          <p>Message</p>
        </label>
        <textarea name="message" className="contact-form-message" />
        <div className="contact-button-container">
          <input
            type="submit"
            value="Send"
            className="contact-form-submit-button"
          />
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
