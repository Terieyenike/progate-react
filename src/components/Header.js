import React from 'react';
import Logo from '../progate.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-logo'>
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
