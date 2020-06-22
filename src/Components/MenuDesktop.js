import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/MenuDesktop.css';
import MenuElements from '../MenuElements.json';

const MenuDesktop = (props) => {
  return (
    <div className='menu-desktop-container'>
      {MenuElements.navigationElements.filter(element => element.needLogIn === undefined || element.needLogOut === undefined).filter(element => element.text !== 'Accueil' && element.text !== 'Rechercher' && element.text !== 'Envoyer ma recette').map(e => {
        return (
          <NavLink key={e.text} exact to={e.link}>
            <div className={`menu-desktop-element-container menu-desktop-element-container-${e.slug}`}>
              <p>{e.text}</p>
            </div>
          </NavLink>
        );
      })}
      {MenuElements.navigationElements.filter(element => element.text === 'Rechercher').map(e => {
        return (
          <NavLink key={e.text} exact to={e.link}>
            <div className={`menu-desktop-element-container menu-desktop-element-container-${e.slug}`}>
              <p>{e.text}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default MenuDesktop;
