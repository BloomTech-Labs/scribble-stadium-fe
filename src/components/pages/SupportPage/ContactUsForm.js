import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useScroll } from '../ParentDashboard/useScroll';
import { motion } from 'framer-motion';

function ContactUs({ success, visible, userInfo }) {
  const [element, controls] = useScroll();
  const scrollReveal = {
    hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

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
    <motion.div
      className="contact-form-container"
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h1>Contact Us</h1>
      <form className="Contact-Form-Container" onSubmit={sendEmail}>
        <div className="input-containers">
          <label>
            <p>Name</p>
          </label>
          <input type="text" name="name" className="contact-form-inputs" />
        </div>

        <div className="input-containers">
          <label>
            <p>Email</p>
          </label>
          <input type="email" name="email" className="contact-form-inputs" />
        </div>
        <div className="input-containers">
          <label>
            <p>Subject</p>
          </label>
          <input type="text" name="subject" className="contact-form-inputs" />
        </div>
        <div className="input-containers">
          <label>
            <p>Message</p>
          </label>
          <textarea name="message" className="contact-form-message" />
        </div>
        <div className="contact-button-container">
          <input
            type="submit"
            value="Send"
            className="contact-form-submit-button"
          />
        </div>
      </form>
    </motion.div>
  );
}

export default ContactUs;
