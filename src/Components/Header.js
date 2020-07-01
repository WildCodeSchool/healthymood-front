import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import logo from '../Images/healthymood-logo.png';
import banner from '../Images/healthymood-banner.jpg';
import Menu from './Menu';
import MenuDesktop from './MenuDesktop';
import TopNavBar from './TopNavBar';
import '../Styles/MenuDesktop.css';
import Pwa from './pwa';

function Header () {
  return (
    <header>
      <img
        src={banner}
        alt='bannière mobile healthymood'
        className='mobile-banner'
      />
      <Menu />
      <Pwa />
      <TopNavBar />
      <div className='header-container'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>
      <MenuDesktop />
    </header>
  );
}

export default Header;
