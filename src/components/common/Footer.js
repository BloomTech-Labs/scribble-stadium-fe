import React from 'react';

function Footer(props) {
  return (
    <div>
      <footer className="parent-dash-footer">
        <div className="footer-1-container">
          <div className="address-info">
            <div class="contact-details">
              <h6>Contact details</h6>
              <p>
                <i class="" aria-hidden="true"></i> 01234 567890
              </p>
              <p>
                <a href="#">
                  <i class="f" aria-hidden="true"></i> Contact us
                </a>
              </p>
              <p>
                <i class="" aria-hidden="true"></i>
                Street, City, County, Country
              </p>
            </div>
          </div>
          <div className="newsletter"></div>
        </div>
        <div className="footer-contact-us-form">
          <h2>Contact Us</h2>
          <form onSubmit={null}>
            <div className="input-container">
              <label>
                <p>Name</p>
              </label>
              <input
                className="inputs"
                type="text"
                name="name"
                //   defaultValue={userInfo.name}
              />
            </div>
            <div className="input-container">
              <label>
                <p>Email</p>
              </label>
              <input
                className="inputs"
                type="email"
                name="email"
                //   defaultValue={userInfo.email}
              />
            </div>
            <div className="input-container">
              <label>
                <p>Message</p>
              </label>
              <textarea className="inputs message" name="message" />
            </div>
            <div className="footer-contact-button-container">
              <input
                type="submit"
                value="Send"
                className="footer-contact-form-submit-button"
              />
            </div>
          </form>
        </div>
        <div className="socials"></div>
      </footer>
    </div>
  );
}

export default Footer;
