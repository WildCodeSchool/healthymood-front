import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import MenuElements from '../MenuElements.json';
import '../Styles/TopNavBar.css';
import AuthContext from '../Context/authContext';

const TopNavBar = (props) => {
  const { connected, setLogOut } = useContext(AuthContext);

  // const connected = () => {
  //   setIsConnected(!isConnected);
  /*  }; */

  return (
    <div className='desktop-top-nav-bar'>
      {connected
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
                <div className='topnav-bar-element-container'>
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
                <div>
                  <p>{e.text}</p>
                </div>
              </NavLink>
            );
          })}

      <Link to='/'>
        <button className='topnav-bar-link-deconnexion' onClick={setLogOut}>Déconnexion</button>
      </Link>
    </div>
  );
};

export default TopNavBar;
