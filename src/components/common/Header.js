import React from 'react';
import city_img from '../../assets/images/cityscape.svg';

const Header = () => {
  return (
    <div className="Hero">
      <p className="header-text">STORY SQUAD</p>
      <img src={city_img} alt="MyCity" />
    </div>
  );
};
export default Header;
