import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/TopNavBar.css';
import AuthContext from '../Context/authContext';

const TopNavBar = () => {
  const { connected, setLogOut } = useContext(AuthContext);

  return (
    <div className='desktop-top-nav-bar'>
      {connected ? (
        <>
          <NavLink
            exact
            to='/envoyer-recette'
            className='topnav-bar-link-envoyer-recette'
          >
            <div className='topnav-bar-element-container'>
              <p>Envoyer ma recette</p>
            </div>
          </NavLink>

          <NavLink
            exact
            to='/compte/favoris'
            className='topnav-bar-link-favoris'
          >
            <div className='topnav-bar-element-container'>
              <p>Mes favoris</p>
            </div>
          </NavLink>

          <NavLink exact to='/' className='topnav-bar-link-deconnexion'>
            <div className='topnav-bar-element-container' onClick={setLogOut}>
              <p>Déconnexion</p>
            </div>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            exact
            to='/envoyer-recette'
            className='topnav-bar-link-envoyer-recette'
          >
            <div className='topnav-bar-element-container'>
              <p>Envoyer ma recette</p>
            </div>
          </NavLink>

          <NavLink exact to='/register' className='topnav-bar-link-register'>
            <div className='topnav-bar-element-container'>
              <p>Créer mon compte</p>
            </div>
          </NavLink>

          <NavLink exact to='/login' className='topnav-bar-link-connexion'>
            <div className='topnav-bar-element-container'>
              <p>Connexion</p>
            </div>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default TopNavBar;
