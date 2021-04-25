import React from 'react';
import { gsap } from 'gsap';

function RenderSupportPage({ success }) {
  return (
    <div className="container">
      <button className="FAQ">
        <h3>FAQ</h3>
      </button>
      <button className="contact">
        <h3>Contact Us</h3>
      </button>
    </div>
  );
}

export default RenderSupportPage;
