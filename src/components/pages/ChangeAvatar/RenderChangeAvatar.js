import React from 'react';
import { Header } from '../../common';
import '../../../styles/less/ChangeYourAvatar.less';

const RenderChangeAvatar = () => {
  return (
    <>
      <Header displayMenu={true} />
      <div className="avatar-header">
        <h2>Choose your avatar</h2>
        <div className="avatar-cards-container">
          <div className="avatar-card">
            <div className="avatar-lighting-kid"></div>
          </div>
          <div className="avatar-card">
            <div className="avatar-captain-falcon-kid"></div>
          </div>
          <div className="avatar-card">
            <div className="avatar-shazaam-kid"></div>
          </div>
          <div className="avatar-card">
            <div className="avatar-blue-whirlwind-kid"></div>
          </div>
          <div className="avatar-card">
            <div className="avatar-pan-on-head-kid"></div>
          </div>
          <div className="avatar-card">
            <div className="avatar-purple-hero-kid"></div>
          </div>
          <div className="avatar-card">
            <div className="avatar-frost-kid"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RenderChangeAvatar;
