import React from 'react';

const textClassName = fontColor => {
  return fontColor === 'light' ? 'text-light' : 'text-dark';
};

const ChildAvatar = ({ src, name, fontColor = 'dark' }) => {
  return (
    <div className="child-avatar">
      <div className="child-img-container">
        <img className="child-img" src={src} alt={`${name}'s avatar`} />
      </div>
      <p className={`outlined font-display ${textClassName(fontColor)}`}>
        {name}
      </p>
    </div>
  );
};

export default ChildAvatar;
