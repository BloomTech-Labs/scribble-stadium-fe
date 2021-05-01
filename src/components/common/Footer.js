import React from 'react';

function Footer(props) {
  return (
    <div className="footerContainer">
      <div className="footer-1-container">
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
          </div>
        </div>
      </div>
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
      <div className="socials">
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

export default Footer;
