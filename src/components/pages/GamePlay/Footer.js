import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  // Get the current year
  const curYear = new Date().getFullYear();

  return (
    <footer>
      <div className="inner-container">
        <div class="copyright">©{curYear} Story Squad HQ</div>
      </div>
    </footer>
  );
}
