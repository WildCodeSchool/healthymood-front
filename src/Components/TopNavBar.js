import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuElements from '../MenuElements.json';
import '../Styles/TopNavBar.css';
// import AuthContext from '../Context/authContext';

const TopNavBar = (props) => {
  const [isConnected, setIsConnected] = useState(false);
  // const setTokenInLocalStorage = useContext(AuthContext).setToken;

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

                >
                  <p>{e.text}</p>
                </div>
                {/* <button onClick={() => setTokenInLocalStorage('')}>log out</button> */}
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
          <NavLink>
            <button></button>
          </NavLink>
    </div>
  );
};

export default TopNavBar;
