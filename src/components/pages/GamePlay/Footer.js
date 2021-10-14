import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  // Get the current year
  const curYear = new Date().getFullYear();

  return (
    <footer>
      <div className="inner-container">
        <div class="copyright">©{curYear} Story Squad HQ</div>

        <nav>
          <Link to="#">Contact</Link>
          <Link to="#">FaQs</Link>
          <Link to="#">Privacy</Link>
          <Link to="#">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
