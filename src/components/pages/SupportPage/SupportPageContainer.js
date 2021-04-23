import React from 'react';
import { Header } from '../../common';

function SupportPageContainer(props) {
  return (
    <>
      <Header title="Support" displayMenu={true} />
      <div className="container">
        <button className="FAQ">FAQ</button>
        <button className="contact">Contact Us</button>
      </div>
    </>
  );
}

export default SupportPageContainer;
