import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Menu.css';
import MenuElements from '../MenuElements.json';
import AuthContext from '../Context/authContext';

const Menu = (props) => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  const [subMenuIsOpened, setSubMenuIsOpened] = useState(false);
  const { connected, setLogOut } = useContext(AuthContext);

  const handleOpenMenu = () => {
    setMenuIsOpened(!menuIsOpened);
    setSubMenuIsOpened(false);
  };

  const handleOpenSubmenu = () => {
    setSubMenuIsOpened(!subMenuIsOpened);
  };

  const subMenuToggle = () => {
    if (menuIsOpened) {
      if (!subMenuIsOpened) {
        return 'navigation-element-container submenu hidden';
      } else {
        return 'navigation-element-container submenu';
      }
    } else {
      return 'navigation-element-container submenu hidden';
    }
  };

  return (
    <>
      <div className='burger-menu-container' onClick={handleOpenMenu}>
        <div
          id='burger-menu'
          className={menuIsOpened ? 'burger-menu hidden' : 'burger-menu'}
        >
          <span className='burger-menu-line-one' />
          <span className='burger-menu-line-two' />
          <span className='burger-menu-line-three' />
        </div>
      </div>

      <div
        className={menuIsOpened ? 'overlay' : 'overlay hidden'}
        onClick={handleOpenMenu}
      />

      <div
        id='navigation-sidebar'
        className={
          menuIsOpened
            ? 'navigation-sidebar-container opened'
            : 'navigation-sidebar-container'
        }
      >
        {connected
          ? MenuElements.navigationElements
            .filter(
              (element) =>
                element.needLogIn || element.needLogIn === undefined
            )
            .map((element) => {
              return (
                <NavLink key={element.text} exact to={element.link}>
                  <div
                    className={
                      element.submenu
                        ? subMenuToggle()
                        : element.withSubmenu
                          ? subMenuIsOpened
                            ? 'navigation-element-container primary-menu with-submenu opened'
                            : 'navigation-element-container primary-menu with-submenu'
                          : 'navigation-element-container primary-menu'
                    }
                    onClick={
                      element.withSubmenu ? handleOpenSubmenu : undefined
                    }
                  >
                    <span
                      className={`navigation-icon ${element.slug}`}
                      style={{
                        backgroundImage: `url(${require('../Images/' +
                            element.icon)})`
                      }}
                      onClick={element.logOut && setLogOut}
                    />
                    <p onClick={element.logOut && setLogOut}>{element.text}</p>
                  </div>
                </NavLink>
              );
            })
          : MenuElements.navigationElements
            .filter(
              (element) =>
                element.needLogOut || element.needLogOut === undefined
            )
            .map((element) => {
              return (
                <NavLink key={element.text} exact to={element.link}>
                  <div
                    className={
                      element.submenu
                        ? subMenuToggle()
                        : element.withSubmenu
                          ? subMenuIsOpened
                            ? 'navigation-element-container primary-menu with-submenu opened'
                            : 'navigation-element-container primary-menu with-submenu'
                          : 'navigation-element-container primary-menu'
                    }
                    onClick={
                      element.withSubmenu ? handleOpenSubmenu : undefined
                    }
                  >
                    <span
                      className={`navigation-icon ${element.slug}`}
                      style={{
                        backgroundImage: `url(${require('../Images/' +
                            element.icon)})`
                      }}
                    />
                    <p>{element.text}</p>
                  </div>
                </NavLink>
              );
            })}
      </div>
    </>
  );
};

export default Menu;
