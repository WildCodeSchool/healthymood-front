import React from 'react';
import '../Styles/Header.css';
import logo from '../Images/healthymood-logo.png';
import banner from '../Images/healthymood-banner.jpg';
import Menu from './Menu';

function Header () {
  return (
    <header>
      <Menu />
      <img src={banner} alt='logo' />
      <div className='header-container'>
        <img src={logo} alt='logo' />
      </div>
    </header>
  );
}

export default Header;
