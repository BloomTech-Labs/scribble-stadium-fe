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
  //state to handle displaying of elements

  const [show, setShow] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const expand = React.createRef();
  const expandFAQ = React.createRef();
  const move = React.createRef();
  //GSAP animations
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
      // these effects expand the contact form in the center of the screen.
      {
        //this is the from co-ordinates
        y: 0,
        x: 0,
        scale: 0,
        opacity: 0,
      },
      {
        //this is the to co-ordinates
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
      // these effects shrink the contact form into the background.
      {
        //this is the from co-ordinates
        y: -100,
        x: 0,
        scale: 0.8,
        opacity: 1,
      },
      {
        //this is the to co-ordinates
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
      // these effects expand the FAQ into the center of the screen.
      {
        //this is the from co-ordinates
        y: 0,
        x: 0,
        scale: 0,
        opacity: 0,
      },
      {
        //this is the to co-ordinates
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
          <textarea name="message" className="contact-form-message" required />
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
          style={showFAQ ? { width: '80vw' } : { display: 'none' }}
        >
          <Collapse
            bordered={false}
            defaultActiveKey={['0']}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            className="site-collapse-custom-collapse"
          >
            <Panel
              header={
                <h3>
                  Question 1 goes here and this is just extra placeholder text?
                </h3>
              }
              key="1"
              className="site-collapse-custom-panel"
            >
              <p>Answer for 1 goes here and of course more placeholder text.</p>
            </Panel>
            <Panel
              header={
                <h3>
                  Question 2 goes here and this is just extra placeholder text?
                </h3>
              }
              key="2"
              className="site-collapse-custom-panel"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint?
              </p>
            </Panel>
            <Panel
              header={
                <h3>
                  Question 3 goes here and this is just extra placeholder text?
                </h3>
              }
              key="3"
              className="site-collapse-custom-panel"
            >
              <p>
                Answer for 3 goes here. Unfortunately, this is where the place-
                holder text has to stop.
              </p>
            </Panel>
            <Panel
              header={
                <h3>
                  Question 4 goes here and this is just extra placeholder text?
                </h3>
              }
              key="4"
              className="site-collapse-custom-panel"
            >
              <p>
                Answer for 4 goes here. Unfortunately, this is where the place-
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
