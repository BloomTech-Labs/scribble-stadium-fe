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
          <form className="footer-Contact-Form-Container" onSubmit={null}>
            <div className="input-container-1">
              <input
                placeholder="Name"
                type="text"
                name="name"
                className="footer-contact-form-inputs"
                //   defaultValue={userInfo.name}
              />
              <input
                placeholder="Email"
                type="email"
                name="email"
                className="footer-contact-form-inputs"
                //   defaultValue={userInfo.email}
              />
            </div>
            <div className="input-container-2">
              <textarea
                placeholder="Message"
                name="message"
                className="footer-contact-form-message"
              />
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
