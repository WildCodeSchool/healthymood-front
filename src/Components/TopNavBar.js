import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuElements from '../MenuElements.json';
import '../Styles/TopNavBar.css';

const TopNavBar = (props) => {
  const [isConnected] = useState(true);

  return (
    <div className='desktop-top-nav-bar'>
      {isConnected
        ? MenuElements.navigationElements.filter(element => element.needLogIn).map(e => {
          return (
            <NavLink key={e.text} exact to={e.link}>
              <div className='topnav-bar-element-container'>
                <p>{e.text}</p>
              </div>
            </NavLink>
          );
        })
        : MenuElements.navigationElements.filter(element => element.needLogOut).map(e => {
          return (
            <NavLink key={e.text} exact to={e.link}>
              <div className=''>
                <p>{e.text}</p>
              </div>
            </NavLink>
          );
        })}
    </div>
  );
};

export default TopNavBar;
