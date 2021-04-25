import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import ContactUs from './ContactUsForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { FadeInAnimation } from './FadeInAnimation';
import { TweenMax } from 'gsap/gsap-core';
import { Power3 } from 'gsap/gsap-core';

function RenderSupportPageAnimate({ success }) {
  const [expandEl, setExpandEl] = useState(false);
  let contact = useRef(null);
  //access the parents information in the reducer so we can pre-populate the form with their name & email.
  const userInfo = useSelector(state => state.parent);

  const expand = () => {
    TweenMax.to(contact, 0.8, {
      width: 200,
      height: 200,
      ease: Power3.easeOut,
    });
    setExpandEl(!expandEl);
  };
  const shrink = () => {
    TweenMax.to(contact, 0.8, {
      width: 0,
      height: 0,
      ease: Power3.easeOut,
    });
    setExpandEl(!expandEl);
  };

  return (
    <>
      <div className="support-page-container">
        <div className="contact-us-container">
          <h3>Contact Us</h3>
          <ContactUs
            success={success}
            userInfo={userInfo}
            expand={expand}
            shrink={shrink}
            contact={contact}
          />
        </div>

        <div className="button-container">
          <button className="FAQ-button">
            <h3>FAQ</h3>
          </button>
          <button
            className="contact-button"
            onClick={expandEl ? shrink : expand}
          >
            <h3>Contact Us</h3>
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default RenderSupportPageAnimate;
