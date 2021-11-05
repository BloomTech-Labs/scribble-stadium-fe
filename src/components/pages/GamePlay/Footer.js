import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  // Get the current year
  const curYear = new Date().getFullYear();

  return (
    <footer>
      <div className="inner-container">
        <div className="copyright">©{curYear} Story Squad HQ</div>

        <nav className="footer-nav-container">
          <div className="footer-nav-div-link">
            <Link className="footer-nav-link" to="#">
              Contact
            </Link>
          </div>
          <div className="footer-nav-div-link">
            <Link className="footer-nav-link" to="#">
              FAQs
            </Link>
          </div>
          <div className="footer-nav-div-link">
            <Link className="footer-nav-link" to="#">
              Privacy
            </Link>
          </div>
          <div className="footer-nav-div-link">
            <Link className="footer-nav-link" to="#">
              Terms
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}
