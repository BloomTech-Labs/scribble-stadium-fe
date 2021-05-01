import React from 'react';
import {
  FacebookOutlined,
  GooglePlusOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import SSLogo from '../../assets/images/SSLogo.png';

function Footer(props) {
  return (
    <div className="footerContainer">
      <div className="one">
        <AddressDetailsAndNewsletter />
      </div>
      <div className="two">
        <ContactForm />
      </div>
      <div className="three">
        <Socials />
      </div>
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
      <div className="newsletter">
        <div>
          <label>
            <p>Sign up for our newsletter</p>
          </label>
          <input
            className="newsletterInput"
            type="email"
            name="email"
            placeholder="Email"
            //   defaultValue={userInfo.email}
          />
          <div class="item contact-button">
            <input
              type="submit"
              value="Send"
              className="newsletter-submit-button"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm(props) {
  return (
    <div>
      <form>
        <div class="formContainer">
          <div class="item header">
            <h2>Contact Us</h2>
          </div>
          <div class="item name">
            <label>
              <p>Name</p>
            </label>
          </div>
          <div class="item nameInput">
            <input
              className="nameInput"
              type="text"
              name="name"
              //defaultValue={userInfo.name}
            />
          </div>
          <div class="item email">
            <label>
              <p>Email</p>
            </label>
          </div>
          <div class="item emailInput">
            <input
              className="emailInput"
              type="email"
              name="email"
              //   defaultValue={userInfo.email}
            />
          </div>
          <div class="item message">
            <label>
              <p>Message</p>
            </label>
          </div>
          <div class="item messageInput">
            <textarea className="messageInput" name="message" />
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
      <img
        src={SSLogo}
        alt="Story-Squad-logo"
        style={{ width: '120px', borderRadius: '20px' }}
      />
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
