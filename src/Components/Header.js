import React from 'react';
import '../Styles/Header.css';
import logo from "../Images/healthymood-logo.png";

function Header (){
    return(
        <div className='header-container'>
           <img src={logo} alt='logo'></img>
        </div>
    )
}

export default Header;