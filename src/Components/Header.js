import React from 'react';
import '../Styles/Header.css';
import logo from "../Images/healthymood-logo.png";
import banner from "../Images/healthymood-banner.jpg";

function Header (){
    return(
        <header>
            <img src={banner} alt='logo'></img>
            <div className='header-container'>
            <img src={logo} alt='logo'></img>
            </div>
        </header>
    )
}

export default Header;