import React from 'react';
import { Header } from '../../common';
import '../../../styles/less/ChangeYourAvatar.less';

const RenderChangeAvatar = () => {
  return (
    <>
      <Header displayMenu={true} />
      <div className="avatar-header">
        <h2>Choose your avatar</h2>
        <div className="avatar-cards-container"></div>
      </div>
    </>
  );
};

export default RenderChangeAvatar;
