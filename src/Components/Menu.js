import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Menu.css';
import accountIcon from '../Images/account.png';
import classicsIcon from '../Images/classics.png';
import dictionaryIcon from '../Images/dictionary.png';
import ebookIcon from '../Images/ebook.png';
import homeIcon from '../Images/home.png';
import logoutIcon from '../Images/logout.png';
import logInIcon from '../Images/login.png';
import recipesIcon from '../Images/recipes.png';
import searchIcon from '../Images/search.png';
import sendRecipeIcon from '../Images/send-recipe.png';
import tipsIcon from '../Images/tips.png';
import favoritesIcon from '../Images/favorites.png';
import listIcon from '../Images/list.png';

const navigationElements = [
  {
    text: 'Accueil',
    link: '/',
    submenu: false,
    withSubmenu: false,
    icon: homeIcon,
    slug: 'accueil',
  },
  {
    text: 'Rechercher',
    link: '/rechercher',
    submenu: false,
    withSubmenu: false,
    icon: searchIcon,
    slug: 'rechercher',
  },
  {
    text: 'Les recettes',
    link: '/recettes',
    submenu: false,
    withSubmenu: false,
    icon: recipesIcon,
    slug: 'recettes',
  },
  {
    text: 'Les classiques',
    link: '/classiques',
    submenu: false,
    withSubmenu: false,
    icon: classicsIcon,
    slug: 'classiques',
  },
  {
    text: 'Conseils & astuces',
    link: '/conseils-astuces',
    submenu: false,
    withSubmenu: false,
    icon: tipsIcon,
    slug: 'conseils-astuces',
  },
  {
    text: 'Dictionnaire',
    link: '/dictionnaire',
    submenu: false,
    withSubmenu: false,
    icon: dictionaryIcon,
    slug: 'dictionnaire',
  },
  {
    text: 'Ebook',
    link: '/e-book',
    submenu: false,
    withSubmenu: false,
    icon: ebookIcon,
    slug: 'ebook',
  },
  {
    text: 'Envoyer ma recette',
    link: 'envoyer-recette',
    submenu: false,
    withSubmenu: false,
    icon: sendRecipeIcon,
    slug: 'envoyer-recette',
  },
  {
    text: 'Mon compte',
    link: '#',
    submenu: false,
    withSubmenu: true,
    icon: accountIcon,
    slug: 'compte',
    needLogIn: true,
    needLogOut: false,
  },
  {
    text: 'Mes favoris',
    link: '/compte/favoris',
    submenu: true,
    withSubmenu: false,
    icon: favoritesIcon,
    slug: 'favoris',
    needLogIn: true,
    needLogOut: false,
  },
  {
    text: 'Ma liste de courses',
    link: '/compte/liste-courses',
    submenu: true,
    withSubmenu: false,
    icon: listIcon,
    slug: 'liste-courses',
    needLogIn: true,
    needLogOut: false,
  },
  {
    text: 'Déconnexion',
    link: '/deconnexion',
    submenu: false,
    withSubmenu: false,
    icon: logoutIcon,
    slug: 'deconnexion',
    needLogIn: true,
    needLogOut: false,
  },
  {
    text: 'Connexion',
    link: '/connexion',
    submenu: false,
    withSubmenu: false,
    icon: logInIcon,
    slug: 'connexion',
    needLogIn: false,
    needLogOut: true,
  }

];

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_connected: true,
    }
  }

  openMenu() {
    const navigationMenu = document.querySelector('#navigation-sidebar');
    const burgerMenu = document.querySelector('#burger-menu');
    const subMenu = document.getElementsByClassName('submenu');
    const overlay = document.querySelector('.overlay');
    overlay.classList.toggle('hidden');
    navigationMenu.classList.toggle('opened');
    burgerMenu.classList.toggle('opened');
    for (let i = 0; i < subMenu.length; i++) {
      subMenu[i].classList.add('hidden');
    }
  }

  openSubmenu() {
    const subMenu = document.getElementsByClassName('submenu');
    const subMenuOpener = document.querySelector('.with-submenu');
    for (let i = 0; i < subMenu.length; i++) {
      subMenu[i].classList.toggle('hidden');
    }
    subMenuOpener.classList.toggle('opened');
  }

  render() {
    return (
      <>
        <div className='burger-menu-container' onClick={this.openMenu}>
          <div id='burger-menu' className='burger-menu'>
            <span className='burger-menu-line-one' />
            <span className='burger-menu-line-two' />
            <span className='burger-menu-line-three' />
          </div>
        </div>

        <div className='overlay hidden' onClick={this.openMenu} />

        <div id='navigation-sidebar' className='navigation-sidebar-container'>
          {this.state.is_connected ?
            navigationElements.filter(element => element.needLogIn || element.needLogIn === undefined).map(element => {
              return (
                <NavLink key={element.text} exact to={element.link}>
                  <div
                    className={element.submenu
                      ? 'navigation-element-container submenu hidden'
                      : element.withSubmenu
                        ? 'navigation-element-container primary-menu with-submenu'
                        : 'navigation-element-container primary-menu'}
                    onClick={element.withSubmenu ? this.openSubmenu : undefined}
                  >
                    <span className={`navigation-icon ${element.slug}`} style={{ backgroundImage: `url(${element.icon})` }} /><p>{element.text}</p>
                  </div>
                </NavLink>
              );
            })
            :
            navigationElements.filter(element => element.needLogOut || element.needLogOut === undefined).map(element => {
              return (
                <NavLink key={element.text} exact to={element.link}>
                  <div
                    className={element.submenu
                      ? 'navigation-element-container submenu hidden'
                      : element.withSubmenu
                        ? 'navigation-element-container primary-menu with-submenu'
                        : 'navigation-element-container primary-menu'}
                    onClick={element.withSubmenu ? this.openSubmenu : undefined}
                  >
                    <span className={`navigation-icon ${element.slug}`} style={{ backgroundImage: `url(${element.icon})` }} /><p>{element.text}</p>
                  </div>
                </NavLink>
              );
            })
          }
        </div>
      </>
    );
  }
}

export default Menu;
