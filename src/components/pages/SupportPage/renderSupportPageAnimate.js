import React, { useState } from 'react';
import { gsap } from 'gsap';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import emailjs from 'emailjs-com';
import { useSelector } from 'react-redux';

const { Panel } = Collapse;

function RenderSupportPageAnimate({ success }) {
  //access the parents information in the reducer so we can pre-populate the form with their name & email.
  const userInfo = useSelector(state => state.parent);
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
    ContactClose();
  }

  const [show, setShow] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const expand = React.createRef();
  const expandFAQ = React.createRef();
  const move = React.createRef();

  const Contact = () => {
    setShowFAQ(false);
    setShow(!show);
    gsap.to(move.current, {
      y: 220,
      scale: 0.6,
      borderRadius: 70,
      duration: 2,
      ease: 'bounce',
    });
    gsap.fromTo(
      expand.current,
      // these effects expand an image in the center of the screen.
      {
        //this first set of curly brackets is the from co-ordinates
        y: 0,
        x: 0,
        scale: 0,
        opacity: 0,
      },
      {
        //this first set of curly brackets is the from co-ordinates
        y: -100,
        x: 0,
        scale: 0.8,
        opacity: 1,
        duration: 2,
      }
    );
  };
  const ContactClose = () => {
    gsap.to(move.current, {
      y: 0,
      scale: 1,
      borderRadius: 70,
      duration: 2,
      ease: 'bounce',
    });
    gsap.fromTo(
      expand.current,
      // these effects expand an image in the center of the screen.
      {
        //this first set of curly brackets is the from co-ordinates
        y: -100,
        x: 0,
        scale: 0.8,
        opacity: 1,
      },
      {
        //this first set of curly brackets is the from co-ordinates
        y: 0,
        x: 0,
        scale: 0,
        opacity: 0,
        duration: 2,
      }
    );
  };

  const FAQ = () => {
    setShow(false);
    setShowFAQ(!showFAQ);
    gsap.to(move.current, {
      y: 220,
      scale: 0.6,
      borderRadius: 70,
      duration: 2,
      ease: 'bounce',
    });
    gsap.fromTo(
      expandFAQ.current,
      // these effects expand an image in the center of the screen.
      {
        //this first set of curly brackets is the from co-ordinates
        y: 0,
        x: 0,
        scale: 0,
        opacity: 0,
      },
      {
        //this first set of curly brackets is the from co-ordinates
        y: -100,
        x: 0,
        scale: 0.8,
        opacity: 1,
        duration: 2,
      }
    );
  };

  return (
    <>
      <div className="support-page-container">
        <form
          className="Contact-Form-Container"
          ref={expand}
          style={show ? null : { display: 'none' }}
          onSubmit={sendEmail}
        >
          <h3>Contact Us</h3>
          <label>
            <p>Name</p>
          </label>
          <input
            type="text"
            name="name"
            className="contact-form-inputs"
            defaultValue={userInfo.name}
          />
          <label>
            <p>Email</p>
          </label>
          <input
            type="email"
            name="email"
            className="contact-form-inputs"
            defaultValue={userInfo.email}
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

        <div
          className="FAQ-container"
          ref={expandFAQ}
          style={showFAQ ? null : { display: 'none' }}
        >
          <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            className="site-collapse-custom-collapse"
          >
            <Panel
              header="Question 1 goes here and this is just extra placeholder text?"
              key="1"
              className="site-collapse-custom-panel"
            >
              <p>Answer for 1 goes here and of course more placeholder text.</p>
            </Panel>
            <Panel
              header="Question 2 goes here and will there be more placeholder text
          this time?"
              key="2"
              className="site-collapse-custom-panel"
            >
              <p>
                Answer for 2 goes here. Absolutely there will be more place-
                holder text in this wireframe.
              </p>
            </Panel>
            <Panel
              header="Question 3 goes here but will the placeholder text ever stop?"
              key="3"
              className="site-collapse-custom-panel"
            >
              <p>
                Answer for 3 goes here. Unfortunately, this is where the place-
                holder text has to stop.
              </p>
            </Panel>
          </Collapse>
        </div>

        <div className="button-container" ref={move}>
          <button className="FAQ-button" onClick={FAQ}>
            <h3>FAQ</h3>
          </button>
          <button className="contact-button" onClick={Contact}>
            <h3>Contact Us</h3>
          </button>
        </div>
      </div>
    </>
  );
}

export default RenderSupportPageAnimate;
