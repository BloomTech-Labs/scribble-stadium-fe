import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/less/ParentFooter.less';

export default function ParentFooter(props) {
  // if no need to scroll go to the bottom of the page -> pass `no-scroll` by props
  const { layoutContainerCheck } = props;

  // Get the current year
  const curYear = new Date().getFullYear();

  return (
    <footer className={layoutContainerCheck}>
      <div className="inner-container">
        <nav className="parent-footer-nav-container">
          <div className="parent-footer-nav-div-link">
            <Link className="parent-footer-nav-link" to="/parent/contact">
              Contact
            </Link>
          </div>
          <div className="parent-footer-nav-div-link">
            <Link className="parent-footer-nav-link" to="/parent/faq">
              FAQs
            </Link>
          </div>
          <div className="parent-footer-nav-div-link">
            <Link className="parent-footer-nav-link" to="#">
              Privacy
            </Link>
          </div>
          <div className="parent-footer-nav-div-link">
            <Link className="footer-nav-link" to="#">
              Terms
            </Link>
          </div>
        </nav>
        <div className="copyright">©{curYear} Story Squad HQ</div>
      </div>
    </footer>
  );
}
