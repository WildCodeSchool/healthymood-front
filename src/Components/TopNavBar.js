import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import MenuElements from '../MenuElements.json';
import '../Styles/TopNavBar.css';
import AuthContext from '../Context/authContext';

const TopNavBar = (props) => {
  const [isConnected, setIsConnected] = useState(true);
  const { setTokenInLocalStorage } = useContext(AuthContext);

  const connected = () => {
    setIsConnected(!isConnected);
  };

  return (
    <div className='desktop-top-nav-bar'>
      {isConnected
        ? MenuElements.navigationElements
          .filter(
            (element) =>
              element.needLogIn || element.text === 'Envoyer ma recette'
          )
          .map((e) => {
            return (
              <NavLink
                key={e.text}
                exact
                to={e.link}
                className={`topnav-bar-link-${e.slug}`}
              >
                <div
                  className='topnav-bar-element-container'
                  onClick={connected}
                  handleClick={() => setTokenInLocalStorage('')}
                >
                  <p>{e.text}</p>
                </div>
              </NavLink>
            );
          })
        : MenuElements.navigationElements
          .filter(
            (element) =>
              element.needLogOut || element.text === 'Envoyer ma recette'
          )
          .map((e) => {
            return (
              <NavLink
                key={e.text}
                exact
                to={e.link}
                className={`topnav-bar-link-${e.slug}`}
              >
                <div onClick={connected}>
                  <p>{e.text}</p>
                </div>
              </NavLink>
            );
          })}
    </div>
  );
};

export default TopNavBar;
