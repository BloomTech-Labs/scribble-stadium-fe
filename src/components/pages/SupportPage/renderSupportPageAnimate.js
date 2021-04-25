import React, { useRef, useEffect, useState } from 'react';
import { TweenMax, Power3 } from 'gsap';
import ContactUsForm from './ContactUsForm';
import { useSelector } from 'react-redux';
import FAQ from './FAQ';

function RenderSupportPage({ success }) {
  //access the parents information in the reducer so we can pre-populate the form with their name & email.
  const userInfo = useSelector(state => state.parent);

  const [displayItem, setDisplayItem] = useState({ Form: false, Faq: false });
  let FAQbutton = useRef(null);
  let Contactbutton = useRef(null);
  let Form = useRef(null);
  const animate = input => {
    TweenMax.to([FAQbutton, Contactbutton], 0.5, { css: { height: '10vh' } });
    TweenMax.staggerTo([FAQbutton, Contactbutton], 1, {
      x: 0,
      y: 350,
      ease: Power3.easeIn,
    });
    input == 'contact-button'
      ? setDisplayItem({ Form: true, Faq: false })
      : setDisplayItem({ Form: false, Faq: true });
  };

  return (
    <div className="support-container">
      {displayItem.Form ? (
        <div
          className="Contact-Form-Container"
          ref={el => {
            Form = el;
          }}
        >
          <ContactUsForm success={success} userInfo={userInfo} />
          <div className="support-buttons-container">
            <button
              className="FAQ-button"
              ref={el => {
                FAQbutton = el;
              }}
              onClick={animate}
            >
              <h3>FAQ</h3>
            </button>
            <button
              className="contact-button"
              ref={el => {
                Contactbutton = el;
              }}
              onClick={() => animate('contact-button')}
            >
              <h3>Contact Us</h3>
            </button>
          </div>
        </div>
      ) : displayItem.Faq ? (
        <div
          className="FAQ-Container"
          ref={el => {
            Form = el;
          }}
        >
          <FAQ />
          <div className="support-buttons-container">
            <button
              className="FAQ-button"
              ref={el => {
                FAQbutton = el;
              }}
              onClick={animate}
            >
              <h3>FAQ</h3>
            </button>
            <button
              className="contact-button"
              ref={el => {
                Contactbutton = el;
              }}
              onClick={() => animate('contact-button')}
            >
              <h3>Contact Us</h3>
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="support-buttons-container">
            <button
              className="FAQ-button"
              ref={el => {
                FAQbutton = el;
              }}
              onClick={animate}
            >
              <h3>FAQ</h3>
            </button>
            <button
              className="contact-button"
              ref={el => {
                Contactbutton = el;
              }}
              onClick={() => animate('contact-button')}
            >
              <h3>Contact Us</h3>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default RenderSupportPage;
